import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from "ngx-spinner";
import { Product } from './modals/product.model';
import { CartItem } from './modals/cart-item';
import { ProductService } from './components/shared/services/product.service';
import { TokenStorage } from './components/shared/services/token-storage.service';
import { HttpClient } from '@angular/common/http';
import { CartService } from './components/shared/services/cart.service';
import { Router } from '@angular/router';
import { PlatformLocation } from '@angular/common';
import * as jwt_decode from 'jwt-decode';
import { UserService } from './components/shared/services/user.service';
import { HomeFourComponent } from './components/shop/home-four/home-four.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  title = 'ecommerce-sophia-new';

  
  public banners = [];
  public currencies = ['USD', 'EUR'];
  public currency:any;
  public role:string
  public flags = [
    
    { name:'French', image: 'assets/images/flags/fr.svg' },
    { name:'Arabe', image: 'assets/images/flags/tr.svg' }
  ]
  public flag:any;
  
  products: Product[];
  
  indexProduct: number;
  shoppingCartItems: CartItem[] = [];
  wishlistItems  :   Product[] = [];
  
  
  public slides = [
    { title: 'Huge sale', subtitle: 'Up to 70%', image: 'assets/images/carousel/banner1.jpg' },
    { title: 'Biggest discount', subtitle
    : 'Check the promotion', image: 'assets/images/carousel/banner2.jpg' },
    { title: 'Biggest sale', subtitle: 'Dont miss it', image: 'assets/images/carousel/banner3.jpg' },
    { title: 'Our best products', subtitle: 'Special selection', image: 'assets/images/carousel/banner4.jpg' },
    { title: 'Massive sale', subtitle: 'Only for today', image: 'assets/images/carousel/banner5.jpg' }
  ];
  tokenn=null;
  valueLogin=1 ;
  test2=1
  constructor(private userservie :UserService,private spinner: NgxSpinnerService,private router :Router,private productService: ProductService, private token :TokenStorage,private httpClient: HttpClient, private cartService: CartService,locationn: PlatformLocation) {
    this.cartService.getItems().subscribe(shoppingCartItems => this.shoppingCartItems = shoppingCartItems);
  this.tokenn=this.token.getToken()
  if(this.tokenn!=null){
    this.valueLogin=1 ;
    var decoded = jwt_decode(this.tokenn); 
    console.log(decoded.aud);
 
      if((decoded.aud=='[ROLE_ADMIN]')||(decoded.aud=='[ROLE_INGENIEUR]'))  {
        this.router.navigateByUrl('/listuser')
      
this.test2=2
console.log(this.test2)
    }
  }
  else if(location.href.substr(location.href.length-7)=="account"){
    this.valueLogin=2 ;

  }else if(location.href.substr(location.href.length-7)!="account") {
    this.valueLogin=1 ;

  }
   locationn.onPopState(() => {

      if(this.tokenn!=null){
      this.valueLogin=1 ;
      
    }else if(location.href.substr(location.href.length-7)=="account"){
      this.valueLogin=2 ;
  
    }
    else{
      this.valueLogin=1 ;
  
    }      });
      locationn.onHashChange(() => {

        if(location.href.substr(location.href.length-7)=="account"){
          this.valueLogin=2 ;
      
        }else{
          this.valueLogin=1 ;
      
        }          });
 
  
  }
  
 
  
  
  
  
  
  public changeCurrency(currency){
  this.currency = currency;
  }
  
  public changeLang(flag){
  this.flag = flag;
  }
        irrigation="oui"
        siege="oui"
        biologique="oui"
        typeFinance="invertissement"
        nomArticle:String
        
         
          selectedFile: File;
          selectedFile2: File;
  
         
          retrievedImage: any;
         
          base64Data: any;
        
          retrieveResonse: any;
         
          message: string;
         
          imageName: any;
          image :any=[];
           
          public onFileChanged(event) {
        
            this.selectedFile = event.target.files[0];
         
          }
          public onFileChanged2(event) {
        
            this.selectedFile2 = event.target.files[0];
         
          }

  ngOnInit() {
    /** spinner starts on init */
    this.spinner.show();
    

    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 5000);

    window.scroll(0,0);
    this.productService.getBanners()
    .subscribe(
      data => this.banners = data
    );
  
  
  
  this.productService.getProducts()
  .subscribe(
   (product: Product[]) => {
     this.products = product
   }
  )
  this.currency = this.currencies[0];
  this.flag = this.flags[0];
  }
  
  logout(){
    this.token.signOut();

    if(this.token.getToken()==null){
        this.tokenn=null
       
   }
   this.router.navigateByUrl('/pages/my-account')

}
logins(){
this.valueLogin=2
this.router.navigateByUrl('/pages/my-account')
} 
}
