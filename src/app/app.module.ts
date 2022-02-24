import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProductAlertsComponent } from './product-alerts/product-alerts.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartComponent } from './cart/cart.component';

/*
En app.module.ts, importe HttpClientModule desde el paquete en la parte superior del archivo
 con las demás importaciones. Como hay una serie de otras importaciones, este fragmento de
  código las omite por brevedad. Asegúrese de dejar las importaciones existentes en 
  su lugar.@angular/common/http

*/
import { HttpClientModule } from '@angular/common/http';

/*Para hacer uso de formularios reactivos [formGroup]*/
import { ReactiveFormsModule } from '@angular/forms';

import { ShippingComponent } from './shipping/shipping.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    TopBarComponent,
    ProductAlertsComponent,
    ProductDetailsComponent,
    CartComponent,
    ShippingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
