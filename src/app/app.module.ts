import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FeedingPlanComponent } from './feeding-plan/feeding-plan.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { MaterialModule } from './material/material.module';
import { NotAvailableComponent } from './not-available/not-available.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DigitsOnlyDirective } from './shared/digits-only/digits-only.directive';
import { DecimalDigitsOnlyDirective } from './shared/decimal-digits-only/decimal-digits-only.directive';
@NgModule({
  declarations: [
    AppComponent,
    FeedingPlanComponent,
    NotAvailableComponent,
    DigitsOnlyDirective,
    DecimalDigitsOnlyDirective,
    DigitsOnlyDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
