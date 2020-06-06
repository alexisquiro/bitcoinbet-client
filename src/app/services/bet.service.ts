import { Injectable } from '@angular/core';
import {Bet} from '../model/Bet'
import{BetUser} from '../model/BetUser';
import {BetGame} from '../model/betGame';
import {HttpClient}from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import {LoginService } from '../services/login.service'
@Injectable({
  providedIn: 'root'
})
export class BetService {
   bet:Bet={}
   betUser:BetUser={}
   betGame:BetGame={}
    
  constructor(private http :HttpClient, private logiService :LoginService) { 
  }
  BetGame(bet: Bet):Observable<Bet>{
    
       //probar si se manda toto asi de una xd
     
  return  this.http.post("http://localhost:4000/api/bet/"+this.betGame.idGame+"/"+this.logiService.id+"/"+this.betUser.wallet,bet);
    
  }

  BetUser(betUser:BetUser){
     this.http.post('http://localhost:4000/api/bet',betUser);
  
  }
}
