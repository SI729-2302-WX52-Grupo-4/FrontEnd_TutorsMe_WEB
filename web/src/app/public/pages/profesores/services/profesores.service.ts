import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {HttpService} from "../../../../shared/services/http.service";
import {ProfesoresEntity} from "../model/profesores.entity";

@Injectable({
  providedIn: 'root'
})
export class ProfesoresService extends HttpService<ProfesoresEntity>{

  constructor(http: HttpClient) {
    super(http);
    this.resourceEndpoint = '/profesores';
  }
}
