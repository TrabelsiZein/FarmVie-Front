import { Component, OnInit, Inject } from '@angular/core';
import { Product } from 'src/app/modals/product.model';
import { ActivatedRoute, Router } from '@angular/router';
import { TokenStorage } from '../../shared/services/token-storage.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ProductService } from '../../shared/services/product.service';
import { CartService } from '../../shared/services/cart.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ProductDialogComponent } from '../../shop/products/product-dialog/product-dialog.component';
import { UserModule } from 'src/app/modals/user.module';

@Component({
  selector: 'app-dialoglistinvest',
  templateUrl: './dialoglistinvest.component.html',
  styleUrls: ['./dialoglistinvest.component.css']
})
export class DialoglistinvestComponent implements OnInit {

  public products           :   Product[] = [];
  public counter            :   number = 1;
  public variantImage       :   any = '';
  public selectedColor      :   any = '';
  public selectedSize       :   any = '';
  quantity:string
ui  :userinvest[]
  constructor(private route :ActivatedRoute,private token :TokenStorage,private httpClient: HttpClient,private router: Router, public productsService: ProductService, private cartService: CartService, public dialogRef: MatDialogRef<ProductDialogComponent>, @Inject(MAT_DIALOG_DATA) public product: Product) { }

  ngOnInit() {
    console.log("aaaaaaa")

    let headers = new HttpHeaders({
      'Authorization':this.token.getToken()
    })
    this.httpClient.get('http://localhost:8080/investe/getinveset/'+this.product.idProjet ,{ headers: headers})
       
          .subscribe((response ) => {
this.ui=response as userinvest[]
            console.log("aaaaaaa"+this.ui[0][0] ) 

          } );
       

      

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

     

}
export class userinvest {
0?:Number
1?:String
2?:String


}