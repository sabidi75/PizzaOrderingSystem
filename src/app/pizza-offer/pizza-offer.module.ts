import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {FormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatRadioModule} from '@angular/material/radio';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatGridListModule} from '@angular/material/grid-list';

import { PizzaOfferRoutingModule } from './pizza-offer-routing.module';
import { PizzaOfferComponent } from './pizza-offer.component';

@NgModule({
  declarations: [
    PizzaOfferComponent,
  ],
  imports: [
    CommonModule,
    PizzaOfferRoutingModule,

    MatButtonModule,
    MatRadioModule, 
    FormsModule,
    MatGridListModule,
    MatCheckboxModule    
  ]
})
export class PizzaOfferModule { }
