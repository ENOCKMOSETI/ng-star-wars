import { Component, OnInit } from '@angular/core';
import { Person } from 'src/app/person';
import { PersonService } from 'src/app/services/person.service';
@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {

  people: Person[] = [];
  constructor(private personService: PersonService) { }

  ngOnInit(): void {
    this.personService.getPeople().subscribe(({ results }) => {
      this.people = results;
    })
  }


}
