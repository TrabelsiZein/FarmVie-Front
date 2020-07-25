import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/modals/product.model';
import { ProductService } from 'src/app/components/shared/services/product.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { CartService } from 'src/app/components/shared/services/cart.service';
import { SwiperDirective, SwiperConfigInterface } from 'ngx-swiper-wrapper';
import { ProductZoomComponent } from './product-zoom/product-zoom.component';
import { TokenStorage } from 'src/app/components/shared/services/token-storage.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  public config: SwiperConfigInterface={};
  @Output() onOpenProductDialog: EventEmitter<any> = new EventEmitter();

  @ViewChild('zoomViewer', { static: true }) zoomViewer;
  @ViewChild(SwiperDirective, { static: true }) directiveRef: SwiperDirective;

  public product            :   Product = {};
  public products           :   Product[] = [];
  imagebig:string=""
  imagesmall:string=""
  test:string
  public image: any;
  public zoomImage: any;
  public Actualites ;
  public counter            :   number = 1;

  index: number;
  bigProductImageIndex = 0;
toknn=null
  constructor(private token :TokenStorage,private sanitizer: DomSanitizer,private httpClient: HttpClient,private route: ActivatedRoute, public productsService: ProductService, public dialog: MatDialog, private router: Router, private cartService: CartService) {
    
    this.route.params.subscribe(params => {
      const id = +params['id'];
      this.toknn=this.token.getToken()
      
      this.httpClient.get('http://localhost:8080/projet/getArticles2/'+id )
   
        .subscribe((response) => {
          this.product=response as Product
          console.log(this.product+"azz")
          this.imagebig=this.product.photoProjet
          this.imagesmall=this.product.sol
         }


         
        );    
        let headers = new HttpHeaders({
          'Authorization': this.token.getToken()
        })

        console.log(id)
        this.httpClient.get('http://localhost:8080/actualite/getall/'+id+'/'+11, { headers: headers })
        .subscribe(res => {
          console.log('res')
          console.log(res)
          this.Actualites = res
        })
        console.log("azazaz"+this.Actualites[0][0])

      });


   }

  ngOnInit() {
    this.productsService.getProducts().subscribe(product => this.products = product);


    this.getRelatedProducts();
  }


  ngAfterViewInit() {
    this.config = {
      observer: true,
      slidesPerView: 3,
      spaceBetween: 10,
      keyboard: true,
      navigation: true,
      pagination: false,
      grabCursor: true,
      loop: false,
      preloadImages: false,
      lazy: true,
      breakpoints: {
        480: {
          slidesPerView: 1
        },
        740: {
          slidesPerView: 2,
        },
        960: {
          slidesPerView: 3,
        },
        1280: {
          slidesPerView: 3,
        },


      }
    }
  }


  public openProductDialog(product, bigProductImageIndex) {
    let dialogRef = this.dialog.open(ProductZoomComponent, {
      data: {product, index: bigProductImageIndex },
      panelClass: 'product-dialog',
    });
    dialogRef.afterClosed().subscribe(product => {
      if (product) {
        this.router.navigate(['/products', product.id, product.name]);
      }
    });
  }


  public selectImage() {
    this.test=this.imagebig
    this.imagebig=this.imagesmall
    this.imagesmall=this.test
     
  }




public increment() {
  this.counter += 1;
}

public decrement() {
  if(this.counter >1){
     this.counter -= 1;
  }
}

getRelatedProducts() {
  this.productsService.getProducts()
  .subscribe(
    (product: Product[]) => {
      this.products = product
    });
}

  // Add to cart
  public addToCart(product: Product, quantity) {
    if (quantity == 0) return false;
    this.cartService.addToCart(product, parseInt(quantity));
  }

   // Add to cart
   public buyNow(product: Product, quantity) {
 
 if(this.toknn==null){
  this.router.navigate(['/pages/my-account']);

 }
 else
    this.router.navigate(['/checkout',product.idProjet]);
 }



 public onMouseMove(e){
  if(window.innerWidth >= 1280){
    var image, offsetX, offsetY, x, y, zoomer;
    image = e.currentTarget;
    offsetX = e.offsetX;
    offsetY = e.offsetY;
    x = offsetX/image.offsetWidth*100;
    y = offsetY/image.offsetHeight*100;
    zoomer = this.zoomViewer.nativeElement.children[0];
    if(zoomer){
      zoomer.style.backgroundPosition = x + '% ' + y + '%';
      zoomer.style.display = "block";
      zoomer.style.height = image.height + 'px';
      zoomer.style.width = image.width + 'px';
    }
  }
}

public onMouseLeave(event){
  this.zoomViewer.nativeElement.children[0].style.display = "none";
}

public openZoomViewer(){
  this.dialog.open(ProductZoomComponent, {
    data: this.zoomImage,
    panelClass: 'zoom-dialog'
  });
}

public getSantizeUrl(url: string) {
  return this.sanitizer.bypassSecurityTrustUrl(url);
}

}