import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-input-senha',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './input-senha.component.html',
  styleUrl: './input-senha.component.css'
})
export class InputSenhaComponent {
   name:string ="";
}
