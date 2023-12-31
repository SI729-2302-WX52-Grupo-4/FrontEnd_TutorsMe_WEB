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
    { path: '/consume/newsapi', title: 'Profesores', fontSize: 20 },
    { path: '/home', title: 'Buscador', fontSize: 20 },
    { path: '/schedule/appointment', title: 'Sesiones', fontSize: 20 },
    { path: '/about', title: 'Perfil', fontSize: 20 }
  ];
}


