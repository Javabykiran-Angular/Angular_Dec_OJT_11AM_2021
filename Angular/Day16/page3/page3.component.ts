import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-page3',
  templateUrl: './page3.component.html',
  styleUrls: ['./page3.component.css']
})
export class Page3Component implements OnInit {

  MyId:number;
  MyUsername:string='';
  constructor(private route:ActivatedRoute) { }

  ngOnInit() {
    this.GetDataFromURL();
  }

  GetDataFromURL(){
      this.route.paramMap
      .subscribe((param)=>{
        this.MyId=+param.get('id')
        this.MyUsername=param.get('username')
      })
  }

}
