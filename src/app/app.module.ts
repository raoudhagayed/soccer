import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { NewsComponent } from './components/news/news.component';
import { ResultsComponent } from './components/results/results.component';
import { VideosComponent } from './components/videos/videos.component';
import { BlogComponent } from './components/blog/blog.component';
import { EventComponent } from './components/event/event.component';
import { ScoreComponent } from './components/score/score.component';
import { HomeComponent } from './components/home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContactComponent } from './components/contact/contact.component';
import { AllMatchesComponent } from './components/all-matches/all-matches.component';
import { MatcheComponent } from './components/matche/matche.component';
import { AddMatchComponent } from './components/add-match/add-match.component';
import { AddPlayerComponent } from './components/add-player/add-player.component';
import { AdminComponent } from './components/admin/admin.component';
import { AllPlayerComponent } from './components/all-player/all-player.component';
import { PlayerComponent } from './components/player/player.component';
import { DataService } from './services/data.service';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { DisplayMatchComponent } from './components/display-match/display-match.component';
import { DisplayPlayerComponent } from './components/display-player/display-player.component';
import { EditMatchComponent } from './components/edit-match/edit-match.component';
import { AddEditMatchComponent } from './components/add-edit-match/add-edit-match.component'
import { XhrInterceptor } from './xhr.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    LoginComponent,
    SignupComponent,
    NewsComponent,
    ResultsComponent,
    VideosComponent,
    BlogComponent,
    EventComponent,
    ScoreComponent,
    HomeComponent,
    ContactComponent,
    AllMatchesComponent,
    MatcheComponent,
    AddMatchComponent,
    AddPlayerComponent,
    AdminComponent,
    AllPlayerComponent,
    PlayerComponent,
    DisplayMatchComponent,
    DisplayPlayerComponent,
    EditMatchComponent,
    AddEditMatchComponent
     
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    // InMemoryWebApiModule.forRoot(DataService),
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: XhrInterceptor, multi: true}  ],
  bootstrap: [AppComponent]
   
})
export class AppModule { }
