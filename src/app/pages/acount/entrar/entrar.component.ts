import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'pj-login',
  templateUrl: './entrar.component.html',
  styleUrls: ['./entrar.component.scss']
})

export class EntrarComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.configurarFormulario();
  }

  configurarFormulario() {
    this.loginForm = this.formBuilder.group({
      inputEmail: [ null, [Validators.email, Validators.required, Validators.minLength(14)]],
      inputSenha: [null, Validators.required]
    });
  }

  teste() {
    console.log(this.loginForm.value);
  }
}
