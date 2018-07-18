import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { InputTextField } from '../../components/input-text-field/input-text-field.model';

@Component({
  selector: 'pj-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  emailInput: InputTextField = {name: 'defaultFormEmail', description: 'Digite o seu email', id: 'defaultForm-email', icon: 'fa-envelope'};
  senhaInput: InputTextField = {name: 'defaultFormPass', description: 'Digite sua senha', id: 'defaultForm-pass', icon: 'fa-lock'};

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.configurarFormulario();
  }

  configurarFormulario() {
    this.loginForm = this.formBuilder.group({
      defaultFormEmail: [ null, [Validators.email, Validators.required, Validators.minLength(14)]],
      defaultFormPass: [null, Validators.required]
    });
  }

  teste() {
    console.log(this.loginForm.value);
  }
}
