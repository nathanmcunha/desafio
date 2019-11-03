import { Injectable } from '@angular/core';
import {Produto} from "./produto";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {


  private baseUrl = '/api/produtos';
  constructor(private http: HttpClient) { }

  createProduto(produto: Object) : Observable<Object> {
    return this.http.post(`${this.baseUrl}`, produto);
  }

  getProduto(id: number) : Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  updateProduto(id: number, value: any) : Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteProduto(id: number) : Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getProdutosList() : Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}
