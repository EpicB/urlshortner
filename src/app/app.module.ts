import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ShortnerpageComponent } from './shortnerpage/shortnerpage.component';

@NgModule({
  declarations: [
    AppComponent,
    ShortnerpageComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
