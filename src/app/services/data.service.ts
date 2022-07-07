import { Injectable } from '@angular/core';
import {InMemoryDbService} from 'angular-in-memory-web-api';
@Injectable({
  providedIn: 'root'
})
export class DataService implements InMemoryDbService{

  constructor() { }
  createDb(){

   let  matches=[
    {id:1, teamOne: 'FCB', teamTwo: 'RMD',
    scoreOne: '1', scoreTwo: '2', 
    logoOne: 'assets/images/logo_1.png', 
    logoTwo: 'assets/images/logo_2.png'},

    {id:2, teamOne: 'ATM', teamTwo: 'PSG',
    scoreOne: '2', scoreTwo: '3', 
    logoOne: 'assets/images/logo_1.png', 
    logoTwo: 'assets/images/logo_2.png'},

    {id:3, teamOne: 'JUV', teamTwo: 'INT',
    scoreOne: '3', scoreTwo: '3', 
    logoOne: 'assets/images/logo_1.png', 
    logoTwo: 'assets/images/logo_2.png'},
  
    {id:4, teamOne: 'JUV', teamTwo: 'INT',
    scoreOne: '4', scoreTwo: '3', 
    logoOne: 'assets/images/logo_1.png', 
    logoTwo: 'assets/images/logo_2.png'}];

    let players = [
      {id:1, playerName:'Cristiano ronald', numPlayer:7, postePlayer:'Attaquant', teamPlayer:15, image:'assets/images/img_1.jpg'},
      {id:2, playerName:'Messi' , numPlayer:10, postePlayer:'Attaquant', teamPlayer:16, image:'assets/images/img_2.jpg'},
      {id:3, playerName:'Sergio ramos'  , numPlayer:4, postePlayer:'Défenseur', teamPlayer:20, image:'assets/images/img_3.jpg'},
      {id:4, playerName:'Karim benzema'  , numPlayer:9, postePlayer:'Attaquant', teamPlayer:90, image:'assets/images/img_1.jpg'}
    ];

   return {matches,players};
  }
}
