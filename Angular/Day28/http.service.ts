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

  getEmployee(){
     return (this.http.get(`${this.baseUrl}getallemployee`))
  }

  getEmployeeById(id){
    return (this.http.get(`${this.baseUrl}getemployeebyid/${id}`));
  }


  getAllCountry(){
    return  (this.http.get(`${this.baseUrl}getallcountry`));
  }

  addEmployee(obj){

      return (this.http.post(`${this.baseUrl}addemployee`,obj,{
        responseType:'text'
      }))
  }

  updateEMP(obj){
   return (this.http.put(`${this.baseUrl}updateemployee`,obj,{responseType:'text'}));
  }

  

}
