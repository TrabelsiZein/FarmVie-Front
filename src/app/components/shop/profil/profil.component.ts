import { Component, OnInit } from '@angular/core';
import { UserModule } from 'src/app/modals/user.module';
import { UserService } from '../../shared/services/user.service';
import { TokenStorage } from '../../shared/services/token-storage.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Product } from 'src/app/modals/product.model';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.sass']
})
export class ProfilComponent implements OnInit {
  user:UserModule
  selectedFile: File;
  editt=1
  totaleI=0
  public cartList:Array<Product>=null;
  public cartList2:Array<Product>=null;
  tottt = 59
  constructor(private sanitizer: DomSanitizer,private userservice:UserService,private token:TokenStorage,private httpclient :HttpClient,private router: Router) { }

  ngOnInit(): void {
    this.getdetailprofil()
this.getuserarticl()
this.getuserarticl2()
console.log(this.cartList)
  }

  
  getdetailprofil(){

    this.userservice.getuser().subscribe(res => {
 this.user=res as UserModule;

     })


  }
  updatephoto(event){
    this.selectedFile = event.target.files[0];

    const uploadImageData = new FormData();
    uploadImageData.append('imageFile', this.selectedFile, this.selectedFile.name);
this.userservice.updatephoto(uploadImageData).subscribe(res => {
      })
 location.reload()

  }
  update(f:NgForm){
    const uploadImageData = new FormData();

    uploadImageData.append('name', f.value['name']);
    uploadImageData.append('prenom', f.value['prenom']);
    uploadImageData.append('numtel', f.value['numtel']);
    uploadImageData.append('email', f.value['email']);

location.reload()
  }
  edit(){

    this.editt=2;
  }
  getuserarticl(){
    (async () =>{
    this.userservice.getarticleuser().subscribe(res => {
      console.log("resss"+res)


      
 this.cartList=res as Array<Product>;
 this.cartList.forEach(element => {
  this.totaleI=this.totaleI+ parseInt(element.montantMin);
});
console.log(this.cartList)
});
await this.delay(1000);

 
})();



}
getuserarticl2(){
  (async () =>{
  this.userservice.getarticleuser2().subscribe(res => {
    console.log("resss"+res)


    
this.cartList2=res as Array<Product>;
this.cartList2.forEach(element => {
this.totaleI=this.totaleI+ parseInt(element.montantMin);
});
 });
await this.delay(1000);


})();



}
public buyNow(id) {
  this.router.navigate(['/home/product', id]);
 }
public getSantizeUrl(url : string) {
  return this.sanitizer.bypassSecurityTrustUrl(url);
}
delay(ms: number) {
  return new Promise( resolve => setTimeout(resolve, ms) );
}
 
}
