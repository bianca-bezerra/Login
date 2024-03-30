import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-login-default-layout',
  standalone: true,
  imports: [],
  templateUrl: './login-default-layout.component.html',
  styleUrl: './login-default-layout.component.scss'
})
export class LoginDefaultLayoutComponent {
  @Input() title: string = "";
  @Input() primaryBtnText: string = "";
  @Input() secondaryBtnText: string = "";
}
