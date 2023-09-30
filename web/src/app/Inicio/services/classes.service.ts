import { Injectable } from '@angular/core';
import {HttpService} from "../../shared/services/http.service";
import {HttpClient} from "@angular/common/http";
import {Class} from "../model/class.entity";
@Injectable({
  providedIn: 'root'
})
export class ClassesService extends HttpService<Class> {

  constructor(http: HttpClient) {
    super(http);
    this.resourceEndpoint = '/classes';
  }
}
