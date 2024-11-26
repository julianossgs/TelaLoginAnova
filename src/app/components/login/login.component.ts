import { Component } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { InputComponent } from '../input/input.component';
import { InputSenhaComponent } from "../input-senha/input-senha.component";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ButtonComponent, InputComponent, InputSenhaComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

}
