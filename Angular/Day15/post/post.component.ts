
import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

    posts:any[]=[];
    id:number;
    title:string='';
    body:string='';
    isHidden:boolean=true;
    isDisplay:boolean=true;
    customMessage:string='';
  constructor(private service:HttpService) { }

  ngOnInit() {
      this.GetAllPost();
  }


  GetAllPost(){
      this.service.getPost()
      .subscribe((response)=>{
        console.log(response);
        this.posts=(<any>response)
      },(myerror)=>{
         // alert("Error is Occured... "+myerror.status)

            this.isDisplay=false;
            let mystatus:number=myerror.status;
            console.log(mystatus);
            if(mystatus>=400 || mystatus<=499){
               // alert("Client Side Error...")
               this.customMessage="Client Side Error..."
            }else{
             // alert("Something is wrong")
             this.customMessage="Something is wrong";
            }

      })

  }

  onSend(mytitle,mybody){

      let obj={
        title:mytitle,
        body:mybody
      }
      this.service.PostData(obj)
      .subscribe((response)=>{
        console.log(response);
      })

  }

  onEdit(item){
    this.id=item.id;
    this.title=item.title;
    this.body=item.body;
    this.isHidden=false;
  }

  Onupdate(){
    
    let obj={
      id:this.id,
      title:this.title,
      body:this.body
    }

      this.service.UpdateData(obj)
      .subscribe((response)=>{
        console.log(response)
        this.isHidden=true;
      })

  }

  onDelete(id){
    this.service.DeleteData(id)
    .subscribe((response)=>{
      console.log(response)

    })
  }


}
