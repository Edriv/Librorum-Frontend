import { Component, OnInit } from '@angular/core';
import { Data, Router } from '@angular/router';
import { Articulo } from 'src/app/Modelo/Articulo';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
})
export class AddComponent implements OnInit {
  articulo: Articulo = new Articulo();
  constructor(private router: Router, private service: ServiceService) {}

  ngOnInit(): void {}

  Guardar() {
    this.service.createArticulo(this.articulo).subscribe((data) => {
      alert('Se Agrego con Exito...!!!');
      this.router.navigate(['listar']);
    });
  }
}
