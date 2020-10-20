import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {routing} from './app.routing';
import { MatDialogModule} from '@angular/material/dialog';
import { AppComponent } from './app.component';
import { ContentComponent } from './content/content.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatButtonModule } from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import { MsalModule } from '@azure/msal-angular';
import { OAuthSettings } from '../authentication/auth.common/oauth';
import {CanloadGuard} from '../authentication/auth.guard/canload.guard';
import {AuthGuard} from '../authentication/auth.guard/auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    ContentComponent
  ],
    imports: [
        BrowserModule,
        routing,
        MatDialogModule,
        BrowserAnimationsModule,
        MatButtonModule,
        MatButtonToggleModule,
        FormsModule,
        ReactiveFormsModule,
        MatCardModule,

        HttpClientModule,
        MsalModule.forRoot({
          auth: {
            clientId: OAuthSettings.appId
          }
        })
    ],
  providers: [CanloadGuard, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
