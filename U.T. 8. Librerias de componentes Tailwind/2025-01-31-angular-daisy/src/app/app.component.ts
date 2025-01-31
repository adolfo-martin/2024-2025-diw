import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarAppComponent } from "./components/navbar-app/navbar-app.component";
import { FooterAppComponent } from "./components/footer-app/footer-app.component";
import { MainAppComponent } from "./components/main-app/main-app.component";

@Component({
  selector: 'app-root',
  imports: [NavbarAppComponent, FooterAppComponent, MainAppComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = '2025-01-31-angular-daisy';
}
