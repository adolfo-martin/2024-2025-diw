import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderAppComponent } from "./components/header-app/header-app.component";
import { FooterAppComponent } from "./components/footer-app/footer-app.component";
import { CarouselMainPageComponent } from "./components/carousel-main-page/carousel-main-page.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderAppComponent, FooterAppComponent, CarouselMainPageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = '2025-02-18-angular-daisy';
}
