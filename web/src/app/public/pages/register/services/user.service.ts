import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {HttpService} from "../../../../shared/services/http.service";
import {UserEntity} from "../model/user.entity";
import {catchError, Observable, retry} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService extends HttpService<UserEntity>{

  constructor(http:HttpClient) {
    super(http);
    this.resourceEndpoint = '/users';
  }

  createUser(item: any) {
    return this.http.post<UserService>(`${this.resourcePath()}/new`,
      JSON.stringify(item), this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }


  getAllUser(): Observable<UserService> {
    return this.http.get<UserService>(`${this.resourcePath()}/users`, this.httpOptions)
      .pipe(
        retry(2),
        catchError((error: HttpErrorResponse) => {
          if (error.status === 404) {
            // Handle 404 error (Not Found) differently if needed
            console.error('Resource not found:', error);
          }
          return this.handleError(error);
        })
      );
  }

  logIn(item: any) {
    return this.http.post<UserService>(`${this.resourcePath()}/login`,
       item, this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }
}
