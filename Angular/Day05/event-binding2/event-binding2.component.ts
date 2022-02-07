import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding2',
  templateUrl: './event-binding2.component.html',
  styleUrls: ['./event-binding2.component.css']
})
export class EventBinding2Component implements OnInit {

  result:number=0;
  name:string='';
  constructor() { }

  ngOnInit() {
  }

  onAddition(num1,num2){

    let n1:number=+num1;
    let n2:number=+num2;
    this.result=n1+n2;
    // this.result=num1+num2;
  }

  onChange(){
    console.log("Change Event Occur...");
  }

  onKeyup(){
    console.log("Key Up Event Occur....")
  }

  onKeydown(){
    console.log("Key Down Event Occur....")
  }

}
