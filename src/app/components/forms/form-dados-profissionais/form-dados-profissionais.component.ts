import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
declare var jquery: any;
declare var $: any;

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
      inputGraduacao: [null, [Validators.required, Validators.minLength(3)]],
      inputDataConclusao: [null, [Validators.required]],
      inputMaiorTitulacao: [null, [Validators.required]],
      inputTitulacaoAndamento: [null, [Validators.required]],
      inputNomeTitulacaoAndamento: [null, [Validators.required, Validators.minLength(3)]],
      inputEstimativaTermino: [null, [Validators.required]],
      inputPrincipalAtuacaoProfissional: [null, [Validators.required, Validators.minLength(20)]],
      inputTempoXpProfissional: [null, [Validators.required, Validators.minLength(2)]],
      inputTempoXpMagisterioSuperior: [null, [Validators.required, Validators.minLength(2)]],
      inputXpDocenciaEducacaoBasica: [null, [Validators.required, Validators.minLength(2)]],
      inputDataAttLattes: [null, [Validators.required]],
      inputUrlLattes: [null, [Validators.required]],
      inputTxtAreaPublicacoes: [null, [Validators.required]]
    });
  }

  teste() {
    console.log(this.dadosProfissionaisForm.value);
  }
}
