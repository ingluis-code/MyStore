import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../produts';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css']
})
export class ProductAlertsComponent implements OnInit {

  /*En la ProductAlertsComponentdefinición de clase, defina una propiedad nombrada 
  productcon un decorador. El decorador indica que el valor de la propiedad 
  pasa desde el padre del componente, .@Input()  @Input()ProductListComponent
  El padre es ProductListComponent y  ProductAlertComponent es ele hijo
  */
  //@Input() product!: Product;
  @Input() product: Product | undefined; 


  /*
  Para que el botón Notificarme funcione, el componente secundario debe notificar y 
  pasar los datos al componente principal. Las ProductAlertsComponent necesidades de emitir
  un evento cuando el usuario hace clic en Notificarme y las 
  ProductListComponent necesidades de responder al evento.

  En product-alerts.component.ts, importar Output y EventEmitter desde @angular/core.

  En la clase de componente, defina una propiedad nombrada notify con un decorador y una 
  instancia de . La configuración permite emitir un evento cuando cambia el valor 
  de la propiedad. @Output() EventEmitter() ProductAlertsComponent @Output() ProductAlertsComponent notify
  */

  @Output() notify = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }



}
