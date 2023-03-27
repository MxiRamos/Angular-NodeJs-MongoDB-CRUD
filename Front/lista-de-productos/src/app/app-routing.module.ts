import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActualizarProductoComponent } from './actualizar-producto/actualizar-producto.component';
import { CrearProductoComponent } from './crear-producto/crear-producto.component';
import { ListaProductosComponent } from './lista-productos/lista-productos.component';

const routes: Routes = [
  {path: '', component:ListaProductosComponent},
  {path: 'crear', component:CrearProductoComponent},
  {path: 'actualizar/:id', component:ActualizarProductoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes), RouterModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
