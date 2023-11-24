import {Component, OnInit} from '@angular/core';
import {ProfesoresService} from "./services/profesores.service";
import {ProfesoresEntity} from "./model/profesores.entity";
import {ProfesoresFavEntity} from "./model/profesoresFav.entity";
import {ProfesoresFavService} from "./services/profesores-fav.service";
import {SearchService} from "../../../consume/services/search.service";

@Component({
  selector: 'app-profesores',
  templateUrl: './profesores.component.html',
  styleUrls: ['./profesores.component.css'],
})
export class ProfesoresComponent implements OnInit{
  profesores:Array<ProfesoresEntity>=[]
  profesoresFav:Array<ProfesoresFavEntity>=[]

  searchQuery: string = '';
  searchResults: string[] = [];

  constructor(private searchService: SearchService, private profesorService:ProfesoresService, private profesorFavService:ProfesoresFavService) {
  }

  ngOnInit(): void {
    /*this.profesorService.getAll().subscribe(
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
    );*/
  }

  search(): void {
    this.searchService.search(this.searchQuery).subscribe(results => {
      this.searchResults = results;
    });
  }

}


