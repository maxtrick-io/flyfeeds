
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { LoginComponent } from 'src/authentication/login/login.component';
import { CanloadGuard } from 'src/authentication/auth.guard/canload.guard';
import {AuthGuard} from '../authentication/auth.guard/auth.guard';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'auth' },
  {
    path: 'auth',
    loadChildren: () => import('../authentication/authentication.module').then(m => m.AuthenticationModule),
    component: LoginComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'fly',
    loadChildren: () => import('../flyfeeds/flyfeeds.module').then(m => m.FlyfeedsModule),
    canLoad: [CanloadGuard]
  },
  {
    path: '**',
    component: LoginComponent,
    canActivate: [AuthGuard]
  }
];

export const routing: ModuleWithProviders<any> = RouterModule.forRoot(routes);
