import {ContentComponent} from './content/content.component';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'flyfeeds' },
  { path: 'flyfeeds', component: ContentComponent },
  {
    path: 'login',
    loadChildren: () => import('../authentication/authentication.module').then(m => m.AuthenticationModule),
  },
];

export const routing: ModuleWithProviders<any> = RouterModule.forRoot(routes);
