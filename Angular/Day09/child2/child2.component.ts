import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit {

   @Output() ChildStrEvent =new EventEmitter();

   @Output()  ChildJsonEvent=new EventEmitter();

   strdata:string='Data from child....'
   jsonObj={
     id:9,
     fname:'sumit',
     role:'Developer'
   }


  constructor() { }

  ngOnInit() {
  }

  OnSend(){
      this.ChildStrEvent.emit(this.strdata);
      this.ChildJsonEvent.emit(this.jsonObj);
  }

}
