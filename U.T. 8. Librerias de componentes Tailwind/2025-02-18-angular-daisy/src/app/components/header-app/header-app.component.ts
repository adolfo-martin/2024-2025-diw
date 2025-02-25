import { Component } from '@angular/core';
import { ButtonLoginComponent } from "../button-login/button-login.component";

@Component({
  selector: 'header-app',
  imports: [ButtonLoginComponent],
  templateUrl: './header-app.component.html',
})
export class HeaderAppComponent {

}
