import { Component, OnInit } from '@angular/core';
import { ListingService } from '../../services/listing.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private listingService:ListingService) { }

  ngOnInit() {
   this.listingService.getListings().subscribe(listing => console.log(listing))
  }

}
