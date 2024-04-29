import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { checkMatch, startsWithZeroValidator, validatorWithParameter } from '../validators/formValidator';

@Component({
  selector: 'app-validation-lesson',
  template: `
    <form [formGroup]="frm" (ngSubmit)="submitForm()">
      <input
        type="text"
        placeholder="Name Surname"
        formControlName="fullname"
      />
      <br />
      <div *ngIf="!fullname.valid && (fullname.dirty || fullname.touched)">
        {{ fullname.errors | json }}
      </div>
      <input
        type="text"
        placeholder="Username"
        formControlName="username"
      /><br />
      <div *ngIf="!username.valid && (username.dirty || username.touched)">
        {{ username.errors | json }}
      </div>
      <input type="text" placeholder="Email" formControlName="email" /><br />
      <div *ngIf="!email.valid && (email.dirty || email.touched)">
        {{ email.errors | json }}
      </div>
      <div formGroupName="parola">
        <input
          type="text"
          placeholder="Password"
          formControlName="password"
        /><br />
        <input
          type="text"
          placeholder="Password Confirm"
          formControlName="passwordConfirm"
        /><br />
        <div *ngIf="!parola.valid && (parola.dirty || parola.touched)">
        {{ parola.errors | json }}
      </div>
      </div>
      <button *ngIf="frm.valid">Submit Form</button>
    </form>
    Form Valid:{{ frm.valid |json }}
  `,
})
export class ValidationLessonComponent {
  frm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.frm = formBuilder.group({
      fullname: ['', [Validators.required,validatorWithParameter(["a","b","c"])]],
      username: ['', [Validators.required, Validators.minLength(3)]],
      email: ['',[Validators.required]],
      parola: formBuilder.group({
        password: ['', [Validators.required]],
        passwordConfirm: ['',[Validators.required]],
      },{validators:[checkMatch("password","passwordConfirm")]}),
    });
  }

  get username() {
    return this.frm.get('username');
  }
  get email() {
    return this.frm.get('email');
  }
  get fullname() {
    return this.frm.get('fullname');
  }
  get parola() {
    return this.frm.get('parola');
  }

  get password() {
    return this.frm.get('parola').get("password");
  }
  get passwordConfirm() {
    return this.frm.get('parola').get("passwordConfirm");
  }
  submitForm() {
    alert(JSON.stringify(this.frm.value));
  }
}
