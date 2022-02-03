import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stylebinding',
  templateUrl: './stylebinding.component.html',
  styleUrls: ['./stylebinding.component.css']
})
export class StylebindingComponent implements OnInit {

  mycolor:string='green';
  rating:number=21;

  jsonObj={
    color:'blue',
    fontStyle:'italic',
    "font-size":'32px'
  }

  constructor() { }

  ngOnInit() {
  }

}
