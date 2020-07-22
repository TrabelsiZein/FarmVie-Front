import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';


const TOKEN_KEY = 'AuthToken';

@Injectable()
export class TokenStorage implements CanActivate{
tokenn
  constructor(private router: Router) { 

  }
  canActivate(): boolean {
    
    if (this.getToken()==null) {
      this.router.navigateByUrl('/pages/my-account');
      return false;
    }
    return true;
  }
  signOut() {
    window.localStorage.removeItem(TOKEN_KEY);
    window.localStorage.clear();
location.reload()

  }
  redirectTo(uri:string){
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
    this.router.navigate([uri]));
 }
  public saveToken(token: string) {
    window.localStorage.removeItem(TOKEN_KEY);
    window.localStorage.setItem(TOKEN_KEY,  token);
  }

  public getToken(): string {
    return localStorage.getItem(TOKEN_KEY);
  }
  public saveToken2(value: string) {
    window.localStorage.removeItem(TOKEN_KEY);
    window.localStorage.setItem("loginPage",  value);
  }
  public remouveValueLogin() {
    window.localStorage.removeItem("loginPage");
   }
   public getValueLogin(): string {
    return localStorage.getItem("loginPage");
  }
}