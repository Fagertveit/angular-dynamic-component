import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { Form1Component } from './form1.component';
import { Form2Component } from './form2.component';
import { BaseDirective } from './base-anchor.directive';
import { DynamicForm } from './dynamic-form.interface';
import { DynamicFormComponent } from './dynamic-form.component';
import { ConfigService } from './config.service';

@NgModule({
  declarations: [
    AppComponent,
    Form1Component,
    Form2Component,
    DynamicFormComponent,
    BaseDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  entryComponents: [Form1Component, Form2Component],
  providers: [ConfigService],
  bootstrap: [AppComponent]
})
export class AppModule { }
