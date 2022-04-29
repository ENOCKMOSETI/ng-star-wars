import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Person } from 'src/app/person';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  people: Person[] = [];

  constructor(private http: HttpClient) {
    http.get<{ results: Person[] }>("https://swapi.dev/api/people/")
      .subscribe(({ results }) => {
        console.log(results);
        this.people = results;
      })
  }

  ngOnInit(): void {
  }

}
