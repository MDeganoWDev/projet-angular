﻿import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class ProduitService {
  constructor(private http: HttpClient) {}

  getHomeData(): Observable<any> {
    return this.http.get('https://world.openfoodfacts.org?json=true');
  }

  getProduitById(produitId: string): Observable<object> {
 
    return this.http.get(
      `https://world.openfoodfacts.org/api/v2/product/${produitId}`,
     
      { observe: 'body' }

    );
  }
}
