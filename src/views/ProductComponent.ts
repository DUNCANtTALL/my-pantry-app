import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

import { OpenFoodFactsService } from '../services/OpenFoodFactsServices';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [AsyncPipe, ReactiveFormsModule],
  template: `
    <form (ngSubmit)="search()" style="margin-bottom: 1rem; display: flex; gap: 0.75rem;">
      <input
        type="text"
        [formControl]="barcodeControl"
        placeholder="Enter barcode"
        aria-label="Barcode"
        style="padding: 0.5rem 0.75rem; min-width: 220px;"
      />
      <button type="submit" style="padding: 0.5rem 1rem;">Search</button>
    </form>

    @if (product$ | async; as response) {
      @if (response.product; as product) {
        <h2>{{ product.product_name || 'Unknown product' }}</h2>
        <p>Brand: {{ product.brands || 'N/A' }}</p>
        <p>Ingredients: {{ product.ingredients_text || 'N/A' }}</p>
      } @else {
        <p>Product not found for this barcode.</p>
      }
    }
  `,
})
export class ProductComponent {
  private readonly service = inject(OpenFoodFactsService);

  readonly barcodeControl = new FormControl('3017624010701');
  product$ = this.service.getProduct(this.barcodeControl.value ?? '3017624010701');

  search() {
    const barcode = this.barcodeControl.value?.trim();
    if (!barcode) {
      return;
    }

    this.product$ = this.service.getProduct(barcode);
  }
}
