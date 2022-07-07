import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddEditMatchComponent } from './components/add-edit-match/add-edit-match.component';
import { AddMatchComponent } from './components/add-match/add-match.component';
import { AddPlayerComponent } from './components/add-player/add-player.component';
import { AdminComponent } from './components/admin/admin.component';
import { AllMatchesComponent } from './components/all-matches/all-matches.component';
import { AllPlayerComponent } from './components/all-player/all-player.component';
import { ContactComponent } from './components/contact/contact.component';
import { DisplayMatchComponent } from './components/display-match/display-match.component';
import { DisplayPlayerComponent } from './components/display-player/display-player.component';
import { EditMatchComponent } from './components/edit-match/edit-match.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { PlayerComponent } from './components/player/player.component';
import { SignupComponent } from './components/signup/signup.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'login', component:LoginComponent},
  {path:'signup', component:SignupComponent},
  {path:'contact', component:ContactComponent},
  {path:'allMatches', component:AllMatchesComponent},
  {path:'addMatche', component:AddEditMatchComponent},
  {path:'editMatche/:id', component:AddEditMatchComponent},
  {path:'addPlayer', component:AddPlayerComponent},
  {path:'editplayer/:id', component:AddPlayerComponent},
  {path:'allPlayer', component:AllPlayerComponent},
  {path:'admin', component:AdminComponent},
  {path:'displayMatch/:id', component:DisplayMatchComponent},
  {path:'displayPlayer/:id', component:DisplayPlayerComponent},
  {path:'editMatch/:id', component:EditMatchComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
