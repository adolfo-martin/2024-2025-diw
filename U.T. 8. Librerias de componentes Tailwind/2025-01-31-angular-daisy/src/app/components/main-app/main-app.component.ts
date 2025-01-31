import { Component } from '@angular/core';
import { CardsContainerComponent } from "../cards-container/cards-container.component";

@Component({
  selector: 'main-app',
  imports: [CardsContainerComponent],
  templateUrl: './main-app.component.html',
  styleUrl: './main-app.component.css'
})
export class MainAppComponent {
}
