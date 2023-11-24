import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {SesionesService} from "./Services/sesiones.service";
import {SesionesEntity} from "./model/sestiones.entity";
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import * as moment from 'moment';



@Component({
  selector: 'app-sesiones',
  templateUrl: './sesiones.component.html',
  styleUrls: ['./sesiones.component.css'],

})
export class SesionesComponent implements AfterViewInit, OnInit {
  sesiones: Array<SesionesEntity> = [];
  sesion: SesionesEntity = new SesionesEntity();
  displayedColumns: string[] = ['id', 'CreatorName', 'RoomName', 'VideoConferenceDate', 'VideoConferenceTime'];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  constructor(private sessionService: SesionesService) {
  }
  ngOnInit() {
    this.sessionService.getAll().subscribe((response: any) => {
      this.sesiones = response;
    });
  }

  onDateChange(event: MatDatepickerInputEvent<Date>): void {
    // Formatea la fecha y actualiza la propiedad en tu entidad
    this.sesion.videoConferenceDate = moment(event.value).format('MM/DD/YYYY');
  }
  ngAfterViewInit() {

  }
  onSubmit() {
    this.sessionService.createVideoconferences(this.sesion).subscribe((response: any) => {
      this.sessionService.getAll().subscribe((response: any) => {
        this.sesiones = response;
      });
    });
  }
}
