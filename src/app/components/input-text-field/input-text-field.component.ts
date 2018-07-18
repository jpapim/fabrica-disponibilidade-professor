import { Component, OnInit, Input } from '@angular/core';
import { InputTextField } from './input-text-field.model';

@Component({
  selector: 'pj-input-text-field',
  templateUrl: './input-text-field.component.html',
  styleUrls: ['./input-text-field.component.scss']
})
export class InputTextFieldComponent implements OnInit {

  @Input()
  input: InputTextField;

  constructor() { }

  ngOnInit() {
  }

}
