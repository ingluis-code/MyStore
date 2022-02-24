import { Component, OnInit } from '@angular/core';


/*
En cart.component.ts, importe el CartService desde el archivo cart.service.ts.
*/
import { CartService } from '../cart.service';


/*
Importe el servicio FormBuilder del paquete @angular/forms. 
Este servicio proporciona métodos convenientes para generar controles.
*/
import { FormBuilder } from '@angular/forms';






@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

/*
Defina la propiedad items para almacenar los productos en el carrito.
*/
  items = this.cartService.getItems();

  /*
  Para recopilar el nombre y la dirección del usuario, utilice el  método FormBuilder.group()
   para establecer la propiedad checkoutForm  en un modelo de formulario que contenga campos name y .address
  */

   checkoutForm = this.formBuilder.group({
    name: '',
    address: ''
  });


  /*
  Inyecte el CartService para que CartComponent pueda usarlo 
  agregándolo al archivo constructor().
  */

  /*
  Inyectar el FormBuilderservicio en el CartComponent constructor(). 
  Este servicio es parte del ReactiveFormsModule módulo, que ya ha importado.
  */

  
  constructor(private cartService: CartService, 
              private formBuilder: FormBuilder
              ) { }

  ngOnInit(): void {
  }


  /*
    Defina un método onSubmit() para procesar el formulario. 
    Este método permite a los usuarios enviar su nombre y dirección. Además, 
    este método utiliza el método clearCart() de CartService para restablecer el
     formulario y borrar el carrito.
  */

     onSubmit(): void {
      // Process checkout data here
      this.items = this.cartService.clearCart();//Limpia el carrito
      console.warn('Your order has been submitted', this.checkoutForm.value);
      this.checkoutForm.reset();//Limpia los input
    }

    /*Aqui puedo llamar el servicio con los apis de pago etcetera */
  

}
