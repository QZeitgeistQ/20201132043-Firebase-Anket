import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FbServisService } from './services/fbServis.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'firebaseanket';
  constructor(
    public FbServis:FbServisService,
    public router:Router,
  ){}
  OturumKapat(){
    this.FbServis.OturumKapat().then(()=>{
      localStorage.removeItem("user");
      this.router.navigate(['/login']);
    });
  }

  OturumKontrol() {
    if(localStorage.getItem("user")){
      return true;
    } else{
      return false;
    }
  }
}

