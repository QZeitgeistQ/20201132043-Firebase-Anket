import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Cevap } from 'src/app/models/cevap';
import { Sonuc } from 'src/app/models/sonuc';
import { FbServisService } from 'src/app/services/fbServis.service';

@Component({
  selector: 'app-yanit',
  templateUrl: './yanit.component.html',
  styleUrls: ['./yanit.component.css']
})
export class YanitComponent implements OnInit {
  cevaplar:any;
  secCevap:Cevap=new Cevap();
  sonuc:Sonuc=new Sonuc();

  constructor(
    public fbServis:FbServisService
  ) { }

  ngOnInit(): void {
    this.IcListele();
    this.secCevap.key=null;
  }
IcListele(){
  this.fbServis.IcListele().snapshotChanges().pipe(
    map(changes =>
      changes.map(c =>
        ({ key: c.payload.key, ...c.payload.val() })
      )
    )
  ).subscribe(data => {
    this.cevaplar = data;
  });

}
IcDuzenle(cevap:Cevap){
Object.assign(this.secCevap,cevap);
}
IcSil(cevap:Cevap){
this.fbServis.IcSil(cevap.key).then(()=>{
  this.sonuc.islem=true;
  this.sonuc.mesaj="Kayıt Silindi";

});
}

Kaydet(){
  var tarih=new Date();
  this.secCevap.duzTarih=tarih.getTime().toString();
if(this.secCevap.key==null){
  this.secCevap.kayTarih=tarih.getTime().toString();
  this.fbServis.IcEkle(this.secCevap).then(()=>{
    this.sonuc.islem=true;
    this.sonuc.mesaj="Kayıt Eklendi";

  });
}
else{
  this.fbServis.IcDuzenle(this.secCevap).then(()=>{
    this.sonuc.islem=true;
    this.sonuc.mesaj="Kayıt Düzenlendi";

  });
}
}
}