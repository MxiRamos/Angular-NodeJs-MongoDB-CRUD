import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaProductosComponent } from './lista-productos/lista-productos.component';
import { CrearProductoComponent } from './crear-producto/crear-producto.component';
import { RouterModule } from '@angular/router';
import { ProductoService } from './producto.service';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActualizarProductoComponent } from './actualizar-producto/actualizar-producto.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaProductosComponent,
    CrearProductoComponent,
    ActualizarProductoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ProductoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
