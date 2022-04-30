import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { People } from '../person';
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
      map((res: any) => res['results'])
    );
  }

  getPeopleById(id: number): Observable<People> {
    return this.http.get<People>(`${this.backendUrl}people/${id}`).pipe(map(response => ({
      name: response.name,
      height: response.height,
      mass: response.mass,
      hair_color: response.hair_color,
      skin_color: response.skin_color,
      eye_color: response.eye_color,
      birth_year: response.birth_year,
      gender: response.gender,
      homeworld: response.homeworld,
      films: response.films,
      species: response.species,
      vehicles: response.vehicles,
      starships: response.starships,
      created: response.created,
      edited: response.edited,
      url: response.url
    })));
  }
}
