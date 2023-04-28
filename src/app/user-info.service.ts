import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserInfoService {
  private REST_API_SERVER  = 'https://jsonplaceholder.typicode.com/users';
  constructor(private httpClient: HttpClient) { }

  userInfolist(){
    return this.httpClient.get(this.REST_API_SERVER);
  }
  
}

export interface Users {
  username: string;
  email: string;
  phone: any;
}
