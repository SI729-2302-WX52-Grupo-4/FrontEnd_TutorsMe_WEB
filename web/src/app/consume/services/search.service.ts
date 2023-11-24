import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  search(query: string): Observable<string[]> {
    const results: string[] = ['Angular', 'React', 'Vue'];
    return of(results);
  }
}
