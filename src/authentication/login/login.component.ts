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
import {RegisterComponent, SignupComponent} from '../register/register.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, AfterViewInit {
  form: any;
  @ViewChild('dynamic', {read: ViewContainerRef}) target: ViewContainerRef;
  private componentRef: ComponentRef<any>;
  constructor(
    private formBuilder: FormBuilder,
    private componentFactoryResolver: ComponentFactoryResolver) { }

  change: EventEmitter<MatSlideToggleChange>;
  ngOnInit(): void {}
  ngAfterViewInit(): void {
    this.login();
  }
  switchLogin(): void{
    if (this.componentRef)
    {this.destroyComponent(); }
    const childComponent = this.componentFactoryResolver.resolveComponentFactory(RegisterComponent);
    this.componentRef = this.target.createComponent(childComponent);
  }

  login(): void{
    if (this.componentRef)
    {this.destroyComponent(); }
    const childComponent = this.componentFactoryResolver.resolveComponentFactory(SignupComponent);
    this.componentRef = this.target.createComponent(childComponent);
  }

  destroyComponent(): void{
    this.componentRef.destroy();
  }
}
