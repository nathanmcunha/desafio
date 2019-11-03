import {Categoria}  from './categoria';


export class Produto {

  id:number;
  codigoDeBarras:string;
  nome:string;
  descricao:string;
  quantidade:number;
  categoria:Observable<any>;
}
