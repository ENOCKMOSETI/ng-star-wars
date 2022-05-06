import { Component, OnInit, Input } from '@angular/core';
import { People, Film } from 'src/app/person';
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
  }

  @Input() person?: People;
  @Input() selectedPerson?: People;

  searchText = '';
  peopleNames: string[] = [];
  pageNumber: number = 2;
  people: People[] = [];
  personFilms: Film[] = [];

  getPeopleNames() {
    this.personService.getPeople(this.pageNumber).subscribe(( results ) => {
      results.forEach(element => {
        this.peopleNames.push(element.name);
      });
    })
  }

  unSelect(): void {
    this.person = this.selectedPerson;
  }

  fetchFilms(person: People): void {
    for (let film of person.films) {
      this.personService.getFilms(film).subscribe(results => {
        this.personFilms.push(results)
        console.log(this.personFilms);
        
      })
    }
  }

  newSelect(name: string) {
    this.personFilms = [];
    this.people.forEach(element => {
      if(element.name == name) {
        this.person = element;
      };
    });
  }
}