import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Person } from '../person';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  backendUrl = 'https://swapi.dev/api/';

  constructor(private http: HttpClient) { }

  getPeople() {
    return this.http.get<{ results: Person[] }>(`${this.backendUrl}/people`);
  }

  getFilms() {
    return this.http.get(`${this.backendUrl}/films`);
  }
}
