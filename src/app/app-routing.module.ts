import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuctionListingsComponent } from './components/auction-listings/auction-listings.component'

const routes: Routes = [
  { path: '', component: AuctionListingsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
