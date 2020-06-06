import { Injectable } from '@angular/core';
import {HttpClient}from '@angular/common/http';
import { Game } from '../model/Game';

import { Observable } from 'rxjs/internal/Observable';
@Injectable({
  providedIn: 'root'
})
export class GamesService {

  constructor(private http :HttpClient) { }

  getGames():Observable<Game>{

    return this.http.get('http://localhost:4000/api/Game');
  }
  createGame(game:Game):Observable<Game>{

    return this.http.post('http://localhost:4000/api/Game',game);
  }

}
