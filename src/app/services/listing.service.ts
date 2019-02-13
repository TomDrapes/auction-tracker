import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Listing } from '../models/Listing'

@Injectable({
  providedIn: 'root'
})

export class ListingService {  

  constructor(private http:HttpClient) { }

  getListings():Observable<Listing>{
    return this.http.get<Listing>(`http://localhost:8000/api/listings`)
  }


}
