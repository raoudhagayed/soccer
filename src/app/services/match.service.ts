import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MatchService {
  matchUrl='http://localhost:8080/api/matches';
  constructor(private httpCient:HttpClient) { }

  getAllMatches(){
    return this.httpCient.get(this.matchUrl);
  }
  getMatchById(id:any){
    return this.httpCient.get(`${this.matchUrl}/${id}`);
  }
  deleteMatch(id:any){
    return this.httpCient.delete(`${this.matchUrl}/${id}`);
  }
  updateMatch(match:any){
    return this.httpCient.put(`${this.matchUrl}/${match.id}`,match);
  }
  addMatch(match:any){
   return this.httpCient.post(this.matchUrl,match);
  }
}
