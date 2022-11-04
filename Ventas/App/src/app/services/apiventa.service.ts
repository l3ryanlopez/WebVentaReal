import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Response } from "../models/response";
import { Venta } from '../models/venta';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class ApiventaService {

  url: string = "https://localhost:7264/api/Venta";
  
  constructor(private _http: HttpClient) { 

  }

  add(venta: Venta): Observable<Response>{
    return this._http.post<Response>(this.url, venta, httpOptions);
  }
}
