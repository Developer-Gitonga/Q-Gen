import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GenFormComponent } from './gen-form/gen-form.component';
import { QuoteComponent } from './quote/quote.component';
import { QuoteLikesComponent } from './quote-likes/quote-likes.component';

@NgModule({
  declarations: [
    AppComponent,
    GenFormComponent,
    QuoteComponent,
    QuoteLikesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
