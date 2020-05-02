import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AchieverComponent } from './achiever/achiever.component';
import { FeedingPlanComponent } from './feeding-plan/feeding-plan.component';
import { LifestyleComponent } from './lifestyle/lifestyle.component';

@NgModule({
  declarations: [
    AppComponent,
    AchieverComponent,
    FeedingPlanComponent,
    LifestyleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
