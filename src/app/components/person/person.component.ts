import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { People } from 'src/app/person';
import { PersonService } from 'src/app/services/person.service';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {

  @Input() person?: People;

  constructor(
    private personService: PersonService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getPerson(1);
  }

  getPerson(id: number) {
    return this.personService.getPeopleById(id).subscribe(results => {
      this.person = results
    });
  }
}