import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { products } from './products';

@Component({
  selector: 'cards-container',
  imports: [ CommonModule ],
  templateUrl: './cards-container.component.html',
  styleUrl: './cards-container.component.css'
})
export class CardsContainerComponent {
    products = products;
}
