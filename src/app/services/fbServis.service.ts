
import { Kayit } from './../models/kayit';
import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { AngularFireAuth } from '@angular/fire/auth';
import { Uye } from '../models/uye';
import { Bilgi } from '../models/bilgi';
import { Cevap } from '../models/cevap';

@Injectable({
  providedIn: 'root'
})
export class FbServisService {

  private dbKayit = '/Kayitlar';
  private dbUye='/Uyeler';
  private dbBilgi = '/Bilgiler';
  private dbCevap ='/Cevaplar'

  kayitRef: AngularFireList<Kayit> = null;
  bilgiRef: AngularFireList<Bilgi> = null;
  uyeRef: AngularFireList<Uye> = null;
  cevapRef: AngularFireList<Cevap> = null;
    constructor(
    public db: AngularFireDatabase,
    public afAuth : AngularFireAuth
    
  ) 
{
    this.kayitRef = db.list(this.dbKayit);
    this.uyeRef=db.list(this.dbUye);
    this.bilgiRef=db.list(this.dbBilgi);
    this.cevapRef=db.list(this.dbCevap);
    
}
  UyeOl(uye:Uye){
    return this.afAuth.createUserWithEmailAndPassword(uye.mail,uye.parola);
  }
  UyeEkle(uye:Uye){
    return this.uyeRef.push(uye);
  }




 OturumAc(mail:string,parola:string){
    return this.afAuth.signInWithEmailAndPassword(mail,parola);
 }
 OturumKapat(){
   return this.afAuth.signOut();
 }


/* firebase kayıtlar başlangıç */
KayitListele(){
  return this.kayitRef;
}
KayitEkle(kayit:Kayit){
  return this.kayitRef.push(kayit);

}
KayitDuzenle(kayit:Kayit){
  return this.kayitRef.update(kayit.key,kayit);

}
KayitSil(key:string){
  return this.kayitRef.remove(key);

}
/* firebase kayıtlar bitiş */
OturumKontrol() {
  if(localStorage.getItem("user")){
    return true;
  } else{
    return false;
  }
}

AnketListele(){
  return this.bilgiRef;
}
AnketEkle(bilgi:Bilgi){
  return this.bilgiRef.push(bilgi);

}
AnketDuzenle(bilgi:Bilgi){
  return this.bilgiRef.update(bilgi.key,bilgi);

}
AnketSil(key:string){
  return this.bilgiRef.remove(key);

}

IcListele(){
  return this.cevapRef;
}
IcEkle(cevap:Cevap){
  return this.cevapRef.push(cevap);

}
IcDuzenle(cevap:Cevap){
  return this.cevapRef.update(cevap.key,cevap);

}
IcSil(key:string){
  return this.cevapRef.remove(key);

}


}
