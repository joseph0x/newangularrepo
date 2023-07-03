import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Ang9ComponentComponent } from './ang9-component/ang9-component.component';

@NgModule({
  declarations: [
    AppComponent,
    //The Ang9Component is added to enable the generated 'Ang9-component' file.
    Ang9ComponentComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
