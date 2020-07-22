import { Component, OnInit } from '@angular/core';
import { CartService } from '../../shared/services/cart.service';
import { Observable, of } from 'rxjs';
import { CartItem } from 'src/app/modals/cart-item';
import { ProductService } from '../../shared/services/product.service';
import { ActivatedRoute } from '@angular/router';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { TokenStorage } from '../../shared/services/token-storage.service';
import { Product } from 'src/app/modals/product.model';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.sass']
})
export class CheckoutComponent implements OnInit {

  public cartItems: Observable<CartItem[]> = of([]);
  public buyProducts: CartItem[] = [];

  amount: number;
  payments: string[] = ['Create an Account?', 'Flat Rate'];
  paymantWay: string[] = ['Direct Bank Transfer', 'PayPal'];
product:Product
montantreste
montantMin="0"
  constructor(private token :TokenStorage,private httpClient: HttpClient,private cartService: CartService, public productService: ProductService,private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = +params['id'];
      let headers = new HttpHeaders({
        'Authorization':this.token.getToken()
      })
      this.httpClient.get('http://localhost:8080/projet/getArticles2/'+id,{ headers: headers})
   
        .subscribe((response) => {
          this.product=response as Product
          this.montantreste=this.product.montantTotal-this.product.montantRecu
          console.log(this.product)
         }
        );    });
    this.cartItems = this.cartService.getItems();
    this.cartItems.subscribe(products => this.buyProducts = products);
    this.getTotal().subscribe(amount => this.amount = amount);
  }

  public getTotal(): Observable<number> {
    return this.cartService.getTotalAmount();
    }
    public addToCart(product: Product, quantity) {
      if (quantity == 0) return false;
      const uploadImageData = new FormData();
      console.log(product.idProjet+this.montantMin)
             uploadImageData.append('quantity', this.montantMin);
             uploadImageData.append('id',""+ product.idProjet);
  
      let headers = new HttpHeaders({
        'Authorization':this.token.getToken()
      })
      this.httpClient.post('http://localhost:8080/investe/add', uploadImageData,{ headers: headers})
   
        .subscribe((response) => {
         }
        );
        location.reload()
   
    }
}
