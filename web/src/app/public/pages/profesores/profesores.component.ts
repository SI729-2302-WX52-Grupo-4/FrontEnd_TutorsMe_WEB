import {Component} from '@angular/core';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule} from "@angular/material/icon";

@Component({
  selector: 'app-home',
  templateUrl: './profesores.component.html',
  styleUrls: ['./profesores.component.css'],
  standalone: true,
  imports: [MatGridListModule, MatIconModule],
})
export class ProfesoresComponent {



}


