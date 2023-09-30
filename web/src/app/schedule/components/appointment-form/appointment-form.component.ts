import {Component, EventEmitter, Input, Output, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";
import {Appointment} from "../../model/appointment.entity";

@Component({
  selector: 'app-appointment-form',
  templateUrl: './appointment-form.component.html',
  styleUrls: ['./appointment-form.component.css']
})
export class AppointmentFormComponent {
// new
  appointmentArray: Appointment[]=[
    {   id: 1, curso: "Informatica", nombredocente: "Giakomo", diasdeclase:"Martes/Jueves" ,tareasasignadas: 3 },
    {   id: 2, curso: "Algebra", nombredocente: "Ruth", diasdeclase:"Lunes" ,tareasasignadas: 4 },
    {   id: 3,curso: "Ingles A1", nombredocente: "Alexis", diasdeclase:"Viernes" ,tareasasignadas: 1 }


  ];
  @Output()editCanceled = new EventEmitter();
  @Output()appointmentAdded = new EventEmitter<Appointment>();
  @Output()appointmentUpdated = new EventEmitter<Appointment>();
  @Input()editMode = false;
  @Input()appointment: Appointment;

  @ViewChild('appointmentForm', {static: false}) appointmentForm!: NgForm;

  constructor() {
    this.appointment = {} as Appointment;
  }

  onSubmit() {

  }
  onCancel() {

  }

}
