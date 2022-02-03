import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class-binding',
  templateUrl: './class-binding.component.html',
  styleUrls: ['./class-binding.component.css']
})
export class ClassBindingComponent implements OnInit {

  myclass="success";
  rating:number=2;
  isError:boolean=false;
  isSpecial:boolean=true;

  jsonObj={
    "success":!this.isError,
    'warning':this.isError,
    // "special":true
    "special":this.isSpecial  
  }
  
  constructor() { }

  ngOnInit() {
  }

}
