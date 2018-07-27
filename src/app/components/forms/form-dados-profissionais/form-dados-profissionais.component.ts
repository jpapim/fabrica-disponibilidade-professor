import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'pj-form-dados-profissionais',
  templateUrl: './form-dados-profissionais.component.html',
  styleUrls: ['./form-dados-profissionais.component.scss']
})
export class FormDadosProfissionaisComponent implements OnInit {

  dadosProfissionaisForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
     $('.datepicker').datepicker();
    this.configurationForm();
  }

  configurationForm() {
    this.dadosProfissionaisForm = this.formBuilder.group({
      inputGraduacao: [ null, [Validators.required, Validators.minLength(3)]],
      inputDataConclusao: [ null, [Validators.required]],
      inputMaiorTitulacao: [ null, [Validators.required]],
      inputNomeTitulacaoAndamento: [ null, [Validators.required, Validators.minLength(3)]],
      inputEstimativaTermino: [ null, [Validators.required]]
    });
  }

  teste() {
    console.log(this.dadosProfissionaisForm.value);
  }
}
