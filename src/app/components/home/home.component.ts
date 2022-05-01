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

  pageNumber: number = 1;


  constructor(private personService: PersonService) {
    this.getPeople();    
  }

  getPeople() {
    this.personService.getPeople(this.pageNumber).subscribe(( results ) => {
      this.people = results;
    })
  }
  
  ngOnInit(): void {
  }

}
