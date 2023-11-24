import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule} from "@angular/common/http";

import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTableModule} from '@angular/material/table';
import {MatFormFieldModule} from "@angular/material/form-field";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatCardModule} from '@angular/material/card';
import {MatNativeDateModule} from '@angular/material/core';


import { FooterContentComponent } from './consume/components/footer-content/footer-content.component';
import { MainContentComponent } from './consume/components/main-content/main-content.component';
import { NavComponent } from './consume/components/nav/nav.component';
import { AboutComponent } from './public/pages/about/about.component';
import { HomeComponent } from './public/pages/home/home.component';
import { PageNotFoundComponent } from './public/pages/page-not-found/page-not-found.component';
import {AppointmentsService} from "./schedule/services/appointments.service";
import { AppointmentsComponent } from './schedule/pages/appointments/appointments.component';
import { AppointmentFormComponent } from './schedule/components/appointment-form/appointment-form.component';
import { CalendarComponent } from './Inicio/components/calendar/calendar.component';
import { CardComponent } from './inicio/components/card/card.component';
import { RegisterComponent } from './public/pages/register/register.component';
import { SesionesComponent } from './public/pages/sesiones/sesiones.component';
import {ProfesoresComponent, SeeClassComponent} from "./public/pages/profesores/profesores.component";
import {MatPaginator, MatPaginatorModule} from "@angular/material/paginator";
import {MatDialogModule} from "@angular/material/dialog";




@NgModule({
    declarations: [
        AppComponent,
        FooterContentComponent,
        MainContentComponent,
        NavComponent,
        AboutComponent,
        HomeComponent,
        PageNotFoundComponent,
        ProfesoresComponent,
        AppointmentsComponent,
        AppointmentFormComponent,
        CardComponent,
        RegisterComponent,
        SesionesComponent,
        SeeClassComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        HttpClientModule,
        MatIconModule,
        MatDividerModule,
        MatButtonModule,
        MatToolbarModule,
        MatTableModule,
        MatFormFieldModule,
        FormsModule,
        MatInputModule,
        MatCardModule,
        MatDatepickerModule,
        MatPaginatorModule,
        MatNativeDateModule,
        CalendarComponent,
        MatDialogModule
    ],
    providers: [AppointmentsService],
    exports: [
        NavComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
