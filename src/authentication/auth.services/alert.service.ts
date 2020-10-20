import { Injectable } from '@angular/core';
import {Alert} from '../auth.common/alert';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor() { }
  alerts: Alert[] = [];

  add(message: string, debug: string): void {
    this.alerts.push({message, debug});
  }

  remove(alert: Alert): void {
    this.alerts.splice(this.alerts.indexOf(alert), 1);
  }
}
