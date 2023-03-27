import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductoService } from '../producto.service';
import { Producto } from '../productos.module';

@Component({
  selector: 'app-actualizar-producto',
  templateUrl: './actualizar-producto.component.html',
  styleUrls: ['./actualizar-producto.component.css']
})
export class ActualizarProductoComponent implements OnInit {
  productoForm: FormGroup
  nombre:string = ""
  categoria:string = ""
  ubicacion:string = ""
  precio:number = 0
  id:string | null

  constructor(private route:ActivatedRoute,
              private productoService:ProductoService,
              private fb: FormBuilder,
              private router:Router) { 
                
    this.productoForm = this.fb.group({
      nombre: ['', Validators.required],
      categoria: ['', Validators.required],
      ubicacion: ['', Validators.required],
      precio: ['', Validators.required]
    })
    this.id = this.route.snapshot.paramMap.get('id') //accedemos al id
  }

  ngOnInit(): void {
    this.actualizarProducto()
  }
  
  actualizarProducto(){
    if(this.id !== null){ // si es diferente de null se puede editar
      this.productoService.obtenerProducto(this.id).subscribe(data => {
        //console.log(data)
        this.nombre = data.nombre
        this.categoria = data.categoria
        this.ubicacion = data.ubicacion
        this.precio = data.precio
        /*
        this.productoForm.setValue({
          nombre: data.nombre,
          categoria: data.categoria,
          ubicacion: data.ubicacion,
          precio: data.precio
        })*/
      })
    }
  }

  modificarProducto(){
    let producto1 = new Producto(this.nombre, this.categoria, this.ubicacion, this.precio)
    
    this.productoService.editarProducto(this.id, producto1).subscribe(data => {
      this.router.navigate(['/'])
    })
  
  }


}
