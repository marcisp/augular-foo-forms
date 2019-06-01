import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { NgModule } from '@angular/core';

import { FooFormComponent } from './foo-form/foo-form.component';

@NgModule({
  declarations: [
    FooFormComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [FooFormComponent]
})
export class AppModule { }
