import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Producto } from "./productos.module";

@Injectable()
export class ProductoService {
    producto:Producto [] = []
    url = 'api/productos/'

    constructor(private http: HttpClient){}

    getProductos(): Observable<any> {
        return this.http.get(this.url)
    }

    deleteProducto(id:string): Observable<any>{
        return this.http.delete(`${this.url}/${id}`)
    }

    postProducto(producto: Producto): Observable<any>{
        return this.http.post(this.url, producto)
    }

    obtenerProducto(id:string): Observable<any>{
        return this.http.get(this.url + id)
    }

    editarProducto(id:string | null, producto:Producto): Observable<any>{
        return this.http.put(this.url + id, producto)
    }
}