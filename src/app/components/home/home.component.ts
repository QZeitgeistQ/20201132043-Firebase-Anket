import { Router } from '@angular/router';
import { FbServisService } from './../../services/fbServis.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
adsoyad:string;
uid:string;
  constructor( 
    public fbServis:FbServisService,
    public router: Router
  ) { }

  ngOnInit(): void {
    var user=JSON.parse(localStorage.getItem("user"));
    this.uid=user.udi;
    this.adsoyad=user.displayName;
  }
  OturumKapat(){
    this.fbServis.OturumKapat().then(()=>{
      localStorage.removeItem("user");
      this.router.navigate(['/login']); 
    });
  }
}
