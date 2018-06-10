import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, FormControl,  Validators} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  hide = true;
   email = new FormControl('', [Validators.required, Validators.email]);
   Firstname = new FormControl('', [Validators.required, Validators.minLength(4)]);
   Lastname = new FormControl('', [Validators.required, Validators.minLength(4)]);
   options: FormGroup;
  constructor(fb: FormBuilder) {
    this.options = fb.group({
      hideRequired: false,
      floatLabel: 'auto',
    });
   }
   getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
        this.email.hasError('email') ? 'Not a valid email' :
            '';
  }

  ngOnInit() {
  }
  RegisterUser() {
    console.log();
    }
}
