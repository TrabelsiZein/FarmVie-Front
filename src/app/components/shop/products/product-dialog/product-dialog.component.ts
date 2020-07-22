import { Component, OnInit, Inject } from '@angular/core';
import { ProductService } from 'src/app/components/shared/services/product.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Product } from 'src/app/modals/product.model';
import { CartService } from 'src/app/components/shared/services/cart.service';
import { Router, ActivatedRoute } from '@angular/router';
import { TokenStorage } from 'src/app/components/shared/services/token-storage.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-product-dialog',
  templateUrl: './product-dialog.component.html',
  styleUrls: ['./product-dialog.component.sass']
})
export class ProductDialogComponent implements OnInit {

  public products           :   Product[] = [];
  public counter            :   number = 1;
  public variantImage       :   any = '';
  public selectedColor      :   any = '';
  public selectedSize       :   any = '';
  quantity:string

  constructor(private route :ActivatedRoute,private token :TokenStorage,private httpClient: HttpClient,private router: Router, public productsService: ProductService, private cartService: CartService, public dialogRef: MatDialogRef<ProductDialogComponent>, @Inject(MAT_DIALOG_DATA) public product: Product) { }

  ngOnInit() {
    this.productsService.products2().subscribe(product => 
      this.products = product
      
      
      );
       

      

  }


  public addToCart(product: Product, quantity) {
    if (quantity == 0) return false;
    const uploadImageData = new FormData();
    console.log(product.idProjet+this.quantity)
           uploadImageData.append('quantity', this.quantity);
           uploadImageData.append('id',""+ product.idProjet);

    let headers = new HttpHeaders({
      'Authorization':this.token.getToken()
    })
    this.httpClient.post('http://localhost:8080/user/investe', uploadImageData,{ headers: headers})
 
      .subscribe((response) => {
       }
      );
 
  }

  public close(): void {
    this.dialogRef.close();
  }

  public increment() {
    this.counter += 1;
  }

  public decrement() {
    if(this.counter >1){
       this.counter -= 1;
    }
  }

     // Add to cart
     public buyNow() {
       if(this.token.getToken()!=null){
      this.router.navigate(['/home/product', this.product.idProjet]);
      this.close();}
      else{
        this.router.navigateByUrl("/pages/my-account");
        this.close();
        
      }
   }

}
