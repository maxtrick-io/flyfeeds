import {ContentComponent} from './content/content.component';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { LoginComponent } from 'src/authentication/login/login.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  // { path: 'flyfeeds', component: ContentComponent },
  {
    path: 'login',
    loadChildren: () => import('../authentication/authentication.module').then(m => m.AuthenticationModule),
    component: LoginComponent
  },
  {
    path: 'home',
    loadChildren: () => import('../flyfeeds/flyfeeds.module').then(m => m.FlyfeedsModule)
  }
];

export const routing: ModuleWithProviders<any> = RouterModule.forRoot(routes);
