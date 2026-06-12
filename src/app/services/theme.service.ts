import { Injectable, signal } from '@angular/core';

export type Theme = 'light' | 'dark' | 'auto';
const LS_KEY = 'procalendar.theme';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  readonly current = signal<Theme>('auto');

  init(): void {
    const saved = (typeof localStorage !== 'undefined' && localStorage.getItem(LS_KEY)) as Theme | null;
    const t: Theme = saved ?? 'auto';
    this.current.set(t);
    this.apply(t);

    // Reaplica cuando cambia el SO si está en auto
    if (typeof window !== 'undefined' && window.matchMedia) {
      window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
        if (this.current() === 'auto') this.apply('auto');
      });
    }
  }

  set(t: Theme): void {
    this.current.set(t);
    if (typeof localStorage !== 'undefined') localStorage.setItem(LS_KEY, t);
    this.apply(t);
  }

  /** Toggle simple light ↔ dark (ignora auto). */
  toggle(): void {
    this.set(this.effective() === 'dark' ? 'light' : 'dark');
  }

  /** Tema efectivo aplicado al DOM (light o dark). */
  effective(): 'light' | 'dark' {
    const t = this.current();
    if (t === 'auto') {
      return (typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches)
        ? 'dark' : 'light';
    }
    return t;
  }

  private apply(t: Theme): void {
    if (typeof document === 'undefined') return;
    const eff = t === 'auto'
      ? (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
      : t;
    document.documentElement.dataset['theme'] = eff;
  }
}
