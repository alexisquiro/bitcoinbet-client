import { Injectable } from '@angular/core';
import {HttpClient}from '@angular/common/http';

import{User}from '../model/Users'
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})


export class LoginService {

  log:boolean=false;

   Api_Url:'http//localhost:3000/api';
    static log: boolean;
   permisions:Boolean;
    id:string;

   constructor(private http :HttpClient) { }

    login(user:User): Observable<User>{
    
      return this.http.post('http://localhost:4000/api/logIn',user);
       
  
    }
  
   
   

}
