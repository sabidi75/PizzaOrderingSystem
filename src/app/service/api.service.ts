import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

import { Pizza } from '../interfaces/pizza';
import { Topping } from '../Interfaces/topping';
import { Offer } from '../Interfaces/offer';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http: HttpClient
  ) { }

  public getAllPizzas() {
    return this.http.get<Pizza[]>('/assets/pizzas.json')
    .pipe();
  }
  
  
  public getAllToppings() {
    return this.http.get<Topping[]>('/assets/toppings.json')
    .pipe();
  }

  public getNonVeggieToppings() {
    return this.getAllToppings()
      .pipe(
          map(toppings => {
            return toppings.filter(t => t.type === 'Non-Veggie')
          })
      );
  }

  public getVeggieToppings() {
    return this.getAllToppings()
      .pipe(
          map(toppings => {
            return toppings.filter(t => t.type === 'Veggie')
          })
      );
  } 

  public getAllOffers() {
    return this.http.get<Offer[]>('/assets/offers.json')
    .pipe();
  }
}
