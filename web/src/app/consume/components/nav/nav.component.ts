import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  id: string = "";

  constructor(private route: ActivatedRoute) {
    this.id = this.route.snapshot.params['id'];
  }

  title = 'TutorsMe';
  options = [
    { path: `/home`, title: 'Inicio', fontSize: 20 },
    { path: `/profesores`, title: 'Profesores', fontSize: 20 },
    { path: `/sesiones`, title: 'Sesiones', fontSize: 20 },
    { path: `/perfil`, title: 'Perfil', fontSize: 20 }

  ];
}


