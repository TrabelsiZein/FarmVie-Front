import { Component, OnInit, ViewChild } from '@angular/core';
 import { Product } from 'src/app/modals/product.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TokenStorage } from '../../shared/services/token-storage.service';
import { Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { ProductDialogComponent } from '../../shop/products/product-dialog/product-dialog.component';
 
import { UserModule } from '../../../modals/user.module';
import { filter } from 'rxjs/operators';
import { DialoglistinvestComponent } from '../../admin/dialoglistinvest/dialoglistinvest.component';
import { DialogdetaillComponent } from '../../admin/dialogdetaill/dialogdetaill.component';
import * as jwt_decode from 'jwt-decode';
import { isNgTemplate } from '@angular/compiler';
import { AddProjetComponent } from '../../shop/add-projet/add-projet.component';
import { MatDialog } from '@angular/material/dialog';
import { DataValidationComponent } from '../data-validation/data-validation.component';
import { Subject } from 'rxjs';
import { DataTableDirective } from 'angular-datatables';
  @Component({
  selector: 'app-liste-attentes',
  templateUrl: './liste-attentes.component.html',
  styleUrls: ['./liste-attentes.component.css']
})
export class ListeAttentesComponent implements OnInit {
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
  tokenn
  id
   title = 'datatables';

  dtOptions: any = {};
  @ViewChild(DataTableDirective, {static: false})
  datatableElement: DataTableDirective;
 
  constructor(private dialog: MatDialog, private sanitizer: DomSanitizer, private httpClient: HttpClient, private token: TokenStorage, private router: Router) {

    this.tokenn=this.token.getToken()
    var decoded = jwt_decode(this.tokenn); 
    this.id=decoded.sub
  }


  onChange(newVal) {

    this.valueIng = newVal
  }
 
 
 
  ngOnInit() {
// We need to call the $.fn.dataTable like this because DataTables typings do not have the "ext" property
$.fn['dataTable'].ext.search.push((settings, data, dataIndex) => {
   
});

 
    this.dtOptions = {
      paging:true,
      pagingType: 'full_numbers',
      pageLength: 5,
      processing: true,
      dom: 'Bfrtip',
      // Configure the buttons
      buttons: [
        'columnsToggle',
        'colvis',
        'copy',
        'print',
        'excel',
        {
          text: 'Some button',
          key: '1',
          action: function (e, dt, node, config) {
            alert('Button activated');
          }
        }
      ]   };
  
 
    this.load()
 
  }
  
  load = () => {
    let headers = new HttpHeaders({
      'Authorization': this.token.getToken()
    })
   

      this.sub = this.httpClient.get('http://localhost:8080/projet/getProjetAttenteIng/'+this.id+'/affecte', { headers: headers })

      .subscribe(res => {
        this.products = res as Array<Product>;
        this.products2 = this.products
        console.log("fsddddddddddddddddddddddddddddddd")

        console.log(res)
      })
    


 
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
    const dialogRef = this.dialog.open(AddProjetComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  
    o as Product
    console.log(o.idProjet)
    console.log(this.valueIng)
    let headers = new HttpHeaders({
      'Authorization':this.token.getToken()
    })
    this.httpClient.post('http://localhost:8080/projet/updateIng/'+o.idProjet+'/'+o.ingenieur+'/accepte',null, { headers: headers })
       
    .subscribe(
      data => console.log('success', data),
      error => console.log('oops', error)
     
    );
    // location.reload()
    // this.router.navigateByUrl('/listeattentes');

    console.log(this.products2)
    let i = 0
    this.products2.forEach(element => {
      if(element.idProjet == o.idProjet)
      this.products2. splice(i, 1);
      i++
    });
    console.log(this.products2)

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
  openDialog = o => {
    o as Product
    let dialogRef = this.dialog.open(DataValidationComponent, {
      data:  { idP: o.idProjet },
      panelClass: 'product-dialog',
    });
    // this.router.navigate(['/datavalidation', o.idProjet]);
    dialogRef.afterClosed().subscribe(product => {
      console.log("zeb")

        // this.router.navigate(['/datavalidation', o.idProjet]);
      
    });



  };
  
  
  
  // {
  //   o as Product
  //   console.log(o.idProjet)

   
  //   let dialogRef = this.dialog.open(DataValidationComponent, {
  //     data: o,
  //    });
  //   dialogRef.afterClosed().subscribe(product => {
  //     if (product) {
  //       console.log("nam")
  //       console.log(o.id)

  //     }

  

  //   });



  // };

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
  refuser = o => {
    o as Product
    console.log(o.idProjet)
    console.log(this.valueIng)
    let headers = new HttpHeaders({
      'Authorization':this.token.getToken()
    })
    this.httpClient.post('http://localhost:8080/projet/updateIng/'+o.idProjet+'/'+o.ingenieur+'/refuse',null, { headers: headers })
       
    .subscribe(
      data => console.log('success', data),
      error => console.log('oops', error)
     
    );
    // location.reload()
    // this.router.navigateByUrl('/listeattentes');

    console.log(this.products2)
    let i = 0
    this.products2.forEach(element => {
      if(element.idProjet == o.idProjet)
      this.products2. splice(i, 1);
      i++
    });
    console.log(this.products2)


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

  ngOnDestroy(): void {
    // We remove the last function in the global ext search array so we do not add the fn each time the component is drawn
    // /!\ This is not the ideal solution as other components may add other search function in this array, so be careful when
    // handling this global variable
    $.fn['dataTable'].ext.search.pop();
  }
}
