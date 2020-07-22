import { Component, OnInit, Inject } from '@angular/core';
import { UserModule } from 'src/app/modals/user.module';
import { Product } from 'src/app/modals/product.model';
import { DomSanitizer } from '@angular/platform-browser';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TokenStorage } from '../../shared/services/token-storage.service';
import { Router, ActivatedRoute } from '@angular/router';
import { DialogdetaillComponent } from '../../admin/dialogdetaill/dialogdetaill.component';
import { DialoglistinvestComponent } from '../../admin/dialoglistinvest/dialoglistinvest.component';
import * as jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-data-validation',
  templateUrl: './data-validation.component.html',
  styleUrls: ['./data-validation.component.css']
})
export class DataValidationComponent implements OnInit {
   
  public user: Array<UserModule>;
  public userFilter: Array<UserModule>;
  public userFinal: Array<UserModule> = new Array();
  public products: Array<Product>;
  public products2: Array<Product>;
  public productsfiler: Array<Product>;
  public ingenieur
  private role;
  private sub
  confirmtest : Boolean= false
  private recherche;
  valueIng
  tokenn
  id
  idP
  public product            :   Product = {};
   imagebig:string=""
  imagesmall:string=""
  test:string
  public image: any;
  public zoomImage: any;

  public counter            :   number = 1;
  datasett: Details = {
    name:'',
    age:null,
    country:'',
    email:''
  };
  index: number;
  constructor(private dialog: MatDialog, private sanitizer: DomSanitizer, private httpClient: HttpClient, private token: TokenStorage, private router: Router,private route: ActivatedRoute,
    @Inject(MAT_DIALOG_DATA) public data:any) {
       this.toggleEditable(event)
      this.tokenn=this.token.getToken()
    var decoded = jwt_decode(this.tokenn); 
    this.id=decoded.sub

    this.idP=  this.route.snapshot.params['idP']
   console.log(data.idP)

       
   console.log("deddddddddddd")
   let headers = new HttpHeaders({
     'Authorization': this.tokenn
   })
   this.httpClient.get('http://localhost:8080/projet/getArticles2/'+data.idP, { headers: headers })
  
   .subscribe((response) => {
     this.product=response as Product
     console.log(this.product)
  
    }
   );    
     
  }
  onSubmit()
  {
    let headers = new HttpHeaders({
      'Authorization': this.tokenn
    })
    this.httpClient.post('http://localhost:8080/sendSimpleEmail', { headers: headers }).subscribe(
      res => {
        
      });

      this.httpClient.post('http://localhost:8080/projet/updateIng/'+this.product.idProjet+'/'+this.product.ingenieur+'/accepte',null, { headers: headers })
       
    .subscribe(
      data =>     location.reload()      ,
      error => console.log('oops', error)
     
    );

  }
  
 
  toggleEditable(event) {
    this.confirmtest = false

    if ( event.target.checked ) {
        this.confirmtest = false;
   }else{
     this.confirmtest = true
   }
}
  onChange(newVal) {

    this.valueIng = newVal
  }
   
 
  ngOnInit() {
 

    // this.userFilter.forEach(element => {
    //   if(element.roleName === "ROLE_INGENIEUR"){
    //     this.userFinal.push(element)
    //   }
    // });

  }

 
 
 

  // filter(event: any) {
  //   this.recherche = event.target.value
  //   console.log(this.recherche)
  //   this.products2 = this.products

  //   this.productsfiler = this.products2.filter((product: Product) => product.nomProjet.indexOf(this.recherche) == 0 ||
  //     product.type.indexOf(this.recherche) == 0 || product.etat.indexOf(this.recherche) == 0 || product.emailUser.indexOf(this.recherche) == 0)

  //   this.products2 = this.productsfiler;
  
  // }

  // public getSantizeUrl(url: string) {
  //   return this.sanitizer.bypassSecurityTrustUrl(url);
  // }


}
interface Details
{
  name:string;
  age:number;
  country:string;
  email:string;
}