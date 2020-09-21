import { Component, OnInit , EventEmitter} from '@angular/core';
import {DOCUMENT} from '@angular/common';
import {MatSlideToggleChange} from '@angular/material/slide-toggle';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor() { }
  isDisabled = true;
  option = 'sign-in';
  access = 'publicly';

  change: EventEmitter<MatSlideToggleChange>;
  ngOnInit(): void {
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
