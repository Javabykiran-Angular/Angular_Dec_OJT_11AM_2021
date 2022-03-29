import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { DialogService } from '../dialog.service';
import { HttpService } from '../http.service';
import { Employee } from './../model/employee';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

 EmpData:any[]=[];
 empobj=<Employee>{};
 isradioCheck:boolean=false;
 modalRef: BsModalRef;  
 config = {
  animated: true,
  
  ignoreBackdropClick: true,
  class: "alert alert-danger"
};

p:number=1;

nameSearch:string='';

  constructor(private service:HttpService,
    private modalservice:BsModalService,
    private dialogservice:DialogService) { }

  ngOnInit() {
    this.GetEmpData();
  }

  GetEmpData(){
      this.service.getEmployee()
      .subscribe((response)=>{
        this.EmpData=(<any>response);
      })
  }

  onRadioClick(item){
    // console.log('Click event ');
    this.empobj=item;
    console.log(this.empobj);
    this.isradioCheck=true;
  }

  onRadioCheck():boolean{
    if(this.isradioCheck)
    return true;
    else
    return false
  }

  onUpdate(popup:TemplateRef<any>){
    if(this.onRadioCheck())
    {

      this.modalRef=this.modalservice.show(popup,this.config)
      //perform a logic
    }else{
      alert('Please Select A Record To Update..')
    }
  }

  onDelete(){

    if(this.onRadioCheck())
    {
      //write ur code here
      this.dialogservice.OpenConfirmDialog('Are you sure to delete this record?')
      .afterClosed()
      .subscribe((res)=>{
        if(res){
          //delete the record
          console.log('====>>> '+res)
        }else{
          //no need any action
          console.log('++++++++ >>> '+res)
        }
      })


    }else{
      alert('Please Select A Record To Delete..')
    }

  }

  

}
