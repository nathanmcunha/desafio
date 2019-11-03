import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {Router} from "@angular/router";
import {Categoria} from "../categoria";
import {CategoriaService} from "../categoria.service";

@Component({
  selector: 'app-categoria-list',
  templateUrl: './categoria-list.component.html',
  styleUrls: ['./categoria-list.component.css']
})
export class CategoriaListComponent implements OnInit {

  categorias: Observable<Categoria[]>;

  constructor(private categoriaService: CategoriaService,
              private router: Router) {}

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.categorias = this.categoriaService.getCategoriaList();
    console.log("Categorias: "+ JSON.stringify(this.categorias));
  }

  deleteCategoria(id: number) {
    this.categoriaService.deleteCategoria(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  categoriaDetails(id: number){
    this.router.navigate(['detailscategoria', id]);
  }

  updateCategoria(id: number){
    this.router.navigate(['update', id]);
  }
}


