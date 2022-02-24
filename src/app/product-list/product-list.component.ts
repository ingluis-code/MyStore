import { Component, OnInit } from '@angular/core';
import { products } from '../produts';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products = products;

  constructor() { }

  ngOnInit(): void {
  }

  share() {
    window.alert('The product has been shared!');
  }

  /*
   Defina el comportamiento que sucede cuando el usuario hace clic en el botón. 
   El padre, ProductListComponent—no ProductAlertsComponentel— actúa cuando el hijo 
   plantea el evento. En product-list.component.ts, defina un metodo onNotify(),
   similar al metodo share().
  */
   onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }

}
