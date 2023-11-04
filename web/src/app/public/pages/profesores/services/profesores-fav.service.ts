import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {HttpService} from "../../../../shared/services/http.service";
import {ProfesoresFavEntity} from "../model/profesoresFav.entity";

@Injectable({
  providedIn: 'root'
})
export class ProfesoresFavService extends HttpService<ProfesoresFavEntity>{

  constructor(http: HttpClient) {
    super(http)
    this.resourceEndpoint = '/profesoresFav'
  }
}
