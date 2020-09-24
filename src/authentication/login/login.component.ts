import { Component, OnInit , EventEmitter} from '@angular/core';
import {DOCUMENT} from '@angular/common';
import {MatSlideToggleChange} from '@angular/material/slide-toggle';
import {FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: any;

  constructor(private formBuilder: FormBuilder) { }
  isDisabled = true;
  option = 'sign-in';
  access = 'publicly';

  change: EventEmitter<MatSlideToggleChange>;
  ngOnInit(): void {
    this.form = this.formBuilder.group({
      username: ['', Validators.required ],
      password: ['', Validators.required ]
    });
  }

  changeSign(value: string): void {
    this.option = value;
  }
  onChange(ob: MatSlideToggleChange): void {
    if (ob.checked) {
      this.access = 'private';
    }
    if (!ob.checked) {
      this.access = 'publicly';
    }
  }
}
