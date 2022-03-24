import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { stringify } from 'querystring';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-addemployee',
  templateUrl: './addemployee.component.html',
  styleUrls: ['./addemployee.component.css']
})
export class AddemployeeComponent implements OnInit {

  allCountry:any[]=[];
  constructor(private service:HttpService,
              private router:Router) { }

  ngOnInit() {
    this.GetAllCOuntry();
  }

  GetAllCOuntry(){
    this.service.getAllCountry()
    .subscribe((response)=>{
        this.allCountry=(<any>response)
    })
  }

  onSubmit(f:NgForm){
   

    let obj={
      name:f.value.name,
      departmentit:f.value.departmentit,
      status:f.value.status.toLowerCase(),
      phoneno:f.value.phoneno,
      country:{
        cid:f.value.country.cid,
        cname:f.value.country.cname
      },

      createdby:sessionStorage.getItem("myusername"),
      createddtm:Date.now(),
      updatedby:sessionStorage.getItem("myusername"),
      updateddtm:Date.now()

    }

    this.service.addEmployee(obj)
    .subscribe((response)=>{
      // console.log(response);
      this.router.navigate(['/home'])
    })
  }

}
