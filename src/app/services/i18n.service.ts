import { Injectable, computed, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

export type Lang = 'es' | 'en' | 'zh-CN';

const LS_KEY = 'procalendar.lang';

@Injectable({ providedIn: 'root' })
export class I18nService {
  private http = inject(HttpClient);

  /** Idiomas soportados. Para añadir uno nuevo, crea assets/i18n/<code>.json y añádelo aquí. */
  readonly available: { code: Lang; label: string; flag: string }[] = [
  { code: 'es', label: 'Español',  flag: '🇪🇸' },
  { code: 'en', label: 'English',  flag: '🇬🇧' },
  { code: 'zh-CN', label: '中文',  flag: '🇨🇳' },
];

  /** Diccionarios cargados, indexados por idioma. */
  private dicts = new Map<Lang, Record<string, string>>();

  /** Idioma activo (signal reactivo). */
  readonly current = signal<Lang>('es');

  /** Diccionario del idioma activo (computado). */
  readonly dict = computed<Record<string, string>>(() => this.dicts.get(this.current()) ?? {});

  async init(): Promise<void> {
    const stored = (typeof localStorage !== 'undefined' && localStorage.getItem(LS_KEY)) as Lang | null;
    const browser = (typeof navigator !== 'undefined' && navigator.language?.slice(0, 2)) as Lang | undefined;
    const initial: Lang = stored ?? (this.isSupported(browser) ? browser! : 'es');
    await this.set(initial);
  }

  async set(lang: Lang): Promise<void> {
    if (!this.dicts.has(lang)) {
      try {
        const dict = await firstValueFrom(this.http.get<Record<string, string>>(`assets/i18n/${lang}.json`));
        this.dicts.set(lang, dict ?? {});
      } catch (e) {
        console.error(`[i18n] no se pudo cargar ${lang}`, e);
        this.dicts.set(lang, {});
      }
    }
    this.current.set(lang);
    if (typeof localStorage !== 'undefined') localStorage.setItem(LS_KEY, lang);
    if (typeof document !== 'undefined') document.documentElement.lang = lang;
  }

  /** Resuelve una clave de traducción con interpolación opcional {{var}}. */
  t(key: string, params?: Record<string, string | number>): string {
    let val = this.dict()[key] ?? key;
    if (params) {
      for (const k of Object.keys(params)) {
        val = val.replace(new RegExp(`\\{\\{\\s*${k}\\s*\\}\\}`, 'g'), String(params[k]));
      }
    }
    return val;
  }

  private isSupported(code: string | undefined): code is Lang {
    return !!code && this.available.some(a => a.code === code);
  }
}
