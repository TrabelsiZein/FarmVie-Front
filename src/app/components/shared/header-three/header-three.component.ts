import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/modals/product.model';
import { CartItem } from 'src/app/modals/cart-item';
import { CartService } from '../services/cart.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TokenStorage } from '../services/token-storage.service';

@Component({
  selector: 'app-header-three',
  templateUrl: './header-three.component.html',
  styleUrls: ['./header-three.component.sass']
})
export class HeaderThreeComponent implements OnInit {

  public sidenavMenuItems:Array<any>;

  public currencies = ['USD', 'EUR'];
  public currency:any;
  public flags = [
   
    { name:'French', image: 'assets/images/flags/fr.svg' },
     { name:'Arabe', image: 'assets/images/flags/tr.svg' }
  ]
  public flag:any;

  products: Product[];
argent;
  indexProduct: number;
  shoppingCartItems: CartItem[] = [];


  constructor(private token :TokenStorage,private httpClient: HttpClient,private cartService: CartService) {
    this.cartService.getItems().subscribe(shoppingCartItems => this.shoppingCartItems = shoppingCartItems);
  }

  ngOnInit() {
    this.getargent()
    this.currency = this.currencies[0];
    this.flag = this.flags[0];

  }

  public changeCurrency(currency){
    this.currency = currency;
  }
  public changeLang(flag){
    this.flag = flag;
  }
  public getargent(){
    
    let headers = new HttpHeaders({
      'Authorization':this.token.getToken()
    })
    this.httpClient.get('http://localhost:8080/user/argent',{ headers: headers})
 
      .subscribe((response) => {
        this.argent=response

      }
 
      );
   }

}
