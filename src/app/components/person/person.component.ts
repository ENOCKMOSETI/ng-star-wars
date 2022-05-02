import { Component, OnInit, Input } from '@angular/core';
import { People } from 'src/app/person';
import { PersonService } from 'src/app/services/person.service';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {

  constructor(private personService: PersonService) { }

  ngOnInit(): void {
    this.getPeopleNames();
    this.getPeople();
  }

  @Input() person?: People;
  @Input() selectedPerson?: People;

  searchText = '';
  peopleNames: string[] =  [];
  pageNumber: number = 2;
  people: People[] = [];

  getPeopleNames() {
    this.personService.getPeople(this.pageNumber).subscribe(( results ) => {
      results.forEach(element => {
        this.peopleNames.push(element.name);
      });
    })
  }

  getPeople() {
    this.personService.getPeople(this.pageNumber).subscribe(( results ) => {
      this.people = results;
    })
  }

  unSelect(): void {
    this.person = this.selectedPerson;
  }

  newSelect(name: string) {
    this.people.forEach(element => {
      if(element.name == name) {
        this.person = element;
      };
    });
  }
}