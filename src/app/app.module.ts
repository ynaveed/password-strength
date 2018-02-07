import { BrowserModule } from '@angular/platform-browser';
import { NgModule, enableProdMode } from '@angular/core';
import { CommonModule } from '@angular/common';


import { BackendService } from './backend.service';
import { Logger } from './logger.service';

import { AppComponent } from './app.component';
import { PasswordFieldComponent } from './password-field/password-field.component';

enableProdMode();

@NgModule({
  declarations: [
    AppComponent,
    PasswordFieldComponent
  ],
  imports: [
    BrowserModule,
    CommonModule
  ],
  providers: [
    BackendService,
    Logger
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
