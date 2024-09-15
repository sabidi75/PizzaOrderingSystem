import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {FormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatRadioModule} from '@angular/material/radio';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatGridListModule} from '@angular/material/grid-list';

import { PizzaOfferRoutingModule } from './pizza-offer-routing.module';
import { PizzaOfferComponent } from './pizza-offer.component';
import { OfferListComponent } from './offer-list/offer-list.component';
import { ToppingListComponent } from '../common/topping-list/topping-list.component';


@NgModule({
  declarations: [
    PizzaOfferComponent,
    OfferListComponent,
  ],
  imports: [
    CommonModule,
    PizzaOfferRoutingModule,
    ToppingListComponent,
    
    MatButtonModule,
    MatRadioModule, 
    FormsModule,
    MatGridListModule,
    MatCheckboxModule    
  ]
})
export class PizzaOfferModule { }
