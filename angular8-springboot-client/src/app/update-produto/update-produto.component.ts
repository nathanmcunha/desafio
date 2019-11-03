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
  produto: Produto;
  categoria :Categoria
  categorias:Observable<any[]>;

  constructor(private route: ActivatedRoute, private router: Router,
              private produtoService: ProdutoService,private categoriaService: CategoriaService) {
  }

  ngOnInit() {
    this.produto = new Produto();
    this.categoria = new Categoria()
    this.id = this.route.snapshot.params['id'];
    this.getCategorias();
    this.produtoService.getProduto(this.id)
      .subscribe(data => {
        console.log(data)
        this.produto = data;
      }, error => console.log(error));
  }

  updateProduto() {
    this.produto.categoria = this.categoria;
    console.log("JSONIFY");
    console.log(JSON.stringify(this.produto));
    this.produtoService.updateProduto(this.id, this.produto)
      .subscribe(data => console.log(data), error => console.log(error));
    this.produto = new Produto();
    this.categoria = new Categoria()
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
  getCategoria(){
    this.categoriaService.getCategoria(this.categoria.id)
      .subscribe(data => {
      console.log(data)
      this.produto.categoria = data;
    }, error => console.log(error));
  }


}
