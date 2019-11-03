import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../produto.service';
import { Produto } from '../produto';
import { ActivatedRoute, Router } from '@angular/router';
import {CategoriaService} from "../categoria.service";
import {Categoria} from "../categoria";
import {Observable} from "rxjs";



@Component({
  selector: 'app-update-produto',
  templateUrl: './update-produto.component.html',
  styleUrls: ['./update-produto.component.css']
})
export class UpdateProdutoComponent implements OnInit {

  id: number;
  idCategoria:number
  produto: Produto;
  categoria :Observable<any>
  categorias:Observable<any[]>;

  constructor(private route: ActivatedRoute, private router: Router,
              private produtoService: ProdutoService,private categoriaService: CategoriaService) {
  }

  ngOnInit() {
    this.produto = new Produto();
    this.id = this.route.snapshot.params['id'];
    this.idCategoria = this.route.snapshot.params['idCategoria'];
    this.getCategorias();
    this.produtoService.getProduto(this.id)
      .subscribe(data => {
        console.log(data)
        this.produto = data;
      }, error => console.log(error));
  }

  updateProduto() {
    this.categoria = this.categoriaService.getCategoria(this.idCategoria);
    this.produto.categoria = this.categoria;
    this.produtoService.updateProduto(this.id, this.produto)
      .subscribe(data => console.log(data), error => console.log(error));
    this.produto = new Produto();
    this.gotoList();
  }
  onSubmit() {
    this.updateProduto();
  }

  gotoList() {
    this.router.navigate(['/produtos']);
  }

  getCategorias() {
    this.categorias = this.categoriaService.getCategoriaList();
    console.log("Categorias: "+JSON.stringify(this.categorias));
  }


}
