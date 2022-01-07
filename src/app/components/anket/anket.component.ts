import { Bilgi } from './../../models/bilgi';
import { Component, OnInit } from '@angular/core';
import { Sonuc } from 'src/app/models/sonuc';
import { FbServisService } from 'src/app/services/fbServis.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-anket',
  templateUrl: './anket.component.html',
  styleUrls: ['./anket.component.css']
})
export class AnketComponent implements OnInit {
  bilgiler:any;
  secBilgi:Bilgi=new Bilgi();
  sonuc:Sonuc=new Sonuc();

  constructor(
    public fbServis:FbServisService
  ) { }

  ngOnInit(): void {
    this.AnketListele();
    this.secBilgi.key=null;
  }
AnketListele(){
  this.fbServis.AnketListele().snapshotChanges().pipe(
    map(changes =>
      changes.map(c =>
        ({ key: c.payload.key, ...c.payload.val() })
      )
    )
  ).subscribe(data => {
    this.bilgiler = data;
  });

}
AnketDuzenle(bilgi:Bilgi){
Object.assign(this.secBilgi,bilgi);
}
AnketSil(bilgi:Bilgi){
this.fbServis.AnketSil(bilgi.key).then(()=>{
  this.sonuc.islem=true;
  this.sonuc.mesaj="Kayıt Silindi";

});
}

Kaydet(){
  var tarih=new Date();
  this.secBilgi.duzTarih=tarih.getTime().toString();
if(this.secBilgi.key==null){
  this.secBilgi.kayTarih=tarih.getTime().toString();
  this.fbServis.AnketEkle(this.secBilgi).then(()=>{
    this.sonuc.islem=true;
    this.sonuc.mesaj="Kayıt Eklendi";

  });
}
else{
  this.fbServis.AnketDuzenle(this.secBilgi).then(()=>{
    this.sonuc.islem=true;
    this.sonuc.mesaj="Kayıt Düzenlendi";

  });
}
}
}