import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/modals/product.model';
import { CartItem } from 'src/app/modals/cart-item';
import { ProductService } from '../../shared/services/product.service';
import { CartService } from '../../shared/services/cart.service';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
 
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.sass']
})

export class ContactComponent implements OnInit {
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
  message
  name
  email
  public slides = [
    { title: 'Huge sale', subtitle: 'Up to 70%', image: 'assets/images/carousel/banner1.jpg' },
    { title: 'Biggest discount', subtitle: 'Check the promotion', image: 'assets/images/carousel/banner2.jpg' },
    { title: 'Biggest sale', subtitle: 'Dont miss it', image: 'assets/images/carousel/banner3.jpg' },
    { title: 'Our best products', subtitle: 'Special selection', image: 'assets/images/carousel/banner4.jpg' },
    { title: 'Massive sale', subtitle: 'Only for today', image: 'assets/images/carousel/banner5.jpg' }
  ];

  constructor(public snackBar: MatSnackBar,private productService: ProductService,  private cartService: CartService,private httpClient: HttpClient) {
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

onUpload(f:NgForm){
  const uploadImageData = new FormData();
  uploadImageData.append("name",f.value['name'])
  uploadImageData.append("email",f.value['email'])
  uploadImageData.append("subject",f.value['subject'])
  uploadImageData.append("description",f.value['content'])
  this.httpClient.post('http://localhost:8080/contact/add', uploadImageData)
       
  // .subscribe((response) => {
    
  // }

  // );
  f.resetForm();
  // f.name["name"]="";
  this.message = 'votre message a été envoyé avec succès  ';
    status = 'success';
    this.snackBar.open(this.message, '×', { panelClass: [status], verticalPosition: 'top', duration: 3000 });
    // location.reload()
}



public changeCurrency(currency){
  this.currency = currency;
}
public changeLang(flag){
  this.flag = flag;
}

}
