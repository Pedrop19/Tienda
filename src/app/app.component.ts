import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Tienda';

  alerta(title: string, text: string) {
    Swal.fire({
      title: "Desea añadir el producto: " + title + "?",
      text: text,
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, añadir!"
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Confirmado!",
          text: "El producto ha sido añadido al carrito!",
          icon: "success",
          confirmButtonColor: "#3085d6",
        });
      }
    });
  }
}
