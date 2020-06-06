import { Injectable } from '@angular/core';
import {HttpClient}from '@angular/common/http';
import{User}from '../model/Users'
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http :HttpClient){}

  createUser(user:User):Observable<User>{

    return this.http.post('http://localhost:4000/api/users',user);
  }
}
