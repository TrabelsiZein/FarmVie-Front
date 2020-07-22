import { Component, OnInit, Inject } from '@angular/core';
import { Product } from 'src/app/modals/product.model';
import { ActivatedRoute, Router } from '@angular/router';
import { TokenStorage } from '../../shared/services/token-storage.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CartService } from '../../shared/services/cart.service';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { ProductDialogComponent } from '../../shop/products/product-dialog/product-dialog.component';
import { ProductService } from '../../shared/services/product.service';
import { DialoglistinvestComponent } from '../dialoglistinvest/dialoglistinvest.component';
import { DialogupdateComponent } from '../dialogupdate/dialogupdate.component';

@Component({
  selector: 'app-dialogdetaill',
  templateUrl: './dialogdetaill.component.html',
  styleUrls: ['./dialogdetaill.component.sass']
})
export class DialogdetaillComponent implements OnInit {

  public products           :   Product[] = [];
  public counter            :   number = 1;
  public variantImage       :   any = '';
  public selectedColor      :   any = '';
  public selectedSize       :   any = '';
  quantity:string

  constructor(private dialog: MatDialog,private route :ActivatedRoute,private token :TokenStorage,private httpClient: HttpClient,private router: Router, public productsService: ProductService, private cartService: CartService, public dialogRef: MatDialogRef<ProductDialogComponent>, @Inject(MAT_DIALOG_DATA) public product: Product) { }

  ngOnInit() {
    this.productsService.products2().subscribe(product => 
      this.products = product
      
      
      );

      console.log("ddddd"+this.product.description)

       

      

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
      
   buyNow = o => {
    o as Product
    let dialogRef = this.dialog.open(DialoglistinvestComponent, {
      data: o,
      panelClass: 'product-dialog',
  });
  dialogRef.afterClosed().subscribe(product => {
    if(product){
      this.router.navigate(['/products', o.id, o.nomProjet]);
    }
  });
     
   
   
        };
        update = o => {
          o as Product
          let dialogRef = this.dialog.open(DialogupdateComponent, {
            data: o,
            panelClass: 'product-dialog',
        });
        dialogRef.afterClosed().subscribe(product => {
          if(product){
            this.router.navigate(['/products', o.id, o.nomProjet]);
          }
        });
           
         
         
              };

}
