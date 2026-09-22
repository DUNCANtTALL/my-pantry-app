import { Component, signal } from '@angular/core';

import { ProductComponent } from '../views/ProductComponent';

@Component({
  selector: 'app-root',
  imports: [ProductComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('my-pantry-app');
}
