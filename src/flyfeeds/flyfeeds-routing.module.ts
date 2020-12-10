import { ControlPanelComponent } from './components/control-panel/control-panel.component';
import { MailboxComponent } from './components/mailbox/mailbox.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'feeds' },
  {
    path: 'feeds', component: MailboxComponent
  },
  {
    path: 'dashboard', component: ControlPanelComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FlyfeedsRoutingModule { }
