import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/Service/service.service';

import Chart from 'chart.js/auto';
import { Router } from '@angular/router';
import { Articulo } from 'src/app/Modelo/Articulo';
import { ArticuloVentas } from 'src/app/Modelo/VentasArticulos';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css'],
})
export class BarChartComponent implements OnInit {
  articulosVenta: String[] = [];
  articulosVentaCodBarras: String[] = [];
  descripcion: String[] = [];
  cantidad: number[] = [];
  constructor(private service: ServiceService, private router: Router) {}
  public chart: any;

  ngOnInit(): void {
    this.createChart();
  }

  createChart() {
    this.service.getArticulosVentas().subscribe((data) => {
      // this.articulosVenta.push.apply(data);
      // data = ArticuloVentas[]

      data.forEach((articuloVenta) => {
        console.log(articuloVenta);
        // this.articulosVentaCodBarras.push(articuloVenta.id_pos);
        this.service.getArticuloId(articuloVenta.id_pos).subscribe((res) => {
          this.descripcion.push(res.descripcion_corta);
        });
        this.service.getBYId(articuloVenta.id_pos).subscribe((res) => {
          this.cantidad.push(res.cantidad);
        });
      });
      console.log('Imprimiendo...');
      console.table(this.descripcion);
      console.table(this.cantidad);
    });

    this.articulosVenta.forEach((articulo) => {
      return this.articulosVentaCodBarras.push(articulo);
    });

    this.chart = new Chart('MyChart', {
      type: 'bar', //this denotes tha type of chart

      data: {
        // values on X-Axis
        labels: this.descripcion,

        datasets: [
          {
            label: 'Cantidad',
            data: this.cantidad,
            backgroundColor: '#1466c3',
          },
        ],
      },
      options: {
        aspectRatio: 4,
      },
    });
  }
}
