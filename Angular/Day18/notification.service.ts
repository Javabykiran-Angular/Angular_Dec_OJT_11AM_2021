import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  // notification=new Subject<string>();
  notification=new BehaviorSubject<string>('Welcome ');
  constructor() { }

  SendNotification(msg){

      this.notification.next(msg);
  }

}
