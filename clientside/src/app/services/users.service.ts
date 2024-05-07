import { Injectable } from '@angular/core';
import { Domains } from '../models/Domains';
import { User } from '../models/User';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }
  currentUser:User = {
    id: 0,
    userName: 'no user',
    password: '',
    domain: Domains.Graphics
  }
  numOfSends:number = 0
  getUser(userData:User){
    return this.http.get(`https://localhost:7168/Users?userName=${userData.userName}&password=${userData.password}`)
  }

}
