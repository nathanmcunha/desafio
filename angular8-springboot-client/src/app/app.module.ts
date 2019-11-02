import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CreateProdutoComponent } from './create-produto/create-produto.component';
import { ProdutoDetailsComponent } from './produto-details/produto-details.component';
import { ProdutoListComponent } from './produto-list/produto-list.component';
import { CreateCategoriaComponent } from './create-categoria/create-categoria.component';
import { CategoriaDetailsComponent } from './categoria-details/categoria-details.component';
import { CategoriaListComponent } from './categoria-list/categoria-list.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateProdutoComponent,
    ProdutoDetailsComponent,
    ProdutoListComponent,
    CreateCategoriaComponent,
    CategoriaDetailsComponent,
    CategoriaListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
