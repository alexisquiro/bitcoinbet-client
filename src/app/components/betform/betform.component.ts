import { Component, OnInit } from '@angular/core';
import{LoginComponent}from '../login/login.component'
import {LoginService}from '../../services/login.service';
import {User} from '../../model/Users';
import {Game} from '../../model/Game';
import{BetUser} from '../../model/BetUser';
import{BetGame} from '../../model/betGame'
import{BetService} from '../../services/bet.service'
@Component({
  selector: 'app-betform',
  templateUrl: './betform.component.html',
  styleUrls: ['./betform.component.css']
})
export class BetformComponent implements OnInit {
  
  Game:Game ={
    idGame:'',
    team1:'',
    team2:'',
    result:'',

  }
  betGame:BetGame={
   idBet:'',
   idGame:'',

  }
  BetUser:BetUser={
  idBet:'',
  idBetUS:'',
  wallet:'',
  }
 
  user:User={
    idUs:'',
    name:'',
    email:'',
    password:'',

  };



  constructor(private betService:BetService,private loginService:LoginService) { }

  ngOnInit() {
    


  }

letsgo(){
 this.betService.betUser.wallet=this.BetUser.wallet;
 this.betService.betUser.idBetUS=this.loginService.id;
 console.log(this.betService.betUser.wallet +" "+this.betService.bet.winner +" "+this.betService.betUser.idBetUS+" "+this.betService.betGame.idGame)
 this.betService.BetGame(this.betService.bet).subscribe(res=>{

    console.log("ok")
 },err=>{
     console.log("no ok")
 }
     
  )
  

}

}
