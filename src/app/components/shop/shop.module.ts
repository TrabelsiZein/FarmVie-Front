import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MainCarouselComponent } from './main-carousel/main-carousel.component';
import { PriceComponent } from './products/price/price.component';
import { ProductsComponent } from './products/products.component';
import { ProductComponent } from './products/product/product.component';
import { ProductDetailsComponent } from './products/product-details/product-details.component';
import { ProductDialogComponent } from './products/product-dialog/product-dialog.component';
import { ProductLeftSidebarComponent } from './products/product-left-sidebar/product-left-sidebar.component';
import { ProductVerticalComponent } from './products/product-vertical/product-vertical.component';
import { CommonModule } from '@angular/common';
import { ShopRoutingModule } from './shop-routing.module';
import { SharedModule } from '../shared/shared.module';
import { SwiperModule } from 'ngx-swiper-wrapper';
import { FlexLayoutModule } from '@angular/flex-layout';
import {NgxPaginationModule} from 'ngx-pagination';
import { HomeTwoComponent } from './home-two/home-two.component';
import { HomeThreeComponent } from './home-three/home-three.component';
// Import the library
import { NgxImageZoomModule } from 'ngx-image-zoom';
import {ProgressBarModule} from "angular-progress-bar"

import { ProductCarouselComponent } from './../shop/home/product-carousel/product-carousel.component';
import { from } from 'rxjs';
import { ProductCarouselTwoComponent } from './home-two/product-carousel-two/product-carousel-two.component';
import { ProductCarouselThreeComponent } from './home-three/product-carousel-three/product-carousel-three.component';
import { BrandsComponent } from './widgets/brands/brands.component';
import { CategoriesComponent } from './widgets/categories/categories.component';
import { PopularProductsComponent } from './widgets/popular-products/popular-products.component';
import { HomeFourComponent } from './home-four/home-four.component';
import { ProductZoomComponent } from './products/product-details/product-zoom/product-zoom.component';
import { HomeFiveComponent } from './home-five/home-five.component';
import { ContactComponent } from '../pages/contact/contact.component';
import { FaqComponent } from '../pages/faq/faq.component';
import { AboutUsComponent } from '../pages/about-us/about-us.component';
import { AddProjetComponent } from './add-projet/add-projet.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { MyAccountComponent } from '../pages/my-account/my-account.component';
import { ProfilComponent } from './profil/profil.component';
import { CheckoutComponent } from '../pages/checkout/checkout.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { DataTablesModule } from 'angular-datatables';
 
@NgModule({
  declarations: [
    HomeComponent,
    MainCarouselComponent,
    ProductsComponent,
    PriceComponent,
    ProductComponent,
    ProductDetailsComponent,
    ProductDialogComponent,
    ProductLeftSidebarComponent,
    ProductVerticalComponent,
    HomeTwoComponent,
    HomeThreeComponent,

    ProductCarouselComponent,
    ProductCarouselTwoComponent,
    ProductCarouselThreeComponent,
    BrandsComponent,
    CategoriesComponent,
    PopularProductsComponent,
    HomeFourComponent,
    ContactComponent,
    ProductZoomComponent,
    HomeFiveComponent,
    FaqComponent,
    AboutUsComponent,
    AddProjetComponent,
    InscriptionComponent,
    CheckoutComponent,
    MyAccountComponent,
    ProfilComponent,
     
  ],
  imports: [
    CommonModule,
    ShopRoutingModule,
    ProgressBarModule,
    SharedModule,
    SwiperModule,
    FormsModule,
    DataTablesModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    NgxPaginationModule,
    NgxImageZoomModule.forRoot(), // <-- Add this line
    BrowserAnimationsModule,
    MatProgressBarModule
  ],
  exports: [
    ProductDialogComponent,
    ProductZoomComponent

  ],

  entryComponents:[
    ProductDialogComponent,
    ProductZoomComponent
  ],
})

export class ShopModule { }
