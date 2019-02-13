import { Component, OnInit, Input } from '@angular/core';
import { Listing } from 'src/app/models/Listing';


@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.scss']
})
export class ListingComponent implements OnInit {
  @Input() listing: Listing

  constructor() { }

  ngOnInit() {
  }

}
