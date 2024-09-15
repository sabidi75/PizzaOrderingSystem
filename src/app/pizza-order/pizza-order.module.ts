import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {FormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatRadioModule} from '@angular/material/radio';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatGridListModule} from '@angular/material/grid-list';

import { PizzaListComponent } from './pizza-list/pizza-list.component';
import { PizzaOrderRoutingModule } from './pizza-order-routing.module';
import { PizzaOrderComponent } from './pizza-order.component';
import { ToppingListComponent } from '../common/topping-list/topping-list.component';


@NgModule({
  declarations: [
    PizzaListComponent,
    PizzaOrderComponent,
  ],
  imports: [
    CommonModule,
    PizzaOrderRoutingModule,
    ToppingListComponent,

    MatButtonModule,
    MatRadioModule, 
    FormsModule,
    MatGridListModule,
    MatCheckboxModule
  ]
})
export class PizzaOrderModule { }
