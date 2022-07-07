import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  playerUrl='api/players';
  constructor(private httpCient:HttpClient) { }

  getAllPlayers(){
    return this.httpCient.get(this.playerUrl);
  }
  getPlayerById(id:any){
    return this.httpCient.get(`${this.playerUrl}/${id}`);
  }
  deletePlayer(id:any){
    return this.httpCient.delete(`${this.playerUrl}/${id}`);
  }
  updatePlayer(player:any){
    console.log('update',player);
    return this.httpCient.put(`${this.playerUrl}/${player.id}`,player);
  }
  addPlayer(player:any){
   return this.httpCient.post(this.playerUrl,player);
  }
}
