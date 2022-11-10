import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Crud2';

  constructor(private router: Router) {}

  Listar() {
    this.router.navigate(['listar']);
  }
  Nuevo() {
    this.router.navigate(['add']);
  }

  Grafica() {
    this.router.navigate(['BarChartComponent']);
  }
}
