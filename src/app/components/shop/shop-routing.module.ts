import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductDetailsComponent } from './products/product-details/product-details.component';
import { ProductLeftSidebarComponent } from './products/product-left-sidebar/product-left-sidebar.component';
import { HomeTwoComponent } from './home-two/home-two.component';
import { HomeThreeComponent } from './home-three/home-three.component';
import { HomeFourComponent } from './home-four/home-four.component';
import { HomeFiveComponent } from './home-five/home-five.component';
import { ContactComponent } from '../pages/contact/contact.component';
import { FaqComponent } from '../pages/faq/faq.component';
import { AboutUsComponent } from '../pages/about-us/about-us.component';
import { AddProjetComponent } from './add-projet/add-projet.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { MyAccountComponent } from '../pages/my-account/my-account.component';
import { ProfilComponent } from './profil/profil.component';
import { CheckoutComponent } from '../pages/checkout/checkout.component';
import { TokenStorage as AuthGuard } from '../shared/services/token-storage.service';
 

// Routes
const routes: Routes = [
   { path: 'one', component: HomeComponent },
  { path: 'two', component: HomeTwoComponent },
  { path: 'three', component: HomeThreeComponent },
  { path: '', component: HomeFourComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'faq', component: FaqComponent },
  { path: 'about', component: AboutUsComponent },
  { path: 'addd', component: AddProjetComponent,  canActivate: [AuthGuard] 
},
  { path: 'profile', component: ProfilComponent ,
  canActivate: [AuthGuard] 

},
 

  { path: 'inscrit', component: InscriptionComponent },
  { path: 'pages/my-account', component: MyAccountComponent },
  { path: 'checkout/:id', component: CheckoutComponent },

  { path: 'five', component: HomeFiveComponent },
  { path: 'home/product/:id', component: ProductDetailsComponent ,  
},

  { path: 'products/:category', component: ProductLeftSidebarComponent },
  { path: 'product/:id', component: ProductDetailsComponent ,   
}


];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShopRoutingModule { }
