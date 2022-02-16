import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inbuild-pipe',
  templateUrl: './inbuild-pipe.component.html',
  styleUrls: ['./inbuild-pipe.component.css']
})
export class InbuildPipeComponent implements OnInit {

  strdetails:string='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam perspiciatis impedit cupiditate dignissimos quae excepturi repellat eligendi, quo repellendus, natus in delectus quod? Numquam dolorem nam perspiciatis aperiam obcaecati harum!';

  num2:number=-452.78956324557;

  mydate=new Date();

  constructor() { }

  ngOnInit() {
  }

}
