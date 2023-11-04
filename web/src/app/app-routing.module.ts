import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./public/pages/home/home.component";
import {AboutComponent} from "./public/pages/about/about.component";
import {PageNotFoundComponent} from "./public/pages/page-not-found/page-not-found.component";
import {MainContentComponent} from "./consume/components/main-content/main-content.component";
import {AppointmentsComponent} from "./schedule/pages/appointments/appointments.component";
import {ProfesoresComponent} from "./public/pages/profesores/profesores.component";
import {PerfilContentComponent} from "./perfil/pages/perfil-content/perfil-content.component";
//new

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'Profesores', component: MainContentComponent},
  {path: 'schedule/appointment', component: AppointmentsComponent}, //SESIONES DE CLASE
  {path: 'Buscador', component: ProfesoresComponent},
  {path: 'perfil', component: PerfilContentComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
