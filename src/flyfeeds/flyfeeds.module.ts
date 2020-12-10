import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatButtonModule } from '@angular/material/button';
import { FlyfeedsRoutingModule } from './flyfeeds-routing.module';
import { ControlPanelComponent } from './components/control-panel/control-panel.component';
import { MailboxComponent } from './components/mailbox/mailbox.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatSidenavModule} from '@angular/material/sidenav';
import { MatTabsModule } from '@angular/material/tabs'
import { MatListModule } from '@angular/material/list'
import { HttpClientModule } from '@angular/common/http';
import { MAT_RIPPLE_GLOBAL_OPTIONS, RippleGlobalOptions, MatRippleModule } from '@angular/material/core';
import { PostboxComponent } from './components/postbox/postbox.component';
import { QuickProfileComponent } from './components/quick-profile/quick-profile.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

const globalRippleConfig: RippleGlobalOptions = {
  disabled: false,
  terminateOnPointerUp: false,
  animation: {
    enterDuration: 300,
    exitDuration: 0
  }
};

@NgModule({
  declarations:[MailboxComponent, ControlPanelComponent, PostboxComponent, QuickProfileComponent],
  imports: [
    CommonModule,
    FlyfeedsRoutingModule,
    MatSidenavModule,
    MatTabsModule,
    MatListModule,
    HttpClientModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatRippleModule,
    MatSlideToggleModule
  ],
  providers: [{provide: MAT_RIPPLE_GLOBAL_OPTIONS, useValue: globalRippleConfig}],
})
export class FlyfeedsModule { }
