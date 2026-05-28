import { Component, OnInit, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { I18nService } from './services/i18n.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  template: `
    <app-header></app-header>
    <main><router-outlet></router-outlet></main>
    <app-footer></app-footer>
  `,
  styles: [`main { min-height: calc(100vh - 200px); }`]
})
export class AppComponent implements OnInit {
  private i18n = inject(I18nService);

  ngOnInit(): void {
    // Cargar idioma inicial (localStorage o navegador, fallback a 'es')
    this.i18n.init();
  }
}
