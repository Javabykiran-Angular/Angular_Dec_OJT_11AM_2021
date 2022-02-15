import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  strdata:string='Data From Parent...';

  jsondata={
    fname:'Sumit',
    id:9,
    role:'Conlutant'
  }

  StrDatafromChild:string='';

  jsonDataFromChild={};

  constructor() { }

  ngOnInit() {
  }

}
