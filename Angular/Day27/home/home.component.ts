import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

 EmpData:any[]=[];

  constructor(private service:HttpService) { }

  ngOnInit() {
    this.GetEmpData();
  }

  GetEmpData(){
      this.service.getEmployee()
      .subscribe((response)=>{
        this.EmpData=(<any>response);
      })
  }

  

}
