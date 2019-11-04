import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  private baseUrl = '/api/categorias';

  constructor(private http: HttpClient) {
  }

  createCategoria(categoria: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, categoria);
  }

  getCategoria(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  updateCategoria(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteCategoria(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, {responseType: 'text'});
  }

  getCategoriaList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}
