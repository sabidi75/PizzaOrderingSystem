import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ApiService } from '../../service/api.service';
import { Pizza } from '../../interfaces/pizza';

@Component({
  selector: 'app-pizza-list',
  templateUrl: './pizza-list.component.html',
  styleUrl: './pizza-list.component.css'
})
export class PizzaListComponent implements OnInit {
  public pizzas: Pizza[] = [];
  public selectedPizza: Pizza | undefined;

  @Output() public updatePizzaSelected = new EventEmitter<Pizza>();
  
  constructor(private apiService: ApiService) { }
  
  onPizzaSelection(pizza: Pizza) {
    this.selectedPizza = pizza;
    this.updatePizzaSelected.emit(this.selectedPizza);
  }

  ngOnInit() {
    this.selectedPizza = undefined;
    this.apiService.getAllPizzas().subscribe(data => {
      this.pizzas = data;
    });
  }
}
