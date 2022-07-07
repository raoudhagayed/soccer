import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userUrl='http://localhost:8080/api/user';
  constructor(private httpCient:HttpClient) { }

  addUser(user:any){
    return this.httpCient.post(this.userUrl,user);
   }

   login(user:any){
     return this.httpCient.post<any>('http://localhost:8080/login', user);
   }
}
