import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, NgForm } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Product } from 'src/app/modals/product.model';
import { CartItem } from 'src/app/modals/cart-item';
import { ProductService } from '../../shared/services/product.service';
import { CartService } from '../../shared/services/cart.service';
import { TokenStorage } from '../../shared/services/token-storage.service';

@Component({
  selector: 'app-add-projet',
  templateUrl: './add-projet.component.html',
  styleUrls: ['./add-projet.component.sass']
})
export class AddProjetComponent  {


  irrigation="Oui"
  siege="Oui"
  biologique="Oui"
  typeFinance="Investissement"

     test=1;
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
  { title: 'Huge sale', subtitle: 'Up to 70%', image: 'assets/images/carousel/banner1.jpg' },
  { title: 'Biggest discount', subtitle: 'Check the promotion', image: 'assets/images/carousel/banner2.jpg' },
  { title: 'Biggest sale', subtitle: 'Dont miss it', image: 'assets/images/carousel/banner3.jpg' },
  { title: 'Our best products', subtitle: 'Special selection', image: 'assets/images/carousel/banner4.jpg' },
  { title: 'Massive sale', subtitle: 'Only for today', image: 'assets/images/carousel/banner5.jpg' }
];
tokenn=null;
constructor(private router : Router,private productService: ProductService, private token :TokenStorage,private httpClient: HttpClient, private cartService: CartService) {
  this.cartService.getItems().subscribe(shoppingCartItems => this.shoppingCartItems = shoppingCartItems);
this.tokenn=this.token.getToken()

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
      nomArticle:String
      
       
        selectedFile: File;
        selectedFile2: File;

       
        retrievedImage: any;
       
        base64Data: any;
      
        retrieveResonse: any;
       
        message: string;
       
        imageName: any;
        image :any=[];
         
        public onFileChanged(event) {
      
          this.selectedFile = event.target.files[0];
       
        }
        public onFileChanged2(event) {
      
          this.selectedFile2 = event.target.files[0];
       
        }
        onUpload(f: NgForm) {
          
          console.log(f)

          const uploadImageData = new FormData();
          uploadImageData.append('gevernorat', f.value['gouv']);
          uploadImageData.append('delegation', f.value['ville']);
          uploadImageData.append('superficieE', f.value['superficieE']);
          uploadImageData.append('superficieT', f.value['superficieT']);
          uploadImageData.append('irrigation', f.value['irrigation']);
          uploadImageData.append('siege', f.value['siege']);
          uploadImageData.append('nomProjet', f.value['nom']);
          uploadImageData.append('biologique', f.value['biologique']);
          uploadImageData.append('type', f.value['type']);
          uploadImageData.append('description', f.value['description']);
          uploadImageData.append('montanttotal', f.value['montant']);
          uploadImageData.append('montantMin', f.value['montantM']);

          uploadImageData.append('typeFinance', f.value['typeFinance']);
          uploadImageData.append('photoProjet', this.selectedFile, this.selectedFile.name);

          console.log(uploadImageData)
          let headers = new HttpHeaders({
            'Authorization':this.token.getToken()
          })
          
          this.httpClient.post('http://localhost:8080/projet/add', uploadImageData, { headers: headers})
       
          .subscribe((response) => {
          
          } );
     
  

      //     let headers = new HttpHeaders({
      //       'Authorization':this.token.getToken()
      //     })
      //     this.httpClient.post('http://localhost:8080/projet/add', uploadImageData,{ headers: headers})
       
      //       .subscribe((response) => {
      //         this.router.navigateByUrl('products/:category')       
      //       }
       
      //       );
            
    
       
        }
      
          getImage() {
       
          this.httpClient.get('http://localhost:8080/article/getimage'  )
       
            .subscribe(
       
              res => {
       
                this.image=res;
                console.log(this.image);
    
    
    
    
                 
       
              }
       
            );
       
        }
        delay(ms: number) {
          return new Promise( resolve => setTimeout(resolve, ms) );
      }
       
      }
