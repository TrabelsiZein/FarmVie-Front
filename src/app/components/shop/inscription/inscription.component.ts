import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { TokenStorage } from '../../shared/services/token-storage.service';
import { ProductService } from '../../shared/services/product.service';
import { CartService } from '../../shared/services/cart.service';
import { CartItem } from 'src/app/modals/cart-item';
import { Product } from 'src/app/modals/product.model';
import * as jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.sass']
})
export class InscriptionComponent implements OnInit {

 test="1";
public banners = [];
public currencies = ['USD', 'EUR'];
public currency:any;
public flags = [
  
  { name:'French', image: 'assets/images/flags/fr.svg' },
  { name:'Arabe', image: 'assets/images/flags/tr.svg' }
]
public flag:any;

products: Product[];
show =false ;
indexProduct: number;
shoppingCartItems: CartItem[] = [];
wishlistItems  :   Product[] = [];
// tslint:disable-next-line:quotemark
role= "" ;
tokenn
public slides = [
  { title: 'Huge sale', subtitle: 'Up to 70%', image: 'assets/images/carousel/banner1.jpg' },
  { title: 'Biggest discount', subtitle: 'Check the promotion', image: 'assets/images/carousel/banner2.jpg' },
  { title: 'Biggest sale', subtitle: 'Dont miss it', image: 'assets/images/carousel/banner3.jpg' },
  { title: 'Our best products', subtitle: 'Special selection', image: 'assets/images/carousel/banner4.jpg' },
  { title: 'Massive sale', subtitle: 'Only for today', image: 'assets/images/carousel/banner5.jpg' }
];

// tslint:disable-next-line:max-line-length
constructor(private productService: ProductService, private httpClient: HttpClient, private cartService: CartService, private token:TokenStorage) {
 
  this.cartService.getItems().subscribe(shoppingCartItems => this.shoppingCartItems = shoppingCartItems);
  if(token.getToken()!==null){
    this.tokenn=this.token.getToken()

    // tslint:disable-next-line:prefer-const
    var decoded = jwt_decode(this.tokenn);
    console.log("dqsqsdqs"+decoded.aud);
  this.role = decoded.aud
  }
 
 }

ngOnInit() {
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





public changeCurrency(currency){
this.currency = currency;
}
public changeLang(flag){
this.flag = flag;
}
  onUpload(f: NgForm) {
       let user={
        'name':f.value['nom'],
        'prenom': f.value['prenom'],
        'ddn': f.value['ddn'],
        'email': f.value['email'],
        'rs': f.value['RS'],
        'roleName': f.value['role_name'],
        'adresseP': f.value['adresseP'],
        'governorat': f.value['governorat'],
        'delegation': f.value['delegation'],
        'codeP': f.value['codeP'],
        'password':f.value['password'],
        'numtel': f.value['num'],
       }
       console.log(user)
          this.httpClient.post('http://localhost:8080/user/add', user)
       
          .subscribe((response) => {
          
          } );
  }

}
