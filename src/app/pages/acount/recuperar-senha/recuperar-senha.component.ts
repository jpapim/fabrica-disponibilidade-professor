import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'pj-recuperar-senha',
  templateUrl: './recuperar-senha.component.html',
  styleUrls: ['./recuperar-senha.component.scss']
})
export class RecuperarSenhaComponent implements OnInit {

  recuperaSenhaForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.configurarFormulario();
  }

  configurarFormulario() {
    this.recuperaSenhaForm = this.formBuilder.group({
      inputEmailRecuperacao: [ null, [Validators.email, Validators.required, Validators.minLength(14)]]
    });
  }

  teste() {
    console.log(this.recuperaSenhaForm.value);
  }
}
