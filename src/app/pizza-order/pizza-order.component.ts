import { Component } from '@angular/core';
import { Topping } from '../Interfaces/topping';
import { Pizza } from '../interfaces/pizza';

@Component({
  selector: 'app-pizza-order',
  templateUrl: './pizza-order.component.html',
  styleUrl: './pizza-order.component.css'
})
export class PizzaOrderComponent {
  private selectedPizza: Pizza | undefined;
  private selectedToppings: Topping[] = [];
  public orderTotal: number = 0;

  constructor() { }

  onPizzaSelected(pizza: Pizza) {
    this.selectedPizza = pizza;
    this.calculateOrderTotal();
    console.log(this.selectedPizza);
  }
  onToppingSelected(toppings: Topping[]) {
    this.selectedToppings = toppings;
    this.calculateOrderTotal();
    console.log(this.selectedToppings);
  }

  calculateOrderTotal() {
    this.orderTotal = this.selectedPizza ? this.selectedPizza.price : 0;
    if (!this.selectedPizza) {
      return;
    }
    this.selectedToppings.forEach((t) => {
      this.orderTotal += t.price;
    });
  }
}
