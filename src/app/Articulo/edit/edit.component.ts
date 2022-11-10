import { identifierName } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Articulo } from 'src/app/Modelo/Articulo';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
})
export class EditComponent implements OnInit {
  articulo: Articulo = new Articulo();

  articulo1: Articulo = new Articulo();

  constructor(private router: Router, private service: ServiceService) {}

  ngOnInit() {
    this.Editar();

    let firstName = localStorage.getItem('id') || 0;
    this.service.getArticuloId(+firstName).subscribe((data) => {
      this.articulo1 = data;
    });
  }

  Editar() {
    let firstName = localStorage.getItem('id') || 0;
    this.service.getArticuloId(+firstName).subscribe((data) => {
      this.articulo = data;
    });
  }

  Actualizar(articulo: Articulo) {
    this.service.updateArticulo(articulo).subscribe((data) => {
      this.articulo = data;
      alert('Se Actualizo con Exito...!!!');
      this.router.navigate(['listar']);
    });
  }
}
