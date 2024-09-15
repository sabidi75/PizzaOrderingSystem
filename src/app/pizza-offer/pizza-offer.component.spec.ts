import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PizzaOfferComponent } from './pizza-offer.component';

describe('PizzaOfferComponent', () => {
  let component: PizzaOfferComponent;
  let fixture: ComponentFixture<PizzaOfferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PizzaOfferComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PizzaOfferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
