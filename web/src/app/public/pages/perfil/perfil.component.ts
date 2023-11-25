import {Component, OnInit} from '@angular/core';
import {UserService} from "../register/services/user.service";
import {ActivatedRoute} from "@angular/router";
import {UserEntity} from "../register/model/user.entity";

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit{
  id: string ="";
  user: UserEntity;

  constructor(private userService: UserService, private route: ActivatedRoute) {
    this.user = {} as UserEntity;
  }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.userService.getById(this.id).subscribe((response: any) => {
      this.user = response;
    });
  }
}
