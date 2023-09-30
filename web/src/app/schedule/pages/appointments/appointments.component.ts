import {AfterViewInit, Component, OnInit} from '@angular/core';
import {Appointment} from "../../model/appointment.entity";
import {MatTableDataSource} from "@angular/material/table";
import {AppointmentsService} from "../../services/appointments.service";

@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.css']
})
export class AppointmentsComponent implements OnInit, AfterViewInit {

  appointmentData: Appointment;
  dataSource: MatTableDataSource<any>;
    displayedColumns: string[] = ['id', 'curso', 'nombredocente', 'diasdeclase', 'tareasasignadas'];
  isEditMode = false;


  constructor(private appointmentsService: AppointmentsService) {
    this.appointmentData = {} as Appointment;
    this.dataSource = new MatTableDataSource<any>();
  }

  private getAllAppointments() {
    this.appointmentsService.getAll().subscribe((response: any) => {
      this.dataSource.data = response;
    });
  }

  private deleteAppointment(id: number) {

  }

  onEditItem(element: Appointment) {
    this.appointmentData = element;
    this.isEditMode = true;
  }
  onDeleteItem(element: Appointment) {
    this.deleteAppointment(element.id);
  }
  onCancelEdit() {
    this.isEditMode = false;
    this.getAllAppointments();
  }

  onAppointmentAdded(appointment: Appointment) {

  }
  onAppointmentUpdated(appointment: Appointment) {

  }

  ngAfterViewInit(): void {
  }

  ngOnInit(): void {
    this.getAllAppointments();
  }

  agregarDatoManualmente() {
    const nuevoDato = {
      id: 1, // Genera un ID único (puedes ajustarlo según tus necesidades)
      curso: 'Algebra',
      nombredocente: 'Ruth',
      diasdeclase: 'Martes, Jueves',
      tareasasignadas: '2'
      
    };
    const nuevoDato2 = {
      id: 2, // Genera un ID único (puedes ajustarlo según tus necesidades)
      curso: 'Informatica',
      nombredocente: 'Giakomo',
      diasdeclase: 'Martes, Viernes',
      tareasasignadas: '3'
      
    };
    const nuevoDato3 = {
      id: 3, // Genera un ID único (puedes ajustarlo según tus necesidades)
      curso: 'Matematica Basica',
      nombredocente: 'Alexis',
      diasdeclase: 'Sabado',
      tareasasignadas: '1'
      
    };

   // Obtiene el arreglo de datos subyacente y agrega el nuevo dato
   const data = this.dataSource.data;
   data.push(nuevoDato,nuevoDato2, nuevoDato3);

   // Actualiza la fuente de datos con el nuevo arreglo
   this.dataSource.data = data;

   
  }

  borrarDatoSeleccionado() {
    this.dataSource.data = [];
  }

  
  

}
