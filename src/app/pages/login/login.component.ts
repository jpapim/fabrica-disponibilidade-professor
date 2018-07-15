import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'pj-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

  loginForm: FormGroup;

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
