import { ApplicationConfig, provideZoneChangeDetection, APP_INITIALIZER } from '@angular/core';
import { provideRouter, withInMemoryScrolling } from '@angular/router';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { I18nService } from './services/i18n.service';
import { ThemeService } from './services/theme.service';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes, withInMemoryScrolling({ scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled' })),
    provideHttpClient(withFetch()),
    {
      provide: APP_INITIALIZER,
      useFactory: (i18n: I18nService) => () => i18n.init(),
      deps: [I18nService],
      multi: true
    },
    {
      provide: APP_INITIALIZER,
      useFactory: (theme: ThemeService) => () => theme.init(),
      deps: [ThemeService],
      multi: true
    }
  ]
};