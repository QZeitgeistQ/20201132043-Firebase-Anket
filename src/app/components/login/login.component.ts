import { Sonuc } from './../../models/sonuc';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FbServisService} from './../../services/fbServis.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
sonuc:Sonuc = new Sonuc();
  constructor(
    public fbservis:FbServisService,
    public router:Router
  ) { }

  ngOnInit(): void {
  }
GirisYap(mail:string,parola:string){
this.fbservis.OturumAc(mail,parola).then(d=>{
if (d.user){
  localStorage.setItem("user",JSON.stringify(d.user));
  this.router.navigate(['/']);
}
},err=>{
  
});
}
}
