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
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
