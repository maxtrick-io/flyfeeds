
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { LoginComponent } from 'src/authentication/login/login.component';
import { Canloadflyfeeds } from 'src/authentication/auth.guard/canloadflyfeeds.service';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'auth' },
  {
    path: 'auth',
    loadChildren: () => import('../authentication/authentication.module').then(m => m.AuthenticationModule),
    component: LoginComponent
  },
  {
    path: 'fly',
    loadChildren: () => import('../flyfeeds/flyfeeds.module').then(m => m.FlyfeedsModule),
    canLoad: [Canloadflyfeeds]
  }
];

export const routing: ModuleWithProviders<any> = RouterModule.forRoot(routes);
