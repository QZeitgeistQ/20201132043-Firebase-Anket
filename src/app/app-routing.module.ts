import { YanitComponent } from './components/yanit/yanit.component';
import { AnketComponent } from './components/anket/anket.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { KayitlarComponent } from './components/kayitlar/kayitlar.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AngularFireAuthGuard,redirectUnauthorizedTo} from '@angular/fire/auth-guard';

const redirectLogin=()=>redirectUnauthorizedTo(('login'))
const routes: Routes = [
  { path :'kayitlar', component: KayitlarComponent,
  canActivate:[AngularFireAuthGuard],
   data:{
     authGuardPipe: redirectLogin
   }
},
  { path:'',component: HomeComponent,},
  
  { path :'login', component: LoginComponent},
  { path :'register', component: RegisterComponent},
  { path :'anket', component: AnketComponent},
  { path :'yanit', component: YanitComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
