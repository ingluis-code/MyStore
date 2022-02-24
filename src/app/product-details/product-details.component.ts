import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../cart.service';
import { Product, products } from '../produts';

/*En product-details.component.ts, importar ActivatedRoute desde @angular/router y 
  la productsmatriz desde ../products.
*/

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  product: Product | undefined;


  /*
  Inyecte ActivatedRouteen constructor()agregando como argumento dentro
   de los paréntesis del constructor.private route: ActivatedRoute

   ActivatedRoute es específico para cada componente que carga Angular Router.
   ActivatedRoute contiene información sobre la ruta y los parámetros de la ruta.
  */

   /*
   Inyecte el servicio de carrito agregándolo al archivo constructor().
   */

  constructor(private route: ActivatedRoute,
              private cartService: CartService
            ) { }


  /*
  En el ngOnInit() método, extraiga los productIdparámetros de la ruta y 
  busque el producto correspondiente en la products matriz.
  */

  ngOnInit(): void {
      // First get the product id from the current route.
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productId'));// productId es que viene en la ruta
  
    // Find the product that correspond with the id provided in route.
    this.product = products.find(product => product.id === productIdFromRoute);
  }

  /*
  Los parámetros de ruta corresponden a las variables de ruta que defina en la ruta.
   Para acceder a los parámetros de ruta utilizamos route.snapshot, que es el 
   ActivatedRouteSnapshot que contiene información sobre la ruta activa en ese momento 
   concreto. La URL que coincide con la ruta proporciona el productId. 
   Angular usa productId para mostrar los detalles de cada producto único.
  */

   /*
   Defina el método addToCart() , que agrega el producto actual al carrito.
   */
   addToCart(product: Product) {
    this.cartService.addToCart(product);
    window.alert('Your product has been added to the cart!');
    console.log(this.cartService.getItems());
  }

}
