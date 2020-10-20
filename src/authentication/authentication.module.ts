import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { HelpComponent } from './help/help.component';
import { AuthenticationComponent } from './authentication.component';

import {A11yModule} from '@angular/cdk/a11y';
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatCardModule} from '@angular/material/card';
import {MatDialogModule} from '@angular/material/dialog';
import {MatDividerModule} from '@angular/material/divider';
import {MatNativeDateModule, MatRippleModule} from '@angular/material/core';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatSliderModule} from '@angular/material/slider';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatTooltipModule} from '@angular/material/tooltip';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatTabsModule } from '@angular/material/tabs';

import { MsalModule } from '@azure/msal-angular';
import { OAuthSettings } from './auth.common/oauth';
import { AuthRoutingModule } from './auth-routing.module';

import { AuthGuard } from './auth.guard/auth.guard';
import {CanloadGuard} from './auth.guard/canload.guard';

@NgModule({
  declarations: [LoginComponent, HelpComponent, AuthenticationComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,

    A11yModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatDialogModule,
    MatDividerModule,
    MatNativeDateModule,
    MatProgressBarModule,
    MatRippleModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatTooltipModule,
    MatTabsModule,
    MsalModule.forRoot({
      auth: {
        clientId: OAuthSettings.appId
      }
    }),
    AuthRoutingModule
  ],
  providers: [AuthGuard, CanloadGuard],
  entryComponents: [LoginComponent]
})
export class AuthenticationModule { }
