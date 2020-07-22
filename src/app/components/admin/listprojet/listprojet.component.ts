import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/modals/product.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TokenStorage } from '../../shared/services/token-storage.service';
import { Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { ProductDialogComponent } from '../../shop/products/product-dialog/product-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { DialogdetaillComponent } from '../dialogdetaill/dialogdetaill.component';
import { DialoglistinvestComponent } from '../dialoglistinvest/dialoglistinvest.component';
import { UserModule } from '../../../modals/user.module';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-listprojet',
  templateUrl: './listprojet.component.html',
  styleUrls: ['./listprojet.component.css']
})
export class ListprojetComponent implements OnInit {
  public user: Array<UserModule>;
  public userFilter: Array<UserModule>;
  public userFinal: Array<UserModule> = new Array();
  public products: Array<Product>;
  public products2: Array<Product>;
  public productsfiler: Array<Product>;
  public ingenieur
  private role;
  private sub
  private recherche;
  valueIng
  constructor(private dialog: MatDialog, private sanitizer: DomSanitizer, private httpClient: HttpClient, private token: TokenStorage, private router: Router) {


  }


  onChange(newVal) {

    this.valueIng = newVal
  }

  ngOnInit() {


    this.load()

    // this.userFilter.forEach(element => {
    //   if(element.roleName === "ROLE_INGENIEUR"){
    //     this.userFinal.push(element)
    //   }
    // });

  }
  load = () => {
    let headers = new HttpHeaders({
      'Authorization': this.token.getToken()
    })
    this.sub = this.httpClient.get('http://localhost:8080/projet/getall', { headers: headers })

      .subscribe(res => {
        this.products = res as Array<Product>;
        this.products2 = this.products

        console.log(res)
      })
    this.sub = this.httpClient.get('http://localhost:8080/user/getall', { headers: headers })

      .subscribe(res => {

        this.user = res as Array<UserModule>;
        this.userFilter = this.user

        let yyyy = res as Array<UserModule>
        yyyy.forEach(element => {
          if (element.roleName === "ROLE_INGENIEUR") {
            this.userFinal.push(element)
          }
        });


      });

  };



  removeFromCart = o => {
    o as Product
    let headers = new HttpHeaders({
      'Authorization': this.token.getToken()
    })
    this.httpClient.delete('http://localhost:8080/projet/delete/' + o.idProjet, { headers: headers })

      .subscribe(res => {


      })
    this.products.splice(this.products.indexOf(o), 1);




  };
  accepte = o => {
    o as Product
    let headers = new HttpHeaders({
      'Authorization': this.token.getToken()
    })
    this.httpClient.delete('http://localhost:8080/projet/accepter/' + o.idProjet, { headers: headers })

      .subscribe(res => {


      })
    o.etat = "accepter"



  };
  detaille = o => {
    o as Product
    let dialogRef = this.dialog.open(DialogdetaillComponent, {
      data: o,
      panelClass: 'product-dialog',
    });
    dialogRef.afterClosed().subscribe(product => {
      if (product) {
        this.router.navigate(['/products', o.id, o.nomProjet]);
      }
    });



  };

  affecter = o => {
    o as Product
    //   let dialogRef = this.dialog.open(DialogdetaillComponent, {
    //     data: o,
    //     panelClass: 'product-dialog',
    // });
    // dialogRef.afterClosed().subscribe(product => {
    //   if(product){
    //     this.router.navigate(['/products', o.id, o.nomProjet]);
    //   }
    // });
    console.log(o.idProjet)
    console.log(this.valueIng)
    let headers = new HttpHeaders({
      'Authorization':this.token.getToken()
    })
    this.httpClient.post('http://localhost:8080/projet/updateIng/'+o.idProjet+'/'+this.valueIng+'/affecte',null, { headers: headers })
       
    .subscribe(
      data => console.log('success', data),
      error => console.log('oops', error)
    
    );
    


  };
  listinvest = o => {
    o as Product
    let dialogRef = this.dialog.open(DialoglistinvestComponent, {
      data: o,
      panelClass: 'product-dialog',
    });
    dialogRef.afterClosed().subscribe(product => {
      if (product) {
        this.router.navigate(['/products', o.id, o.nomProjet]);
      }
    });



  };


  filter(event: any) {
    this.recherche = event.target.value
    console.log(this.recherche)
    this.products2 = this.products

    this.productsfiler = this.products2.filter((product: Product) => product.nomProjet.indexOf(this.recherche) == 0 ||
      product.type.indexOf(this.recherche) == 0 || product.etat.indexOf(this.recherche) == 0 || product.emailUser.indexOf(this.recherche) == 0)

    this.products2 = this.productsfiler;





  }

  public getSantizeUrl(url: string) {
    return this.sanitizer.bypassSecurityTrustUrl(url);
  }


}
