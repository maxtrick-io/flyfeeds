import {
  Component,
  OnInit,
  EventEmitter,
  ComponentFactoryResolver,
  ViewChild,
  ViewContainerRef,
  ComponentRef,
  AfterViewInit
} from '@angular/core';
import {MatSlideToggleChange} from '@angular/material/slide-toggle';
import {FormBuilder, Validators} from '@angular/forms';

import { AuthService } from '../auth.services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, AfterViewInit {
  constructor(
    private formBuilder: FormBuilder,
    private componentFactoryResolver: ComponentFactoryResolver,
    private authService: AuthService) {
  }

  get username(): any{
      return this.form.get('username');
    }
// -----------------login auth -----------
   // Is a user logged in?
   get authenticated(): boolean {
    return this.authService.authenticated;
  }
  // returns user ---------> displayName
  get user(): string {
    return this.authService.user.displayName;
  }
  form: any;
  @ViewChild('dynamic', {read: ViewContainerRef}) target: ViewContainerRef;
  private componentRef: ComponentRef<any>;
  register: any;
  change: EventEmitter<MatSlideToggleChange>;

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      username: ['', Validators.required , Validators.minLength(5)],
      password: ['', Validators.required ]
    });

    this.register = this.formBuilder.group({
      username: ['', [
        Validators.required,
        Validators.email
      ]],
      password: ['', [Validators.required]],
      'confirm-password': ['', Validators.required]
    });
  }
  ngAfterViewInit(): void { }

  async signIn(): Promise<void> {
    await this.authService.signIn();
  }

  signOut(): void {
    this.authService.signOut();
  }
}
