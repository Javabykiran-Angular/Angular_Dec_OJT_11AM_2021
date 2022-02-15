import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task5',
  templateUrl: './task5.component.html',
  styleUrls: ['./task5.component.css']
})
export class Task5Component implements OnInit {

  EmpData:any[]=[];
  constructor() { }

  ngOnInit() {
  }

  OnAdd(id,name,sal){
    let obj={
      id:id,
      name:name,
      salary:sal
    }

    this.EmpData.push(obj);

  }

  onRemove(i){
    this.EmpData.splice(i,1);
  }

}
