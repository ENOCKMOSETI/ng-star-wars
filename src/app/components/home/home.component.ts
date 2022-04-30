import { Component, OnInit } from '@angular/core';
import { Person } from 'src/app/person';
import { PersonService } from 'src/app/services/person.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  people: Person[] = [];

  constructor(private personService: PersonService) {
    this.getPeople();      
  }

  getPeople() {
    this.personService.getPeople().subscribe(({ results }) => {
      this.people = results;
      console.log(results[0].name);
      for (let i in results) {
        console.log(i, results[i].name)
      }
    })
  }

  ngOnInit(): void {
  }

}
