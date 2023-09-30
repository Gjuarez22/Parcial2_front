import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import {HttpClient} from '@angular/common/http'
import { GenericService } from './generic.service';
import { eleccion } from '../model/eleccion';
@Injectable({
  providedIn: 'root'
})
export class EleccionesServicioService  extends GenericService<eleccion> {

  //private url: string = `${environment.HOST}/api/Elecciones2019`
 
  constructor(protected override http: HttpClient) {
    super(
      http,
      `${environment.HOST}/api/Elecciones2019`
      );

   }

 
}
