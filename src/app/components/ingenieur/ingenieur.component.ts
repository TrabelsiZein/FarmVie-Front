import { Component, OnInit, HostBinding, ElementRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../shared/services/product.service';
import { TokenStorage } from '../shared/services/token-storage.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CartService } from '../shared/services/cart.service';
import { DomSanitizer } from '@angular/platform-browser';
import { MatDialog } from '@angular/material/dialog';
import * as jwt_decode from 'jwt-decode';
import { NgForm } from '@angular/forms';
import { decode } from 'punycode';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import Swal from 'sweetalert2'
 


@Component({
  selector: 'app-ingenieur',
  templateUrl: './ingenieur.component.html',
  styleUrls: ['./ingenieur.component.css']
})
export class IngenieurComponent implements OnInit {

public Actualites ;
public Projects ;
public create = false
public ProjectId ;
public ProjectName ;
public selectedFile: File;
tokenn=null;
public idIng


constructor(private dialog: MatDialog, private sanitizer: DomSanitizer,private router : Router,private productService: ProductService, private token :TokenStorage,private httpClient: HttpClient, private cartService: CartService) {
  this.tokenn=this.token.getToken()
}
  ngOnInit(): void {
    var decoded = jwt_decode(this.tokenn); 
    this.idIng= decoded.sub
    let headers = new HttpHeaders({
      'Authorization': this.token.getToken()
    })
    this.httpClient.get('http://localhost:8080/projet/getProjetAttenteIng2/'+this.idIng+'/publie', { headers: headers })
    .subscribe(res => {
      this.Projects = res
      this.ProjectId = res[0].idProjet
      this.ProjectName = res[0].nomProjet
      this.httpClient.get('http://localhost:8080/actualite/getall/'+this.ProjectId+'/'+this.idIng, { headers: headers })
      .subscribe(res => {
        this.Actualites = res
      })
    })
  }

  public getSantizeUrl(url: string) {
    return this.sanitizer.bypassSecurityTrustUrl(url);
  }

  onClick (){
    this.create = true
  }

  changeTo(id,name){
    this.ProjectId = id
    this.ProjectName = name
    let headers = new HttpHeaders({
      'Authorization': this.token.getToken()
    })
    this.httpClient.get('http://localhost:8080/actualite/getall/'+this.ProjectId+'/'+this.idIng, { headers: headers })
    .subscribe(res => {
      this.Actualites = res
    })
  }

  public onFileChanged(event) {
    this.selectedFile = event.target.files[0];
  }

  onUpload(f: NgForm) {
    if(f.value['type'] == ""){
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Tu doit sélectionner le type de la publication!'
      })
      return
    }
    if(f.value['description'] == ""){
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Tu doit mettre une description pour la publication!'
      })
      return
    }
    if(this.selectedFile == undefined){
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Tu doit mettre une image pour la publication!'
      })
      return
    }
    const uploadImageData = new FormData();
    uploadImageData.append('subject', f.value['type']);
    uploadImageData.append('description', f.value['description']);
    uploadImageData.append('projectId', this.ProjectId);
    uploadImageData.append('projectName', this.ProjectName);
    uploadImageData.append('photo', this.selectedFile);
    uploadImageData.append('ingId', this.idIng);    
    let headers = new HttpHeaders({
      'Authorization':this.token.getToken()
    })    
    this.httpClient.post('http://localhost:8080/actualite/add', uploadImageData, { headers: headers})
    .subscribe(
      result => {
        console.log(result)
        this.create = false
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'La publication a été effectué avec succès ',
          showConfirmButton: false,
          timer: 1500
        })
        this.httpClient.get('http://localhost:8080/actualite/getall/'+this.ProjectId+'/'+this.idIng, { headers: headers })
        .subscribe(
          result => {
          },
          error => {
          })
      },
      error => {
        if(error.status == 200){
          this.create = false
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'La publication a été effectué avec succès ',
            showConfirmButton: false,
            timer: 1500
          })
        } else {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: error.data,
          })
        }
      },)
  }

}