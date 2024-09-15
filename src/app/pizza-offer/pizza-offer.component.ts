import { Component } from '@angular/core';
import { Offer } from '../Interfaces/offer';
import { Topping } from '../Interfaces/topping';

@Component({
  selector: 'app-pizza-offer',
  templateUrl: './pizza-offer.component.html',
  styleUrl: './pizza-offer.component.css',
})
export class PizzaOfferComponent {
  public selectedOffer: Offer | undefined;
  public orderTotal: number = 0;
  constructor() {}
  
  onOfferSelected(offer: Offer) {
    this.selectedOffer = offer;
    this.orderTotal = offer.price;
    console.log('Offer selected:', offer);
  }

  onToppingSelected(pizza: string, toppings: Topping[]) {
    console.log(`Topping selected for ${pizza}:`, toppings);
  }
}
