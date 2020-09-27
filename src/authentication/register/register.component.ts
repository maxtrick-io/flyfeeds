import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  form: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      username: ['', Validators.required ],
      password: ['', Validators.required ],
      'confirm-password': ['', Validators.required]
    });
  }
}

@Component({
  selector: 'app-signup',
  templateUrl: './login/signup.component.html',
  styleUrls: ['./login/signup.component.scss']
})
export class SignupComponent implements OnInit {
  form: FormGroup;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      username: ['', Validators.required ],
      password: ['', Validators.required ]
    });
  }
}
