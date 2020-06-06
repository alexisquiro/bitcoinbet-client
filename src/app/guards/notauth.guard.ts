import { Injectable } from '@angular/core';
import { Router ,CanActivate, CanActivateChild, CanLoad, Route, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import {AuthGuard} from 'src/app/guards/auth.guard';
import {LoginService} from '../services/login.service';
@Injectable({
  providedIn: 'root'
})
export class NotauthGuard implements CanActivate {

   constructor(private loginService: LoginService, private router:Router){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
 
      if (!this.loginService.log){

        return !this.loginService.log;
       
       }
      else {
   
        this.router.navigate(['/login']);
        return true;
   
      }
       
   
     }
  
  }

