import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ShortenPipe } from './pipes/shorten.pipe';
import { DatePipe } from '@angular/common';
import { TurnGreenDirective } from './directives/turn-green.directive';

@NgModule({
  declarations: [AppComponent, ShortenPipe, TurnGreenDirective],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [DatePipe],
  bootstrap: [AppComponent],
})
export class AppModule {}
