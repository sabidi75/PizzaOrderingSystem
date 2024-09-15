import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PizzaOfferComponent } from './pizza-offer.component'; 

const routes: Routes = [
  {
    path: '',
    component: PizzaOfferComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PizzaOfferRoutingModule { }