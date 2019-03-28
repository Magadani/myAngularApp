import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UsernameValidators } from './username.validators';
import { logging } from 'protractor';

@Component({
  selector: 'signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})

@NgModule({
  imports: [
    FormGroup,
    FormControl,
    Validators
  ]
})
export class SignupFormComponent {

  form = new FormGroup({
    account: new FormGroup({
      username: new FormControl('', Validators.required, UsernameValidators.shouldBeUnique),
      password: new FormControl('', Validators.required)
    })
    
  });

  login(){
    this.form.setErrors({
      invalidLogin: true
    });
  }
  get username(){
    return this.form.get('account.username');
  }
  get password(){
    return this.form.get('account.password');
  }

}
