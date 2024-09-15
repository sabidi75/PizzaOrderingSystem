import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pizza } from '../interfaces/pizza';
import { Topping } from '../Interfaces/topping';
import { filter, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http: HttpClient
  ) { }

  public getAllPizza() {
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
}
