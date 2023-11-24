import { Component } from '@angular/core';
import {UserService} from "../register/services/user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  username: string = '';
  password: string = '';
  constructor(private userService: UserService, private router: Router) {
  }
  login() {

    this.userService.logIn({emailAddress: this.username, password: this.password}).subscribe((response:any)=>{
      this.router.navigate(['home']).then();
    })

  }
}

