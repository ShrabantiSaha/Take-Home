import { Component, OnInit } from '@angular/core';
import {  UserInfoService, Users } from '../user-info.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  infolist:any;
  constructor(private _userInfo:UserInfoService) { }

  ngOnInit(): void {
    this.getUserInfo();
  }

  getUserInfo() {
    this._userInfo.userInfolist().subscribe((data)=>{
      console.log(data);
      this.infolist = data;
    })  
  }

}
