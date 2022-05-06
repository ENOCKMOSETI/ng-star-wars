import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { People, Film } from '../person';
import { catchError, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  backendUrl = 'https://swapi.dev/api/';

  constructor(private http: HttpClient) { }

  getByPage(page: number): string {
    if (page) {
      return `&page=${page}`;
    } else {
      return '';
    }
  }

  getPeople(page: number): Observable<People[]> {
    return this.http.get<People[]>(`${this.backendUrl}people?format=json${this.getByPage(page)}`).pipe(
      map((res: any) => res['results']));
  }

  getFilms(url: string): Observable<Film> {
    return this.http.get<Film>(`${url}`);
  }
}
