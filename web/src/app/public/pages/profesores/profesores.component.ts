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
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {SearchService} from "../../../consume/services/search.service";

@Component({
  selector: 'app-home',
  templateUrl: './profesores.component.html',
  styleUrls: ['./profesores.component.css'],
  standalone: true,
  imports: [MatGridListModule, MatIconModule, MatCardModule, MatButtonModule, NgForOf, ReactiveFormsModule, FormsModule],
})
export class ProfesoresComponent implements OnInit{
  profesores:Array<ProfesoresEntity>=[]
  profesoresFav:Array<ProfesoresFavEntity>=[]

  searchQuery: string = '';
  searchResults: string[] = [];

  constructor(private searchService: SearchService, private profesorService:ProfesoresService, private profesorFavService:ProfesoresFavService) {
  }

  ngOnInit(): void {
    this.profesorService.getAll().subscribe(
      (response: any) => {
        console.log('Profesores:', response);
        this.profesores = response;
      },
      (error: any) => {
        console.error('Error fetching Profesores:', error);
      }
    );

    this.profesorFavService.getAll().subscribe(
      (response: any) => {
        console.log('Profesores Favoritos:', response);
        this.profesoresFav = response;
      },
      (error: any) => {
        console.error('Error fetching Profesores Favoritos:', error);
      }
    );
  }

  search(): void {
    this.searchService.search(this.searchQuery).subscribe(results => {
      this.searchResults = results;
    });
  }

}


