import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

import { OpenFoodFactsResponse } from '../models/OpenFoodFactsResponse';

@Injectable({
  providedIn: 'root',
})
export class OpenFoodFactsService {
  private readonly http = inject(HttpClient);

  getProduct(barcode: string) {
    return this.http.get<OpenFoodFactsResponse>(
      `https://world.openfoodfacts.org/api/v3/product/${barcode}`
    );
  }
}