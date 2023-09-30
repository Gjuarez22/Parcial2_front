import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { EleccionesServicioService } from 'src/app/service/elecciones-servicio.service';
import { eleccion } from '../model/eleccion';
@Component({
  selector: 'app-elecciones',
  templateUrl: './elecciones.component.html',
  styleUrls: ['./elecciones.component.css']
})
export class EleccionesComponent implements OnInit {
  
  displayedColumns: string[] = [ "candidato","cantidadDeVotos","porcentaje"];
  dataSource: MatTableDataSource<eleccion>;

  constructor(private eleccionesServicio: EleccionesServicioService) { }

  ngOnInit(): void {
    this.eleccionesServicio.findAll().subscribe(data => {
      this.createTable(data);
    });

  }

  createTable(eleccion: eleccion[]){
    this.dataSource = new MatTableDataSource(eleccion); 
  }
  
}
