import { Component } from '@angular/core';
import { TranslatePipe } from '../../services/translate.pipe';

@Component({
  selector: 'app-privacy',
  standalone: true,
  imports: [TranslatePipe],
  template: `
    <section class="legal-hero">
      <div class="container">
        <span class="legal-tag">LEGAL</span>
        <h1>{{ 'privacy.title' | t }}</h1>
        <p class="legal-date">{{ 'privacy.lastUpdated' | t }}</p>
        <p class="legal-intro">{{ 'privacy.intro' | t }}</p>
      </div>
    </section>

    <section class="container legal-body">
      <article>
        <h2>{{ 'privacy.s1.title' | t }}</h2>
        <p>{{ 'privacy.s1.body' | t }}</p>

        <h2>{{ 'privacy.s2.title' | t }}</h2>
        <div class="data-grid">
          <div class="data-card light">
            <strong>Account Info</strong>
            <p>{{ 'privacy.s2.account' | t }}</p>
          </div>
          <div class="data-card dark">
            <strong>Calendar Data</strong>
            <p>{{ 'privacy.s2.calendar' | t }}</p>
          </div>
        </div>

        <h2>{{ 'privacy.s3.title' | t }}</h2>
        <ul class="check-list">
          <li>{{ 'privacy.s3.l1' | t }}</li>
          <li>{{ 'privacy.s3.l2' | t }}</li>
          <li>{{ 'privacy.s3.l3' | t }}</li>
        </ul>

        <h2>{{ 'privacy.s4.title' | t }}</h2>
        <p>{{ 'privacy.s4.body' | t }}</p>

        <h2>{{ 'privacy.s5.title' | t }}</h2>
        <p>{{ 'privacy.s5.body' | t }}</p>

        <h2>{{ 'privacy.s6.title' | t }}</h2>
        <p>{{ 'privacy.s6.body' | t }}</p>
      </article>
    </section>
  `,
  styles: [`
    @use '../terms/terms.component.scss';

    .data-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 16px;
      margin: 16px 0 32px;
    }
    .data-card {
      padding: 18px;
      border-radius: 14px;
    }
    .data-card.light { background: #eff2ff; }
    .data-card.dark  { background: #e6f0ff; }
    .data-card strong { display: block; font-size: 15px; margin-bottom: 6px; color: var(--primary-strong); }
    .data-card p { font-size: 13px; margin: 0; }

    .check-list {
      list-style: none;
      padding: 0;
      margin: 12px 0 28px;
      display: flex;
      flex-direction: column;
      gap: 8px;
    }
    .check-list li {
      position: relative;
      padding-left: 28px;
      font-size: 15px;
      color: var(--text-soft);
    }
    .check-list li::before {
      content: "✓";
      position: absolute;
      left: 0; top: 0;
      width: 20px; height: 20px;
      background: var(--primary-soft);
      color: var(--primary-strong);
      border-radius: 50%;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      font-size: 12px;
      font-weight: 800;
    }

    @media (max-width: 640px) {
      .data-grid { grid-template-columns: 1fr; }
    }
  `]
})
export class PrivacyComponent {}
