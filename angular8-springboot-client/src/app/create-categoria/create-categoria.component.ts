import { Component, OnInit } from '@angular/core';
import {Produto} from "../produto";
import {ProdutoService} from "../produto.service";
import {Router} from "@angular/router";
import {CategoriaService} from "../categoria.service";
import {Categoria} from "../categoria";

@Component({
  selector: 'app-create-categoria',
  templateUrl: './create-categoria.component.html',
  styleUrls: ['./create-categoria.component.css']
})
export class CreateCategoriaComponent implements OnInit {

  categoria: Categoria = new Categoria();
  submitted = false;

  constructor(private categoriaService: CategoriaService,
              private router: Router) { }

  ngOnInit() {
  }

  newCategoria(): void {
    this.submitted = false;
    this.categoria = new Produto();
  }

  save() {
    this.categoriaService.createCategoria(this.categoria)
      .subscribe(data => console.log(data), error => console.log(error));
    this.categoria = new Categoria();
    this.gotoList();
  }


  onSubmit() {
    this.submitted = true;
    this.save();
  }

  private gotoList() {
    this.router.navigate(['/categorias']);
  }
}
