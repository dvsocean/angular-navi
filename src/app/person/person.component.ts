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

  //All varibales can be passed to the frontend component. It doesnt have to be an object
  person = new Person(1, "Daniel", "Ocean");
  dsTitle = 'This message was found to be really heavy and applicable';


}
