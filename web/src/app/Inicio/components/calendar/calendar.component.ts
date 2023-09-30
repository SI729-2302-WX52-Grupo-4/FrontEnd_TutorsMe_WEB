import { Component } from '@angular/core';
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatCardModule} from "@angular/material/card";

@Component({
  standalone: true,
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  imports: [
    MatDatepickerModule,
    MatCardModule
  ],
  styleUrls: ['./calendar.component.css']

})
export class CalendarComponent {

}
