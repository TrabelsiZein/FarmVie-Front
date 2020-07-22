import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TokenStorage } from '../../shared/services/token-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listcontact',
  templateUrl: './listcontact.component.html',
  styleUrls: ['./listcontact.component.css']
})
export class ListcontactComponent implements OnInit {
  public products:Array<Contact>;
  public products2:Array<Contact>;
  public productsfiler:Array<Contact>;  
  private recherche
  private sub
  private role;
  constructor( private httpClient:HttpClient,private token:TokenStorage,private router :Router) { 


    
  }

  ngOnInit() {
  
    
this.load()


  }

  load = () => {
    let headers = new HttpHeaders({
      'Authorization':this.token.getToken()
    })
    this.sub =      this.httpClient.get('http://localhost:8080/contact/getall' ,{ headers: headers} )

         .subscribe(res => {
          this.products = res as Array<Contact>;
          this.products2=this.products            

             console.log(res)
         })
         console.log(this.products2)
 
 };
 removeFromCart = o => {
  o as Contact

         let headers = new HttpHeaders({
             'Authorization':this.token.getToken()
           })
               this.httpClient.delete('http://localhost:8080/contact/delete/'+o.idC ,{ headers: headers} )
  
              .subscribe(res => {
 
 
              })  
              this.products.splice(this.products.indexOf(o), 1);
  
 
 
      };
      filter(event: any){
        this.recherche=event.target.value
        console.log(this.recherche)
        this.products2=this.products 

        this.productsfiler = this.products2.filter((user: Contact) => user.email.indexOf( this.recherche)==0 ||
         user.name.indexOf(this.recherche)==0)
                                    
         this.products2 = this.productsfiler;





      }

}
export class Contact {
  idC?:number
name?:String
email?:String
subject?:String
description?:String


}