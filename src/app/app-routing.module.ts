import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { HomeComponent } from './components/shop/home/home.component';
import { DemoComponent } from './components/demo/demo.component';
import { HomeFourComponent } from './components/shop/home-four/home-four.component';
import { NavadminComponent } from './components/admin/navadmin/navadmin.component';
import { ListuserComponent } from './components/admin/listuser/listuser.component';
import { ListprojetComponent } from './components/admin/listprojet/listprojet.component';
import { UserService  as AuthGuard } from './components/shared/services/user.service';
import { ListcontactComponent } from './components/admin/listcontact/listcontact.component';
import { DialogdetaillComponent } from './components/admin/dialogdetaill/dialogdetaill.component';
import { DialoglistinvestComponent } from './components/admin/dialoglistinvest/dialoglistinvest.component';
import { DialogupdateComponent } from './components/admin/dialogupdate/dialogupdate.component';
import { IngenieurComponent } from './components/ingenieur/ingenieur.component';
import { ListeAttentesComponent } from './components/ingenieur/liste-attentes/liste-attentes.component';
import { ListeAcceptesComponent } from './components/ingenieur/liste-acceptes/liste-acceptes.component';
import { DataValidationComponent } from './components/ingenieur/data-validation/data-validation.component';



const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '',
     pathMatch: 'full'
  },
  {
    path: 'admin',
    component: NavadminComponent,canActivate: [AuthGuard] 
  }, 
  {
    path: 'datavalidation/:idP',
    component: DataValidationComponent,canActivate: [AuthGuard] 
  }, 
  {
    path: 'listeattentes',
    component: ListeAttentesComponent,canActivate: [AuthGuard] 
  }, 
  {
    path: 'ingenieur',
    component: IngenieurComponent,canActivate: [AuthGuard] 
  },
  {
    path: 'detailadmin',
    component: DialogdetaillComponent,canActivate: [AuthGuard] 
  },
  {
    path: 'listinvest',
    component: DialoglistinvestComponent,canActivate: [AuthGuard] 
  },
  {
    path: 'updateadmin',
    component: DialogupdateComponent,canActivate: [AuthGuard] 
  },
  {
    path: 'listuser',
    component: ListuserComponent,canActivate: [AuthGuard] 
  },
  {
    path: 'listprojet',
    component: ListprojetComponent,canActivate: [AuthGuard] 
  },
  {
    path: 'listcontact',
    component: ListcontactComponent,canActivate: [AuthGuard] 
  },
  {
    path: 'listacceptes',
    component: ListeAcceptesComponent,canActivate: [AuthGuard] 
  },
  {
    path: '',
    component: HomeFourComponent
  },
  {
    path: '',
    component: HomeFourComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./components/shop/shop.module').then(m => m.ShopModule)
      },
      {
        path: 'pages',
        loadChildren: () => import('./components/pages/pages.module').then(m => m.PagesModule)

      },
      {
        path: 'blog',
        loadChildren: () => import('./components/blog/blog.module').then(m => m.BlogModule)
      },
    ]
  },
  

  {
    path: '**',
    redirectTo: 'home/one'
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
