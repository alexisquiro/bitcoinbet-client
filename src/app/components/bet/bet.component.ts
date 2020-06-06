import { Component, OnInit,Input,Output} from '@angular/core';
import { Game } from '../../model/Game';
import { EventEmitter } from '@angular/core';
import{BetService} from '../../services/bet.service'
@Component({
  selector: 'app-bet',
  templateUrl: './bet.component.html',
  styleUrls: ['./bet.component.css']
})
export class BetComponent implements OnInit {
  @Input() Game:Game;
  @Output() bet:EventEmitter<String> =new EventEmitter();


  constructor(private betservice:BetService) { }

  ngOnInit() {
    console.log(this.Game)
}


Bet1(id:string){
  console.log(id)
  this.betservice.bet.winner="1";
  this.betservice.betGame.idGame=id;
  //aqui se enviara el id del juego para la apuesta
   this.bet.emit(id+ " 1")

}
Bet2(id:string){
  console.log(id)
  this.betservice.bet.winner="2";
  this.betservice.betGame.idGame=id;
  //aqui se enviara el id del juego para la apuesta
   this.bet.emit(id )

}
}