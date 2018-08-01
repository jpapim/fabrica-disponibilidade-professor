import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'pj-form-dados-pessoais',
  templateUrl: './form-dados-pessoais.component.html',
  styleUrls: ['./form-dados-pessoais.component.scss']
})
export class FormDadosPessoaisComponent implements OnInit {

  dadosPessoaisForm: FormGroup;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.configurarFormulario();
  }

  configurarFormulario() {
    this.dadosPessoaisForm = this.formBuilder.group({
      inputNome: [ null, [Validators.required, Validators.minLength(3)]],
      inputSobrenome: [ null, [Validators.required, Validators.minLength(3)]],
      inputApelido: [ null, [Validators.required, Validators.minLength(3)]],
      inputEndereco: [ null, [Validators.required, Validators.minLength(3)]],
      inputCidade: [ null, [Validators.required, Validators.minLength(3)]],
      inputCEP: [ null, [Validators.required, Validators.minLength(3)]],
      inputTelefone: [ null, [Validators.required, Validators.minLength(3)]],
      inputCelular: [ null, [Validators.required, Validators.minLength(3)]],
      inputEmailPessoal: [ null, [Validators.required, Validators.minLength(3)]]
    });
  }

   teste() {
    console.log(this.dadosPessoaisForm.value);
  }
}
