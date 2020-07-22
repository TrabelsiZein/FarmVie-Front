import {Injectable} from '@angular/core';
 import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class AuthService {

 
  constructor(private http: HttpClient) {
  }

  login(ussername: string, password: string) {
    const credentials = {username: ussername, password: password};
    console.log(ussername+"hgjkl"+password);
    return this.http.post('http://localhost:8080/api/auth/signin', credentials);
  }

}