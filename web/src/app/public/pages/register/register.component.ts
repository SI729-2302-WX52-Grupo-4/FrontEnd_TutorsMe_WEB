import {Component, OnInit} from '@angular/core';
import {UserService} from "./services/user.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  firstName: string = '';
  lastname: string = '';
  birthDate: string = '';
  emailAddress: string = '';
  password: string = '';

  constructor(private userService:UserService) {
  }

  register() {
    const nuevoUser = {
      firstName: this.firstName,
      lastname: this.lastname,
      birthDate: this.birthDate,
      emailAddress: this.emailAddress,
      password: this.password
    }

    console.log('Datos del profesor:', {
      firstName: this.firstName,
      lastname: this.lastname,
      birthDate: this.birthDate,
      emailAddress: this.emailAddress,
      password: this.password
    });

    this.userService.createUser(nuevoUser).subscribe(
      (response: any) => {
        console.log('user:', response);
        this.userService = response;
      },
      (error: any) => {
        console.error('Error fetching userservice:', error);
      }
    );
  }
}
