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
  users: any[] = []; // Agrega esta línea para almacenar los usuarios
  showTable: boolean = false;

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

    console.log('Datos del profesor:',nuevoUser);

    this.userService.createUser(nuevoUser).subscribe(
      (response: any) => {
        console.log('user:', response);
        this.userService = response;
        //this.users.push(response);
        this.showTable = false;

      },
      (error: any) => {
        console.error('Error fetching userservice:', error);
      }
    );
  }
}
