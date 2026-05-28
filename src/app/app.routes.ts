import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent), title: 'Pro Calendar' },
  { path: 'help', loadComponent: () => import('./pages/help/help.component').then(m => m.HelpComponent), title: 'Pro Calendar — Help' },
  { path: 'terms', loadComponent: () => import('./pages/terms/terms.component').then(m => m.TermsComponent), title: 'Pro Calendar — Terms' },
  { path: 'privacy', loadComponent: () => import('./pages/privacy/privacy.component').then(m => m.PrivacyComponent), title: 'Pro Calendar — Privacy' },
  { path: '**', redirectTo: '' }
];
