import { Injectable } from '@angular/core';
import {HttpService} from "../../../../shared/services/http.service";
import {SesionesEntity} from "../model/sestiones.entity";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {catchError, Observable, retry} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SesionesService extends HttpService<SesionesEntity>{

  constructor(http:HttpClient) {
    super(http);
    this.resourceEndpoint = '/videoconference';

  }

  createVideoconferences(item:any)
  {
    return this.http.post<SesionesService>(`${this.resourcePath()}/new`,
      JSON.stringify(item), this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }

  getAllVideoconferences(): Observable<SesionesService> {
    return this.http.get<SesionesService>(`${this.resourcePath()}`, this.httpOptions)
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
}
