import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '../../../../../node_modules/@angular/forms';

@Component({
  selector: 'pj-form-dados-profissionais',
  templateUrl: './form-dados-profissionais.component.html',
  styleUrls: ['./form-dados-profissionais.component.scss']
})
export class FormDadosProfissionaisComponent implements OnInit {

  dadosProfissionaisForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
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
