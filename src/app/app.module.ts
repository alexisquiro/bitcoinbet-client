import { BrowserModule} from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import {RouterModule,Routes}from '@angular/router'
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { LoginComponent } from './components/login/login.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { CoverpageComponent } from './components/coverpage/coverpage.component';
import { BetComponent } from './components/bet/bet.component';
import{HttpClientModule}from '@angular/common/http'
import {FormsModule}from '@angular/forms'
import { from } from 'rxjs';
import { AccountComponent } from './components/account/account.component';
import { AuthGuard} from './guards/auth.guard';
import { SingupComponent } from './components/singup/singup.component';
import {NotauthGuard} from  './guards/notauth.guard';
import { BetformComponent } from './components/betform/betform.component';
import { AboutComponent } from './components/about/about.component';
import { CreateGameComponent } from './components/admin/create-game/create-game.component';
import { UpdateGameComponent } from './components/admin/update-game/update-game.component';
const routes: Routes =[
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path:'bet',
    component:CoverpageComponent
  },
  {
   path:'account',
   component: AccountComponent,
   canActivate:[AuthGuard]


  },
  {
   path:'singUp',
   component: SingupComponent,
   canActivate:[NotauthGuard]
  },

  
  { path:'betform',
    component:BetformComponent,
    canActivate:[AuthGuard]
    

  },
  {
    path:'about',
    component:AboutComponent //temporal
  }
  

]

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    LoginComponent,
    HomepageComponent,
    CoverpageComponent,
    BetComponent,
    AccountComponent,
    SingupComponent,
    BetformComponent,
    AboutComponent,
    CreateGameComponent,
    UpdateGameComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
