import { Component, computed, inject, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
import { I18nService, Lang } from '../../services/i18n.service';
import { TranslatePipe } from '../../services/translate.pipe';

export const GITHUB_REPO = 'https://github.com/Serwii01/ProCalendar';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive, TranslatePipe],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  i18n = inject(I18nService);
  githubUrl = GITHUB_REPO;
  menuOpen = signal(false);
  langOpen = signal(false);

  // Bandera del idioma activo, computed para evitar arrow functions en template
  currentFlag = computed(() => {
    const code = this.i18n.current();
    const entry = this.i18n.available.find(a => a.code === code);
    return entry ? entry.flag : '🌐';
  });

  currentCode = computed(() => this.i18n.current().toUpperCase());

  toggleMenu() { this.menuOpen.update(v => !v); }
  closeMenu() { this.menuOpen.set(false); }

  toggleLang() { this.langOpen.update(v => !v); }
  async pickLang(l: Lang) {
    await this.i18n.set(l);
    this.langOpen.set(false);
  }

  isActiveLang(code: Lang): boolean {
    return this.i18n.current() === code;
  }
}
