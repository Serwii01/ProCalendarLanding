import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '../../services/translate.pipe';
import { GITHUB_REPO } from '../header/header.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink, TranslatePipe],
  template: `
    <footer class="ftr">
      <div class="container ftr-inner">
        <div class="ftr-brand">
          <span class="brand-dot"></span>
          <span>Pro Calendar</span>
        </div>
        <div class="ftr-links">
          <a routerLink="/">{{ 'nav.home' | t }}</a>
          <a routerLink="/help">{{ 'nav.help' | t }}</a>
          <a routerLink="/terms">{{ 'nav.terms' | t }}</a>
          <a routerLink="/privacy">{{ 'nav.privacy' | t }}</a>
          <a [href]="github" target="_blank" rel="noopener">GitHub</a>
        </div>
      </div>
      <div class="ftr-bottom container">
        <span>{{ 'footer.copy' | t }}</span>
      </div>
    </footer>
  `,
  styles: [`
    .ftr {
      background: var(--surface);
      border-top: 1px solid var(--line);
      margin-top: 80px;
      padding: 40px 0 24px;
    }
    .ftr-inner {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 24px;
      flex-wrap: wrap;
    }
    .ftr-brand {
      display: inline-flex;
      align-items: center;
      gap: 10px;
      font-weight: 800;
      font-size: 15px;
    }
    .brand-dot {
      width: 18px; height: 18px;
      border-radius: 5px;
      background: linear-gradient(135deg, var(--primary), #7c3aed);
    }
    .ftr-links {
      display: flex;
      gap: 24px;
      flex-wrap: wrap;
    }
    .ftr-links a {
      font-size: 13px;
      font-weight: 600;
      color: var(--muted);
    }
    .ftr-links a:hover { color: var(--primary); }
    .ftr-bottom {
      margin-top: 32px;
      padding-top: 20px;
      border-top: 1px solid var(--line);
      font-size: 12px;
      color: var(--muted);
    }
  `]
})
export class FooterComponent {
  github = GITHUB_REPO;
}
