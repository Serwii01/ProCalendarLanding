import { Component } from '@angular/core';
import { TranslatePipe } from '../../services/translate.pipe';

@Component({
  selector: 'app-terms',
  standalone: true,
  imports: [TranslatePipe],
  template: `
    <section class="legal-hero">
      <div class="container">
        <span class="legal-tag">LEGAL</span>
        <h1>{{ 'terms.title' | t }}</h1>
        <p class="legal-date">{{ 'terms.lastUpdated' | t }}</p>
        <p class="legal-intro">{{ 'terms.intro' | t }}</p>
      </div>
    </section>

    <section class="container legal-body">
      <article>
        <h2>{{ 'terms.s1.title' | t }}</h2><p>{{ 'terms.s1.body' | t }}</p>
        <h2>{{ 'terms.s2.title' | t }}</h2><p>{{ 'terms.s2.body' | t }}</p>
        <h2>{{ 'terms.s3.title' | t }}</h2><p>{{ 'terms.s3.body' | t }}</p>
        <h2>{{ 'terms.s4.title' | t }}</h2><p>{{ 'terms.s4.body' | t }}</p>
        <h2>{{ 'terms.s5.title' | t }}</h2><p>{{ 'terms.s5.body' | t }}</p>
        <h2>{{ 'terms.s6.title' | t }}</h2><p>{{ 'terms.s6.body' | t }}</p>
        <h2>{{ 'terms.s7.title' | t }}</h2><p>{{ 'terms.s7.body' | t }}</p>
      </article>
    </section>
  `,
  styleUrl: './terms.component.scss'
})
export class TermsComponent {}
