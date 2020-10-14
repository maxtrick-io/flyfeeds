
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { LoginComponent } from 'src/authentication/login/login.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'auth' },
  {
    path: 'auth',
    loadChildren: () => import('../authentication/authentication.module').then(m => m.AuthenticationModule),
    component: LoginComponent
  },
  {
    path: 'fly',
    loadChildren: () => import('../flyfeeds/flyfeeds.module').then(m => m.FlyfeedsModule)
  }
];

export const routing: ModuleWithProviders<any> = RouterModule.forRoot(routes);
