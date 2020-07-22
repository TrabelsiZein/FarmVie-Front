import { Component, OnInit } from '@angular/core';
import { UserModule } from 'src/app/modals/user.module';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TokenStorage } from '../../shared/services/token-storage.service';
import { Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-listuser',
  templateUrl: './listuser.component.html',
  styleUrls: ['./listuser.component.css']
})
export class ListuserComponent implements OnInit {
  public products:Array<UserModule>;
  public products2:Array<UserModule>;
  public productsfiler:Array<UserModule>;  
  private recherche
  private sub
  private role;
  constructor(private sanitizer: DomSanitizer,private httpClient:HttpClient,private token:TokenStorage,private router :Router) { 


    
  }

  ngOnInit() {
  
    
this.load()


  }

  load = () => {
    let headers = new HttpHeaders({
      'Authorization':this.token.getToken()
    })
    this.sub =      this.httpClient.get('http://localhost:8080/user/getall' ,{ headers: headers} )

         .subscribe(res => {
          this.products = res as Array<UserModule>;
          this.products2=this.products            
console.log('ggggggggggggggggggggggggggggg')
             console.log(res)
         })
 
 };
 removeFromCart = o => {
  o as UserModule

         let headers = new HttpHeaders({
             'Authorization':this.token.getToken()
           })
               this.httpClient.delete('http://localhost:8080/user/delete/'+o.id ,{ headers: headers} )
  
              .subscribe(res => {
 
 
              })  
              this.products.splice(this.products.indexOf(o), 1);
  
 
 
      };
      filter(event: any){
        this.recherche=event.target.value
        console.log(this.recherche)
        this.products2=this.products 

        this.productsfiler = this.products2.filter((user: UserModule) => user.email.indexOf( this.recherche)==0 ||
         user.name.indexOf(this.recherche)==0)
                                    
         this.products2 = this.productsfiler;





      }
      public getSantizeUrl(url : string) {
        return this.sanitizer.bypassSecurityTrustUrl(url);
      }

}

