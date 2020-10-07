import { Injectable } from '@angular/core';
import {Alert} from '../auth.common/alert'

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor() { }
  alerts: Alert[] = [];

  add(message: string, debug: string) {
    this.alerts.push({message: message, debug: debug});
  }

  remove(alert: Alert) {
    this.alerts.splice(this.alerts.indexOf(alert), 1);
  }
}
