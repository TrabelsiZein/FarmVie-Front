import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class UserModule {
  name?: string;
  prenom?: string;
  photo?: string;
  email?: string;
  numtel?: string;
  roleName?: string;
  governorat?: string;
  argent?:number
  roles ?:role


 }
 export class role {
  id?:number
  name?:string


 }