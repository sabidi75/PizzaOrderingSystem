import { Component, EventEmitter, Output } from '@angular/core';
import { Topping } from '../../Interfaces/topping';
import { ApiService } from '../../service/api.service';

@Component({
  selector: 'app-topping-list',
  templateUrl: './topping-list.component.html',
  styleUrl: './topping-list.component.css',
})
export class ToppingListComponent {
  public breakpoint: number = 1;
  public veggieToppings: Topping[] = [];
  public nonVeggieToppings: Topping[] = [];
  public selectedToppings: Topping[] = [];

  @Output() public updateToppingsList = new EventEmitter<Topping[]>();

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.breakpoint = window.innerWidth <= 400 ? 1 :  Math.floor(window.innerWidth / 300);
    this.selectedToppings = [];
    this.apiService.getNonVeggieToppings().subscribe((data) => {
      this.nonVeggieToppings = data;
    });

    this.apiService.getVeggieToppings().subscribe((data) => {
      this.veggieToppings = data;
    });
  }

  onToppingSelection(isSelected: boolean, topping: Topping) {
    if (isSelected) {
      this.selectedToppings.push(topping);
    } else {
      this.selectedToppings = this.selectedToppings.filter(
        (t) => t.name !== topping.name
      );
    }
    this.updateToppingsList.emit(this.selectedToppings);
  }

  onResize(event: any) {
    this.breakpoint = event.target.innerWidth <= 400 ? 1 : Math.floor(event.target.innerWidth / 300);
  }
}
