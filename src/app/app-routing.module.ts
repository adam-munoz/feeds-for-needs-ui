import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FeedingPlanComponent } from './feeding-plan/feeding-plan.component';
import { NotAvailableComponent } from './not-available/not-available.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/plan',
    pathMatch: 'full'
  },
  {
    path: 'plan',
    pathMatch: 'full',
    component: FeedingPlanComponent
  },
  {
    path: 'not-available',
    pathMatch: 'full',
    component: NotAvailableComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
