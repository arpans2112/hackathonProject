import { Component } from '@angular/core';
import { IProduct } from './products';
import { ProductService } from './products.service';
import { Http , Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'my-app',
  template: `<ul>
  <li><a [routerLink] = "['/Product']">Product</a></li>
  <li><a [routerLink] = "['/Inventory']">Inventory</a></li>
 </ul>
  <router-outlet></router-outlet>`,
  providers: [ProductService]
})

export  class  AppComponent  {
   name = 'Arpan';
   iproducts: IProduct[];
   constructor(private _product: ProductService) {
   }


}