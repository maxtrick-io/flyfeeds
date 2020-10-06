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
import {DOCUMENT} from '@angular/common';
import {MatSlideToggleChange} from '@angular/material/slide-toggle';
import {FormBuilder, Validators} from '@angular/forms';
import {RegisterComponent} from '../register/register.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, AfterViewInit {
  form: any;
  @ViewChild('dynamic', {read: ViewContainerRef}) target: ViewContainerRef;
  private componentRef: ComponentRef<any>;
  register: any;
  constructor(
    private formBuilder: FormBuilder,
    private componentFactoryResolver: ComponentFactoryResolver) { }

  change: EventEmitter<MatSlideToggleChange>;
  ngOnInit(): void {
    this.form = this.formBuilder.group({
      username: ['', Validators.required ,Validators.minLength(5)],
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
  ngAfterViewInit(): void {
  }

  get username(): any{
      return this.form.get('username');
    }

  switchLogin(): void{
    if (this.componentRef)
    {this.destroyComponent(); }
    const childComponent = this.componentFactoryResolver.resolveComponentFactory(RegisterComponent);
    this.componentRef = this.target.createComponent(childComponent);
  }

  destroyComponent(): void{
    this.componentRef.destroy();
  }
}
