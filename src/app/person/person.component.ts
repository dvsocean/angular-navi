import { Component, OnInit } from '@angular/core';
import { Person } from '../classes/person';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  person: Person = {
    id: 1,
    name: 'Daniel',
    surname: 'Ocean'
  }
}
