import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DemoComponent } from './components/demo/demo.component';
import { NgxSpinnerModule } from "ngx-spinner";
import { NgxImgZoomModule } from 'ngx-img-zoom';
import {ProgressBarModule} from "angular-progress-bar"
import { DataTablesModule } from 'angular-datatables';


import { MainComponent } from './components/main/main.component';



import { AppRoutingModule } from './app-routing.module';
import { ShopModule } from './components/shop/shop.module';
import { SharedModule } from './components/shared/shared.module';
import { TokenStorage } from './components/shared/services/token-storage.service';
import { AuthService } from './components/shared/services/auth-service.service';
import { UserService } from './components/shared/services/user.service';
import { NavadminComponent } from './components/admin/navadmin/navadmin.component';
import { ListuserComponent } from './components/admin/listuser/listuser.component';
import { ListprojetComponent } from './components/admin/listprojet/listprojet.component';
import { ListcontactComponent } from './components/admin/listcontact/listcontact.component';
import { DialogdetaillComponent } from './components/admin/dialogdetaill/dialogdetaill.component';
import { DialoglistinvestComponent } from './components/admin/dialoglistinvest/dialoglistinvest.component';
import { DialogupdateComponent } from './components/admin/dialogupdate/dialogupdate.component';
import { IngenieurComponent } from './components/ingenieur/ingenieur.component';
import { ListeAttentesComponent } from './components/ingenieur/liste-attentes/liste-attentes.component';
import { ListeAcceptesComponent } from './components/ingenieur/liste-acceptes/liste-acceptes.component';
 import { DataValidationComponent } from './components/ingenieur/data-validation/data-validation.component';
   

@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    MainComponent,
    NavadminComponent,
    ListuserComponent,
    ListprojetComponent,
    ListcontactComponent,
    DialogdetaillComponent,
    DialoglistinvestComponent,
    DialogupdateComponent,
    IngenieurComponent,
    ListeAttentesComponent,
    ListeAcceptesComponent,
     DataValidationComponent
     
     



  ],
  imports: [
    NgxSpinnerModule,
    BrowserModule,
    SharedModule,
    ShopModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    NgxImgZoomModule,
    ProgressBarModule,
    DataTablesModule
  ],
  providers: [TokenStorage,AuthService,UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
