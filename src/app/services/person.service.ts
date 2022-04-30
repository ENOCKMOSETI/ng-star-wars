import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Person } from '../person';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  backendUrl = 'https://swapi.dev/api';

  constructor(private http: HttpClient) { }

  getByPage(page: number): string {
    if (page) {
      return `&page=${page}`;
    } else {
      return '';
    }
  }

  getPeople() {
    return this.http.get<{ results: Person[] }>(`${this.backendUrl}/people/?page=2`);
  }

  getPerson(id: number) {
    return this.http.get<{ results: Person[] }>(`${this.backendUrl}/people/${id}`);
  }
}
