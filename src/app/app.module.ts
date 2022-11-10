import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CalendarModule } from 'primeng/calendar';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListarComponent } from './Articulo/listar/listar.component';
import { AddComponent } from './Articulo/add/add.component';
import { EditComponent } from './Articulo/edit/edit.component';
import { FormsModule } from '@angular/forms';
import { ServiceService } from '../app/Service/service.service';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxPaginationModule } from 'ngx-pagination';
import { BarChartComponent } from './grafica/bar-chart/bar-chart.component';
import { LineComponent } from './grafica/line/line.component';

@NgModule({
  declarations: [AppComponent, ListarComponent, AddComponent, EditComponent, BarChartComponent, LineComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CalendarModule,
    BrowserAnimationsModule,
    NgxPaginationModule,
  ],
  providers: [ServiceService],
  bootstrap: [AppComponent],
})
export class AppModule {}
