import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from '../http.service';
import { Employee } from '../model/employee';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  id:number;

  empobj=<Employee>{};
  constructor(private route:ActivatedRoute,
              private service:HttpService) { }

  ngOnInit() {
    this.GetDataFromUrl();
    this.GetDataFromBackend();
  }

  GetDataFromUrl(){
      this.route.paramMap
      .subscribe((param)=>{
        this.id=+param.get("id")
      })
  }

  GetDataFromBackend(){
      this.service.getEmployeeById(this.id)
      .subscribe((response)=>{
        // console.log(response)
        this.empobj=(<Employee>response)
        console.log(this.empobj)
      })
  }

  OnUpdate(){
    
  }

}
