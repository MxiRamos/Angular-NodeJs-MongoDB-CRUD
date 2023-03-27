import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../producto.service';
import { Producto } from '../productos.module';

@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.css']
})
export class ListaProductosComponent implements OnInit {
  listaProductos: Producto[] = []

  constructor(private productoService: ProductoService,
            ) { }

  ngOnInit(): void {
    this.obtenerProductos()
  }

  obtenerProductos() {
    this.productoService.getProductos().subscribe(data => {
      console.log(data)
      this.listaProductos = data // asigna el array obtenido a listaProductos
    }, error => {
      console.log(error)
    })
  }

  eliminarProducto(_id: any){
    this.productoService.deleteProducto(_id).subscribe(
      (res) => {
        this.obtenerProductos() // se llama a esta funcion para que se actualize la lista
      },(error) => console.log(error)
    )
  }

}
