import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fordirective',
  templateUrl: './fordirective.component.html',
  styleUrls: ['./fordirective.component.css']
})
export class FordirectiveComponent implements OnInit {


  arrProduct=[
    {
      name:'Samsung',
      price:25000,
      quantity:1
    },
    {
      name:'RealMe',
      price:15000,
      quantity:2
    },
    {
      name:'Motorolla',
      price:30000,
      quantity:1
    },
    {
      name:'OnePlus',
      price:35000,
      quantity:1
    },
    {
      name:'Apple',
      price:75000,
      quantity:1
    }
  ];

  selected:string='';
  constructor() { }

  ngOnInit() {
  }

  onMouseOver(myitem){
    console.log("Mouse Over Event Occur...")

    this.selected=myitem.name;
  }

  onMouseOut(){
    console.log("Mouse Out Event Occur...");
    this.selected='';
  }

}
