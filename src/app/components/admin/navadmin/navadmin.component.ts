import { Component, OnInit } from '@angular/core';
import { TokenStorage } from '../../shared/services/token-storage.service';
import * as jwt_decode from 'jwt-decode';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navadmin',
  templateUrl: './navadmin.component.html',
  styleUrls: ['./navadmin.component.css']
})
export class NavadminComponent implements OnInit {
tokenn
roleName
  constructor(private token:TokenStorage,private router: Router ) {
    this.tokenn=this.token.getToken()
    var decoded = jwt_decode(this.tokenn); 
    this.roleName = decoded.aud
    console.log(decoded.sub);
    if((decoded.aud=='[ROLE_ADMIN]'))  {
      this.router.navigateByUrl('/listuser');

    }
    if ((decoded.aud=='[ROLE_INGENIEUR]')) {
      this.router.navigateByUrl('/listeattentes');
    }
    console.log()
    console.log(decoded)
   }

  ngOnInit(): void {
  }
  logout(){
    this.token.signOut();

    if(this.token.getToken()==null){
        this.tokenn=null
       
   }
  

    console.log("azeaeaz") }
    goto(){
      this.router.navigateByUrl('/products/all');
    }
}
