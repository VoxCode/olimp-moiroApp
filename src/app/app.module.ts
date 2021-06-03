import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatNativeDateModule} from '@angular/material/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MAT_FORM_FIELD_DEFAULT_OPTIONS} from '@angular/material/form-field';

import {StepperComponent} from "./stepper/stepper.component";
import {StepperModule} from "./stepper/stepper.module";
import {AppComponent} from "./app.component";
import {CookieService} from "ngx-cookie-service";

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MatNativeDateModule,
    StepperModule,
    ReactiveFormsModule
  ],
  entryComponents: [AppComponent],
  declarations: [
    AppComponent,
    StepperComponent
  ],
  bootstrap: [AppComponent],
  providers: [
    { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'fill' } },
    CookieService
  ]
})
export class AppModule { }
