import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private baseUrl:string='http://localhost:8080/api/';

  constructor(private http:HttpClient) { }


  loginCheck(obj){
    
   return (this.http.post(`${this.baseUrl}logincheck`,obj));
  }


  

}
