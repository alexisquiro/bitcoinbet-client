import { Component, OnInit,Output} from '@angular/core';
import { Game } from 'src/app/model/Game';
import {Router} from '@angular/router';
import {GamesService} from '../../services/games.service'
import { Observable } from 'rxjs';
import {LoginService}from '../../services/login.service';
import { Bet } from 'src/app/model/Bet';
import { BetUser } from 'src/app/model/BetUser';
import { BetGame } from 'src/app/model/betGame';
import{BetService} from '../../services/bet.service';

@Component({
  selector: 'app-coverpage',
  templateUrl: './coverpage.component.html',
  styleUrls: ['./coverpage.component.css']
})
export class CoverpageComponent implements OnInit {
  games:any;
   bet:Bet={}
   
   betGame:BetGame;
    
     
  constructor(private gameService:GamesService,private route:Router,private betService :BetService) { }

  ngOnInit() { 
    
    console.log("lalas");
    this.gameService.getGames().subscribe(
      
       res=>{
           this.games=res
           
         for (let x of this.games)
             console.log(x)
       },
       err=>{
            alert("no hay juegos pos los momentos")
 
       }

    )

  }

    createBet(id :string){
    
            //probar si hay vairables globales si no buscar manera de que se llenes los bets
            
         this.betService.betGame.idGame=id;
         

        console.log(id + "  laadkfsd")
  

    }


}
