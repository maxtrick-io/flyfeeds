import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { MailboxComponent } from 'src/flyfeeds/mailbox/mailbox.component';

const routes: Routes = [
  { 
    path: 'mailbox',
    loadChildren: () => import('src/flyfeeds/flyfeeds.module').then(m => m.FlyfeedsModule),
    component: MailboxComponent
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
export class AppRoutingModule { }
