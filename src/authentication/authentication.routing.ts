import { HelpComponent } from './help/help.component';
import { LoginComponent } from './login/login.component';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

export const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'help', component: HelpComponent },
];

export const routing: ModuleWithProviders<any> = RouterModule.forChild(routes);
