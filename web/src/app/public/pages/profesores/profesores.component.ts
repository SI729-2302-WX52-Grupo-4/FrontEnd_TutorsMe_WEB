import {Component, Inject, OnInit} from '@angular/core';
import {ProfesoresService} from "./services/profesores.service";
import {ProfesoresEntity} from "./model/profesores.entity";
import {ProfesoresFavEntity} from "./model/profesoresFav.entity";
import {SearchService} from "../../../consume/services/search.service";
import {MAT_DIALOG_DATA, MatDialog, MatDialogConfig, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-profesores',
  templateUrl: './profesores.component.html',
  styleUrls: ['./profesores.component.css'],
})
export class ProfesoresComponent implements OnInit{
  profesores:Array<ProfesoresEntity>=[]
  profesoresFav:Array<ProfesoresFavEntity>=[]

  searchQuery: string = '';

  constructor(private searchService: SearchService, private profesorService:ProfesoresService,
              private dialog: MatDialog) {
  }

  ngOnInit() {
    this.profesorService.getAll().subscribe((response: any) => {
      this.profesores = response;
    });
  }

  search(): void {
    this.profesores = this.profesores.filter(profesor => profesor.name === this.searchQuery);
  }

  verClase(clase: string): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.data = clase;

    const dialogRef = this.dialog.open(SeeClassComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(() => {

    });
  }
}

@Component({
  selector: 'app-see-class',
  templateUrl: '/dialog/get-class.html'
})
export class SeeClassComponent {
  constructor(
    public dialogRef: MatDialogRef<SeeClassComponent>,
    @Inject(MAT_DIALOG_DATA) public data: string,
  ) {}

  close() {
    this.dialogRef.close();
  }
}
