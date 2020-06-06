import { Injectable } from '@angular/core';
import { Router, CanActivate, CanActivateChild, CanLoad, Route, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import {HttpClient}from '@angular/common/http';
import {LoginService} from '../services/login.service';
import {User} from '../model/Users'
import {LoginComponent} from '../components/login/login.component'
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
    

  constructor(private loginService: LoginService, private router:Router ){}
  
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):  boolean {


    if (this.loginService.log){

     return this.loginService.log;
    
    }
   else {
     
     alert("you should be registered");
     this.router.navigate(['/login']);
     return false;

   }
    

  }

     
 
   }

  
 

