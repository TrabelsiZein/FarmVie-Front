import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TokenStorage } from './token-storage.service';
import * as jwt_decode from 'jwt-decode';
import { Router } from '@angular/router';


@Injectable()
export class UserService {
  private sub2;
tokenn
  constructor(private httpClient :HttpClient,private token :TokenStorage,private router: Router) { }



  getuser(){
    let headers = new HttpHeaders({
      'Authorization':this.token.getToken()
    })
   return  this.httpClient.get('http://localhost:8080/user/getcourent' , { headers: headers})

   
  }
  canActivate(): boolean {
    this.tokenn=this.token.getToken()
    if(this.tokenn!=null){
       var decoded = jwt_decode(this.tokenn); 
      console.log(decoded.aud);
      if(decoded.aud=='[ROLE_ADMIN]')  {
return true  
        
  
      }
    }
    return false;
  }
  getarticleuser(){
    let headers = new HttpHeaders({
      'Authorization':this.token.getToken()
    })
   return  this.httpClient.get('http://localhost:8080/projet/getcourentArticles' , { headers: headers})

   
  }
  getarticleuser2(){
    let headers = new HttpHeaders({
      'Authorization':this.token.getToken()
    })
   return  this.httpClient.get('http://localhost:8080/projet/getcourentArticles2' , { headers: headers})

   
  }
  updatephoto(uploadImageData: FormData){
    let headers = new HttpHeaders({
      'Authorization':this.token.getToken()
    })
   return  this.httpClient.post('http://localhost:8080/user/update' ,uploadImageData, { headers: headers})

   
  }

}
