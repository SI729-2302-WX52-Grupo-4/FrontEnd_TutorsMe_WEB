import { Component } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  title = 'TutorsMe';
  options = [
    { path: '/home', title: 'Inicio', fontSize: 20 },
    { path: 'Profesores', title: 'Profesores', fontSize: 20 },
    { path: '/Buscador', title: 'Buscador', fontSize: 20 },
    { path: '/sesiones', title: 'Sesiones', fontSize: 20 },
    { path: '/about', title: 'Iniciar Sesion', fontSize: 20 }

  ];
}


