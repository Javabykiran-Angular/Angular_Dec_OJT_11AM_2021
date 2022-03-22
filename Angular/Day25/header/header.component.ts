import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  username:string='';
  constructor(private router:Router) { }

  ngOnInit() {
    this.username=sessionStorage.getItem("myusername");

  }

  onLogout(){
    sessionStorage.removeItem("myusername")
    sessionStorage.clear();
    this.router.navigate(['/login']);
  }

}
