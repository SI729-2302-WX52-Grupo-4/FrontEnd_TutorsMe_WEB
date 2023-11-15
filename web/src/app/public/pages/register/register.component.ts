import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  firstName: string = '';
  lastName: string = '';
  birthDate: Date = new Date(); // Asigna un valor por defecto (puede ser la fecha actual)
  email: string = '';
  password: string = '';

  register() {
    console.log('Datos del profesor:', {
      firstName: this.firstName,
      lastName: this.lastName,
      birthDate: this.birthDate,
      email: this.email,
      password: this.password
    });
  }
}
