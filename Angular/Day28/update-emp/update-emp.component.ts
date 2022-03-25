import { Component, Input, OnInit } from '@angular/core';
import { Employee } from './../model/employee';
import { HttpService } from './../http.service';

@Component({
  selector: 'app-update-emp',
  templateUrl: './update-emp.component.html',
  styleUrls: ['./update-emp.component.css']
})
export class UpdateEmpComponent implements OnInit {

  @Input() parentdata=<Employee>{};

  allCountry:any[]=[];
  issubmitDissabled:boolean=true;
  backendResponse:string='';

  constructor(private service :HttpService) { }

  ngOnInit() {
    this.GetAllCountry();
  }

  GetAllCountry(){
      this.service.getAllCountry()
      .subscribe((response)=>{
        this.allCountry=(<any>response)
      })
  }

  onupdate(){
    this.parentdata.updatedby=sessionStorage.getItem("myusername");
    this.parentdata.updateddtm=Date.now();
    this.service.updateEMP(this.parentdata)
    .subscribe((response)=>{
      this.backendResponse=response;
      this.issubmitDissabled=false;
    })
  }

}

