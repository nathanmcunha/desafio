import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../produto.service';
import { Produto } from '../produto';
import { Router } from '@angular/router';
import {Observable} from "rxjs";
import {Categoria} from "../categoria";
import {CategoriaService} from "../categoria.service";


@Component({
  selector: 'app-create-produto',
  templateUrl: './create-produto.component.html',
  styleUrls: ['./create-produto.component.css']
})
export class CreateProdutoComponent implements OnInit {

  categorias: Observable<Categoria[]>;
  produto: Produto = new Produto();
  submitted = false;



  constructor(private produtoService: ProdutoService,
              private router: Router,private categoriaService: CategoriaService) { }

  ngOnInit() {
    this.getCategorias()
  }

  newEmployee(): void {
    this.submitted = false;
    this.produto = new Produto();
  }

  save() {
    this.produtoService.createProduto(this.produto)
      .subscribe(data => console.log(data), error => console.log(error));
    this.produto = new Produto();
    this.gotoList();
  }


  onSubmit() {
    this.submitted = true;
    this.save();
  }

  getCategorias() {
    this.categorias = this.categoriaService.getCategoriaList();
    console.log("Categorias: "+JSON.stringify(this.categorias));
  }

  private gotoList() {
    this.router.navigate(['/produtos']);
  }
}
