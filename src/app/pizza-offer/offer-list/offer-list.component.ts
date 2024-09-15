import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Offer } from '../../Interfaces/offer';
import { ApiService } from '../../service/api.service';

@Component({
  selector: 'app-offer-list',
  templateUrl: './offer-list.component.html',
  styleUrl: './offer-list.component.css'
})
export class OfferListComponent implements OnInit {
  public offers: Offer[] = [];
  public selectedOffer: Offer | undefined;

  @Output() public updateOfferSelected = new EventEmitter<Offer>();
  
  constructor(private apiService: ApiService) { }
  
  onOfferSelection(offer: Offer) {
    this.selectedOffer = offer;
    this.updateOfferSelected.emit(this.selectedOffer);
  }

  ngOnInit() {
    this.selectedOffer = undefined;
    this.apiService.getAllOffers().subscribe(data => {
      this.offers = data;
    });
  }
}
