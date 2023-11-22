import {Component, OnInit} from '@angular/core';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {ProfesoresService} from "./services/profesores.service";
import {ProfesoresEntity} from "./model/profesores.entity";
import {NgForOf} from "@angular/common";
import {ProfesoresFavEntity} from "./model/profesoresFav.entity";
import {ProfesoresFavService} from "./services/profesores-fav.service";

@Component({
  selector: 'app-home',
  templateUrl: './profesores.component.html',
  styleUrls: ['./profesores.component.css'],
  standalone: true,
  imports: [MatGridListModule, MatIconModule, MatCardModule, MatButtonModule, NgForOf],
})
export class ProfesoresComponent implements OnInit{
  profesores:Array<ProfesoresEntity>=[]
  profesoresFav:Array<ProfesoresFavEntity>=[]
  constructor(private profesorService:ProfesoresService, private profesorFavService:ProfesoresFavService) {
  }

  ngOnInit(): void {
    this.profesorService.getAll().subscribe((response:any)=>{
      this.profesores=response
    })
    this.profesorFavService.getAll().subscribe((response:any)=>{
      console.log()
      this.profesoresFav=response
    })
  }
}


