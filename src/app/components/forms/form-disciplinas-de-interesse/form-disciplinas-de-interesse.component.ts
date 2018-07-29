import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
declare var jquery: any;
declare var $: any;

@Component({
  selector: 'pj-form-disciplinas-de-interesse',
  templateUrl: './form-disciplinas-de-interesse.component.html',
  styleUrls: ['./form-disciplinas-de-interesse.component.scss']
})
export class FormDisciplinasDeInteresseComponent implements OnInit {

  disciplinasDeInteresseForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    $('select').formSelect();
    this.configurarFormulario();
  }

  configurarFormulario() {
    this.disciplinasDeInteresseForm = this.formBuilder.group({
    });
  }

}
