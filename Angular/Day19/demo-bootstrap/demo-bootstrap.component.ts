import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo-bootstrap',
  templateUrl: './demo-bootstrap.component.html',
  styleUrls: ['./demo-bootstrap.component.css']
})
export class DemoBootstrapComponent implements OnInit {

  
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
  
  constructor() { }

  ngOnInit() {
  }

}
