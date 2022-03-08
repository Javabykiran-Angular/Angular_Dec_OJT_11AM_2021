import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

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

  constructor(private route:ActivatedRoute) { }

  ngOnInit() {
    this.GetDataFromURL();
  }

  GetDataFromURL(){

      this.route.queryParamMap
      .subscribe((param)=>{
        this.myjson.myid=+param.get("id")
        this.myjson.myfname=param.get("fname")
        this.myjson.mylname=param.get("lname")
      })
  }

}
