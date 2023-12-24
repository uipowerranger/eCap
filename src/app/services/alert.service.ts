import { Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Observable, Subject } from 'rxjs';
import { filter } from 'rxjs/operators';

import { Alert, AlertType, AlertOptions } from '../models';

@Injectable({ providedIn: 'root' })
export class AlertService {
  constructor(private messageService: MessageService) {}
  private subject = new Subject<Alert>();
  private defaultId = 'default-alert';

  // enable subscribing to alerts observable
  onAlert(id = this.defaultId): Observable<Alert> {
    return this.subject.asObservable().pipe(filter((x) => x && x.id === id));
  }

  // convenience methods
  success(message: string, options?: AlertOptions, sticky?: boolean) {
    this.messageService.add({
      severity: 'success',
      summary: 'Success',
      detail: message,
      sticky: sticky,
    });
  }

  error(message: string, options?: AlertOptions) {
    this.messageService.add({
      severity: 'error',
      summary: 'Error',
      detail: message,
    });
  }

  info(message: string, options?: AlertOptions) {
    this.messageService.add({
      severity: 'info',
      summary: 'Info',
      detail: message,
    });
  }

  warn(message: string, options?: AlertOptions) {
    this.messageService.add({
      severity: 'warn',
      summary: 'Warn',
      detail: message,
    });
  }

  // main alert method
  alert(alert: Alert) {
    alert.id = alert.id || this.defaultId;
    this.subject.next(alert);
  }

  // clear alerts
  clear(id = this.defaultId) {
    this.subject.next(new Alert({ id }));
  }
}
