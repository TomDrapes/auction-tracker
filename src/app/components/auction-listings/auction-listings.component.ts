import { Component, OnInit } from '@angular/core';
import { ListingService } from '../../services/listing.service'
import { Listing } from '../../models/Listing'

@Component({
  selector: 'app-auction-listings',
  templateUrl: './auction-listings.component.html',
  styleUrls: ['./auction-listings.component.scss']
})

export class AuctionListingsComponent implements OnInit {
  listings:Listing

  constructor(private listingService:ListingService) { }

  ngOnInit() {
    this.listingService.getListings().subscribe(listings => this.listings = listings)
  }

}
