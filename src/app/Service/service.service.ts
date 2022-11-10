import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Articulo } from '../Modelo/Articulo';
import { Observable } from 'rxjs/internal/Observable';
import { ArticuloVentas } from '../Modelo/VentasArticulos';

@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  constructor(private http: HttpClient) {}
  //URL ARTICULOS
  Url = 'http://localhost:8080/api/articulo/list';
  URL1 = 'http://localhost:8080/api/articulo/add';
  URL2 = 'http://localhost:8080/api/articulo/delete';
  URL3 = 'http://localhost:8080/api/articulo';
  URL4 = 'http://localhost:8080/api/articulo/update';

  //URL VENTASARTICULOS
  UrlVentas = 'http://localhost:8080/api/ventaArticulo/list';
  UrlVentas1 = 'http://localhost:8080/api/ventaArticulo';

  getArticulo() {
    return this.http.get<Articulo[]>(this.Url);
  }
  createArticulo(articulo: Articulo) {
    return this.http.post<Articulo>(this.URL1, articulo);
  }
  deleteArticulo(articulo: Articulo) {
    return this.http.delete<Articulo>(this.URL2 + '/' + articulo.cod_barras);
  }
  getArticuloId(cod_barras: number) {
    return this.http.get<Articulo>(this.URL3 + '/' + cod_barras);
  }

  updateArticulo(articulo: Articulo) {
    return this.http.put<Articulo>(
      this.URL4 + '/' + articulo.cod_barras,
      articulo
    );
  }

  //Ventas ArticulosVentas
  getArticulosVentas() {
    return this.http.get<ArticuloVentas[]>(this.UrlVentas);
  }

  getBYId(id_pos: number) {
    return this.http.get<ArticuloVentas>(this.UrlVentas1 + '/' + id_pos);
  }
}
