import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Categoria} from "../categoria";
import {CategoriaService} from "../categoria.service";

@Component({
  selector: 'app-categoria-details',
  templateUrl: './categoria-details.component.html',
  styleUrls: ['./categoria-details.component.css']
})
export class CategoriaDetailsComponent implements OnInit {

  id: number;
  categoria: Categoria;

  constructor(private route: ActivatedRoute,private router: Router,
              private categoriaService: CategoriaService) { }

  ngOnInit() {
    this.categoria = new Categoria();

    this.id = this.route.snapshot.params['id'];

    this.categoriaService.getCategoria(this.id)
      .subscribe(data => {
        console.log(data)
        this.categoria = data;
      }, error => console.log(error));
  }

  list(){
    this.router.navigate(['categorias']);
  }
}
