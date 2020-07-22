import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../shared/services/auth-service.service';
import { Router } from '@angular/router';
import { TokenStorage } from '../../shared/services/token-storage.service';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2'


@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.sass']
})
export class MyAccountComponent  {

  constructor(private router :Router, private authService: AuthService, private token: TokenStorage) {
    if(this.token.getToken()!=null){
      this.router.navigateByUrl('products/all')

    }
   }

  username: string;
  password: string;
 t :token;
  login( f: NgForm  ): void {
      this.authService.login(f.value['username'], f.value['password']).subscribe(
      data => {
       this.t= data as token
        this.token.saveToken(this.t.tokenType+" "+this.t.accessToken);
        location.reload()
       }
    ),
    error => {;
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Echec l\'ors de l\'authentification!'
      })
    }
  }
  
 

}
export class token {
  accessToken : string;
  tokenType:string;

}
