
import { Component, HostBinding } from '@angular/core';
import { Product } from '../../models/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html'
})
export class ProductListComponent {

  @HostBinding('class') hostClasses = 'card mt-4 p-3 shadow-sm';

  titulo: string = 'Listado de productos';

  productos: Product[] = [
    { nombre: 'Teclado mecánico', descripcion: 'Teclado RGB para gaming', precio: 45 },
    { nombre: 'Mouse inalámbrico', descripcion: 'Mouse óptico con 3 botones', precio: 20 }
  ];

  agregarProducto(
    nombreInput: HTMLInputElement,
    descInput: HTMLInputElement,
    precioInput: HTMLInputElement
  ): void {

    const nombre = nombreInput.value.trim();
    const descripcion = descInput.value.trim();
    const precio = Number(precioInput.value);

    if (!nombre) {
      return;
    }

    const nuevo: Product = {
      nombre,
      descripcion,
      precio: isNaN(precio) ? 0 : precio
    };

    this.productos.push(nuevo);

    nombreInput.value = '';
    descInput.value = '';
    precioInput.value = '';
  }
}
