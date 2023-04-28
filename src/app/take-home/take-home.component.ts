import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-take-home',
  templateUrl: './take-home.component.html',
  styleUrls: ['./take-home.component.css']
})
export class TakeHomeComponent implements OnInit {
  myDate:any = new Date();
  infolist:any;

  constructor(private datePipe: DatePipe) {
    this.myDate = this.datePipe.transform(this.myDate, 'yyyy-MM-dd');
   }

  ngOnInit(): void {

    
  }

 

}
