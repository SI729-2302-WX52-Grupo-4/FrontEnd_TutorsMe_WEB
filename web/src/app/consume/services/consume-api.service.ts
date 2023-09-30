import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ConsumeApiService {

  apiKey = "fecf4feeffa64e4da682e7d268612ce5";

  constructor(private http: HttpClient) { }

  getSources() {
    return this.http.get(`https://newsapi.org/v2/top-headlines/sources?apiKey=${this.apiKey}`);
  }
}
