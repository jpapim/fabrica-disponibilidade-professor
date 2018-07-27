import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'pj-form-disciplinas-de-interesse',
  templateUrl: './form-disciplinas-de-interesse.component.html',
  styleUrls: ['./form-disciplinas-de-interesse.component.scss']
})
export class FormDisciplinasDeInteresseComponent implements OnInit {

disciplinasMinistradasForm: FormGroup;
  
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    
  }
  
  configurarFormulario(){
    this.disciplinasMinistradasForm = this.formBuilder.group({
      
    });
  }

}
