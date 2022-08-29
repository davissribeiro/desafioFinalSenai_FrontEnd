import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Veiculos, VeiculosAPI } from './veiculos';
import { map, tap } from 'rxjs/operators';
import { CodigoVin, CodigoVinAPI } from './codigo-vin';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

const API:string = environment.apiURL;

@Injectable({
  providedIn: 'root',
})
export class VeiculosService {
  constructor(private httpClient: HttpClient) {}

  getVeiculos(valor?: string): Observable<Veiculos> {
    const params: HttpParams | undefined = valor ? new HttpParams().append('valor', valor) : undefined;
    return this.httpClient.get<VeiculosAPI>(`${API}/vehicle`, { params }).pipe(
      map((valor) => valor.vehicles),
      tap((valor) => console.log(valor))
    );
  }

  getCodigoVin(valor?: string): Observable<CodigoVin> {
    const params: HttpParams | undefined = valor ? new HttpParams().append('valor', valor) : undefined;
    return this.httpClient
      .get<CodigoVinAPI>(`${API}/vehicledata`, { params })
      .pipe(
        map((valor) => valor.vehicleData[0]),
        tap((valor) => console.log(valor))
      );
  }
}
