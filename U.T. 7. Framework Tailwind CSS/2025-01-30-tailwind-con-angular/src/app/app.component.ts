import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderAppComponent } from "./components/header-app/header-app.component";
import { NavAppComponent } from "./components/nav-app/nav-app.component";
import { HeroComponentComponent } from "./components/hero-component/hero-component.component";

@Component({
  selector: 'app-root',
  // imports: [RouterOutlet],
  templateUrl: './app.component.html',
  imports: [HeaderAppComponent, NavAppComponent, HeroComponentComponent],
})
export class AppComponent {
  title = '2025-01-30-tailwind-con-angular';
}
