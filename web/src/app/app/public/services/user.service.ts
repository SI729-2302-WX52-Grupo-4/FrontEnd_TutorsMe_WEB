import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {HttpService} from "../../../shared/services/http.service";
import {UserEntity} from "../../../public/pages/register/model/user.entity";

@Injectable({
  providedIn: 'root'
})
export class UserService extends HttpService<UserEntity>{

  constructor(http:HttpClient) {
    super(http);
    this.resourceEndpoint = '/user';
  }
}
