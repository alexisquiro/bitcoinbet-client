import { Component, OnInit } from '@angular/core';
import {LoginService}from '../../services/login.service';
import { from } from 'rxjs';
import { User } from 'src/app/model/Users';
 import {Router} from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

   user:User={
   

   };
  constructor(private loginService :LoginService, private router:Router) { }

  ngOnInit() {
  }
   
  login(){

 delete this.user.idUs;
 delete this.user.permissions;
 if(this.user.name !='' && this.user.password!='' && this.user.email!=''){
   return this.loginService.login(this.user).subscribe(
      res=>{  this.user=res[0];
        console.log(this.user)
       if(this.user.name!='')
       this.user=res[0];
       this.loginService.log=true;
       this.loginService.permisions=this.user.permissions;
       this.loginService.id=res[0].id;
       alert('Welcome ' +this.user.name);
       console.log(this.loginService.permisions) ;
       this.router.navigate(['/bet']);
      
       
      },
      err=>{
        this.loginService.log=false;
        console.log(err)
        
      }
   )}else {
      alert("no se llenaron los campos correctamente")
       this.loginService.log=false;
   }
   }
  }

  


