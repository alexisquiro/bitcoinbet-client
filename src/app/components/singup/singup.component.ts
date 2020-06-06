import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/Users';
import {UsersService} from '../../services/users.service';
import {LoginService}from '../../services/login.service';
import { from } from 'rxjs';
import {Router} from '@angular/router';
@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.css']
})
export class SingupComponent implements OnInit {
  user:User={
    idUs:'',
    name:'',
    email:'',
    password:'',
    permissions:false

  };

    
  constructor(private userService:UsersService,private loginService: LoginService, private router:Router) { }

  ngOnInit() {
  }


  createUser(){
    console.log(this.user);
    delete this.user.idUs;
    delete this.user.permissions;
    if(this.user.name !='' && this.user.password!='' && this.user.email!=''){
     return this.userService.createUser(this.user).subscribe(
         res=>{
          console.log (res);
          this.loginService.log=true;
          this.router.navigate(['/bet']);
         },
         err=>  {
           this.loginService.log=false;
           console.log(err)
         }
   
      )  
        }else {
          alert("no se llenaron los campos correctamente")
           this.loginService.log=false;
       }
      }
}
