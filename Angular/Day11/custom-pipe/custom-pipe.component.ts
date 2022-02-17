import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-pipe',
  templateUrl: './custom-pipe.component.html',
  styleUrls: ['./custom-pipe.component.css']
})
export class CustomPipeComponent implements OnInit {

  strDetails:string='Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut iste consequuntur ab enim nulla laboriosam hic, tenetur repellendus earum minima libero! Sed autem quas tempora recusandae illum architecto ratione pariatur.';
  constructor() { }

  ngOnInit() {
  }

}
