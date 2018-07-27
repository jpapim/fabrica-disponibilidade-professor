import { Component, OnInit } from '@angular/core';
declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'pj-form-disciplinas-ministradas',
  templateUrl: './form-disciplinas-ministradas.component.html',
  styleUrls: ['./form-disciplinas-ministradas.component.scss']
})
export class FormDisciplinasMinistradasComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('select').formSelect();
  }

}
