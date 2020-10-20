import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { HelpComponent } from './help/help.component';
import { ControlPanelComponent } from 'src/flyfeeds/control-panel/control-panel.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'login'},
  { path: 'login', component: LoginComponent},
  { path: 'help', component: HelpComponent },
  {
    path: 'dashboard',
    component: ControlPanelComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
