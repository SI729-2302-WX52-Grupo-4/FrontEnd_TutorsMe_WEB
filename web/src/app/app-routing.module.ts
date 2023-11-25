import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./public/pages/home/home.component";
import {AboutComponent} from "./public/pages/about/about.component";
import {PageNotFoundComponent} from "./public/pages/page-not-found/page-not-found.component";
import {MainContentComponent} from "./consume/components/main-content/main-content.component";
import {AppointmentsComponent} from "./schedule/pages/appointments/appointments.component";
import {ProfesoresComponent} from "./public/pages/profesores/profesores.component";
//new
import { RegisterComponent } from './public/pages/register/register.component';
import {SesionesComponent} from "./public/pages/sesiones/sesiones.component";
import {PerfilComponent} from "./public/pages/perfil/perfil.component";

const routes: Routes = [
  {path: 'home/:id', component: HomeComponent},
  //{path: 'Buscador', component: MainContentComponent},
  {path: 'schedule/appointment/:id', component: AppointmentsComponent},
  {path: 'sesiones/:id', component: SesionesComponent},
  {path: 'profesores/:id', component: ProfesoresComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: AboutComponent},
  {path: 'perfil/:id', component: PerfilComponent},
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
