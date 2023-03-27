import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductoService } from '../producto.service';
import { Producto } from '../productos.module';

@Component({
  selector: 'app-crear-producto',
  templateUrl: './crear-producto.component.html',
  styleUrls: ['./crear-producto.component.css']
})
export class CrearProductoComponent implements OnInit {
  
  nombre:string=""
  categoria:string=""
  ubicacion:string=""
  precio:number=0
  productos: Producto[] = []

  constructor(private productoService:ProductoService,
              private router:Router) { }

  ngOnInit(): void {
  }

  agregarProducto(){
    let producto1 = new Producto(this.nombre, this.categoria, this.ubicacion, this.precio)
      console.log(producto1)
      this.productoService.postProducto(producto1).subscribe(data => {
        console.log(producto1)
        this.router.navigate([''])
      }, error => {
        console.log(error)
      })    
  }

  

}
