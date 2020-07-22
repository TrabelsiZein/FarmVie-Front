import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/modals/product.model';
import { CartService } from '../services/cart.service';
import { Observable } from 'rxjs';
import { CartItem } from 'src/app/modals/cart-item';
import { ProductService } from '../services/product.service';
import { UserService } from '../services/user.service';
import { UserModule } from 'src/app/modals/user.module';
import { TokenStorage } from '../services/token-storage.service';

@Component({
  selector: 'app-shopping-widgets',
  templateUrl: './shopping-widgets.component.html',
  styleUrls: ['./shopping-widgets.component.sass']
})
export class ShoppingWidgetsComponent implements OnInit {

  products: Product[];
  indexProduct: number;
user:UserModule
i=1
argent
  public sidenavMenuItems:Array<any>;

  @Input() shoppingCartItems: CartItem[] = [];

  constructor(private token:TokenStorage,private cartService: CartService, public productService: ProductService,private userservice:UserService) { }

  ngOnInit() {
    this.getTotal()
  }
  public updateCurrency(curr) {
    this.productService.currency = curr;
  }


  public removeItem(item: CartItem) {
    this.cartService.removeFromCart(item);
  }

  public getTotal():number {
if((this.i==1 )&&(this.token.getToken())){
  
      this.userservice.getuser().subscribe(res => {

   this.user=res as UserModule;
   if(this.user){
    this.argent= this.user.argent;

this.i=2

   }
   

       })
       return -1

       

      
   

 



      }
      
  
  }
  delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
  }
}
