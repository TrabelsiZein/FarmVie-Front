import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/modals/product.model';
import { ProductService } from '../../shared/services/product.service';
import { CartItem } from 'src/app/modals/cart-item';
import { CartService } from '../../shared/services/cart.service';



@Component({
  selector: 'app-home-four',
  templateUrl: './home-four.component.html',
  styleUrls: ['./home-four.component.sass']
})
export class HomeFourComponent implements OnInit {
  public banners = [];
  public currencies = ['USD', 'EUR'];
  public currency:any;
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
    { title: ' ', subtitle: '', image: '/assets/images/carousel/fv covers-01.jpg' },
    { title: '', subtitle: ' ', image: '/assets/images/carousel/fv covers-02.jpg' },
    { title: '', subtitle: '', image: '/assets/images/carousel/fv covers-03.jpg' },
    { title: '', subtitle: '', image: '/assets/images/carousel/fv covers-04.jpg' },
    { title: '', subtitle: '', image: '/assets/images/carousel/fv covers-05.jpg' }
  ];

  constructor(private productService: ProductService,  private cartService: CartService) {
    this.cartService.getItems().subscribe(shoppingCartItems => this.shoppingCartItems = shoppingCartItems);

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

}
