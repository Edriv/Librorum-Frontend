import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Articulo } from 'src/app/Modelo/Articulo';
import { ServiceService } from '../../Service/service.service';
@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css'],
})
export class ListarComponent implements OnInit {
  articulos!: Articulo[];
  pageActual!: number;

  constructor(private service: ServiceService, private router: Router) {}

  ngOnInit(): void {
    this.service.getArticulo().subscribe((data) => {
      this.articulos = data;
    });
  }

  Editar(articulo: Articulo): void {
    localStorage.setItem('id', articulo.cod_barras.toString());
    this.router.navigate(['edit']);
  }

  Delete(articulo: Articulo) {
    this.service.deleteArticulo(articulo).subscribe((data) => {
      this.articulos = this.articulos.filter((a) => a !== articulo);
      alert('Usuario eliminano');
    });
  }
}
