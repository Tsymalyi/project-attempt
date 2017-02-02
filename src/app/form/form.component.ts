import { Component, OnInit } from '@angular/core';
import {Hero} from "../hero";


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  powers = ['Really Smart', 'Super Flexible',
    'Super Hot', 'Weather Changer'];
  submitted : boolean = false;

  model = new Hero(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');

  onSubmit() {this.submitted = true};
  get diagnostic() { return JSON.stringify(this.model); };

  ngOnInit(): void {
  }
}
