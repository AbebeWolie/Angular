import { CreateReactiveComponent } from './create-reactive/create-reactive.component';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CreateformComponent } from './createform/createform.component';
import { FormhandligAssignmentComponent } from './formhandlig-assignment/formhandlig-assignment.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateformComponent,
    CreateReactiveComponent,
    FormhandligAssignmentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
