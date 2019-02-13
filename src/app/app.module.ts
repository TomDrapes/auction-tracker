import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { AuctionListingsComponent } from './components/auction-listings/auction-listings.component';
import { ListingComponent } from './components/listing/listing.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AuctionListingsComponent,
    ListingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
