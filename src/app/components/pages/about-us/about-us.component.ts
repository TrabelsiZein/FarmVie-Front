import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/modals/product.model';
import { CartItem } from 'src/app/modals/cart-item';
import { ProductService } from '../../shared/services/product.service';
import { CartService } from '../../shared/services/cart.service';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.sass']
})
 
export class AboutUsComponent implements OnInit {
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
    { title: 'Huge sale', subtitle: 'Up to 70%', image: 'assets/images/carousel/banner1.png' },
    { title: 'Biggest discount', subtitle: 'Check the promotion', image: 'assets/images/carousel/banner2.png' },
    { title: 'Biggest sale', subtitle: 'Dont miss it', image: 'assets/images/carousel/banner3.png' },
    { title: 'Our best products', subtitle: 'Special selection', image: 'assets/images/carousel/banner4.png' },
    { title: 'Massive sale', subtitle: 'Only for today', image: 'assets/images/carousel/banner5.png' }
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