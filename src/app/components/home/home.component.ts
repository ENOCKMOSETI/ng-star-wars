import { Component, OnInit } from '@angular/core';
import { People } from 'src/app/person';
import { PersonService } from 'src/app/services/person.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  people: People[] = [];
  person!: People;
  selectedPerson!: People;
  pageNumber: number = 2;
  
  constructor(private personService: PersonService) { }
  
  getPeople() {
    this.personService.getPeople(this.pageNumber).subscribe(( results ) => {
      this.people = results;
    })
  }
  
  onSelect(person: People): void {
      this.selectedPerson = person; 
  }
  
  ngOnInit(): void {
    this.getPeople();
  }
}
