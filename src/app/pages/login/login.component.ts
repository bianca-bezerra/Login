import { Component } from '@angular/core';
import { LoginDefaultLayoutComponent } from '../../components/login-default-layout/login-default-layout.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    LoginDefaultLayoutComponent
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

}
