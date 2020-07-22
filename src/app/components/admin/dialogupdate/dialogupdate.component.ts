import { Component, OnInit, Inject } from '@angular/core';
import { Product } from 'src/app/modals/product.model';
import { ActivatedRoute, Router } from '@angular/router';
import { TokenStorage } from '../../shared/services/token-storage.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ProductService } from '../../shared/services/product.service';
import { CartService } from '../../shared/services/cart.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ProductDialogComponent } from '../../shop/products/product-dialog/product-dialog.component';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-dialogupdate',
  templateUrl: './dialogupdate.component.html',
  styleUrls: ['./dialogupdate.component.sass']
})
export class DialogupdateComponent implements OnInit {

  public products           :   Product[] = [];
  public counter            :   number = 1;
  public variantImage       :   any = '';
  public selectedColor      :   any = '';
  public selectedSize       :   any = '';
  quantity:string
  f:NgForm
  test=1

  gevernorat
  delegation
  surperfaceE
  surperfaceT
  irrigation
  siege
  nomProjet
  type
  biologique
  description
  montanttotal
  montantMin
  typeFinance
  constructor(private route :ActivatedRoute,private token :TokenStorage,private httpClient: HttpClient,private router: Router, public productsService: ProductService, private cartService: CartService, public dialogRef: MatDialogRef<ProductDialogComponent>, @Inject(MAT_DIALOG_DATA) public product: Product) { }

  ngOnInit() {
    this.productsService.products2().subscribe(product => 
      this.products = product

      
      
      );
       
      this.gevernorat=this.product.gevernorat
this.delegation=this.product.delegation
this.surperfaceE=this.product.superficieE
this.surperfaceT=this.product.superficieT
this.irrigation=this.product.irrigation
this.siege=this.product.siege
this.nomProjet=this.product.nomProjet
this.type=this.product.type
this.biologique=this.product.biologique
this.description=this.product.description
this.montanttotal=this.product.montantTotal
this.montantMin=this.product.montantMin
this.typeFinance=this.product.typeFinance


      

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
   onUpload(f: NgForm) {
    this.test=2;

 
    const uploadImageData = new FormData();
 console.log(f.value);
 uploadImageData.append('gevernorat', f.value['gevernorat']);
 uploadImageData.append('delegation', f.value['delegation']);
 uploadImageData.append('superficieE', f.value['surperfaceE']);
 uploadImageData.append('superficieT', f.value['superficieT']);
 uploadImageData.append('irrigation', f.value['irrigation']);

 uploadImageData.append('siege', f.value['siege']);
  uploadImageData.append('nomProjet', f.value['nomProjet']);
 uploadImageData.append('biologique', f.value['biologique']);
 uploadImageData.append('type', f.value['type']);
 uploadImageData.append('description', f.value['description']);
 uploadImageData.append('montanttotal', f.value['montanttotal']);
 uploadImageData.append('montantMin', f.value['montantMin']);

 uploadImageData.append('typeFinance', f.value['typeFinance']);
  console.log(f.value['irrigation'])

 let headers = new HttpHeaders({
   'Authorization':this.token.getToken()
 })
 this.httpClient.post('http://localhost:8080/projet/update/'+this.product.idProjet, uploadImageData,{ headers: headers})

   .subscribe((response) => {
    }

   );
     
      

 
  }


}