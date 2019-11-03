import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProdutoListComponent} from "./produto-list/produto-list.component";
import {CreateProdutoComponent} from "./create-produto/create-produto.component";
import {UpdateProdutoComponent} from "./update-produto/update-produto.component";
import {ProdutoDetailsComponent} from "./produto-details/produto-details.component";
import {CategoriaDetailsComponent} from "./categoria-details/categoria-details.component";
import {CategoriaListComponent} from "./categoria-list/categoria-list.component";
import {CreateCategoriaComponent} from "./create-categoria/create-categoria.component";


const routes: Routes = [
  { path: '', redirectTo: 'produtos', pathMatch: 'full' },
  { path: 'produtos', component: ProdutoListComponent },
  { path: 'add', component: CreateProdutoComponent },
  { path: 'update/:id', component: UpdateProdutoComponent },
  { path: 'details/:id', component: ProdutoDetailsComponent },
  { path: 'categorias', component: CategoriaListComponent },
  { path: 'detailscategoria/:id', component: CategoriaDetailsComponent },
  { path: 'addcategoria', component: CreateCategoriaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
