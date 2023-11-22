import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {HttpService} from "../../../../shared/services/http.service";
import {UserEntity} from "../model/user.entity";
import {catchError, retry} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService extends HttpService<UserEntity>{

  constructor(http:HttpClient) {
    super(http);
    this.resourceEndpoint = '/user/new';
  }

  createUser(item: any) {
    return this.http.post<UserService>(this.resourcePath(),
      JSON.stringify(item), this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }
}
