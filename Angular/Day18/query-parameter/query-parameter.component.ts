import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NotificationService } from '../notification.service';

@Component({
  selector: 'app-query-parameter',
  templateUrl: './query-parameter.component.html',
  styleUrls: ['./query-parameter.component.css']
})
export class QueryParameterComponent implements OnInit {

  myjson={
    myid:0,
    myfname:'',
    mylname:''
  }
  message:string='';

  constructor(private route:ActivatedRoute,
              private notificationService:NotificationService) { }

  ngOnInit() {
    this.GetDataFromURL();
    this.GetNotificationMsg();
  }

  GetNotificationMsg(){
    this.notificationService.notification
    .subscribe((data)=>{
        this.message=data;
    })
  }

  GetDataFromURL(){

      this.route.queryParamMap
      .subscribe((param)=>{
        this.myjson.myid=+param.get("id")
        this.myjson.myfname=param.get("fname")
        this.myjson.mylname=param.get("lname")
      })
  }

  onCart(msg){
    this.notificationService.SendNotification(msg);
  }

}
