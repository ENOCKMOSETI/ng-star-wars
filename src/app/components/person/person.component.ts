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
    this.getPeople();
  }

  @Input() person?: People;
  @Input() selectedPerson?: People;
  
  searchText = '';
  peopleNames: string[] = [];
  pageNumber: number = 3;
  people: People[] = [];
  personFilms: Film[] = [];

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
    this.personFilms = [];
  }

  fetchFilms(person: People): void {
    this.personFilms = [];
    for (let film of person.films) {
      this.personService.getFilms(film).subscribe(results => {
        this.personFilms.push(results);
        this.desendDates();
      })
    }
  }

  desendDates() {
    return this.personFilms.sort((a: any, b: any) => {
      return <any>new Date(b.release_date) - <any>new Date(a.release_date);
    });
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