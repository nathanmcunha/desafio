package br.com.nathan.desafio.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.nathan.desafio.model.Produto;

public interface ProdutoRepository  extends JpaRepository<Produto, Integer>{

}
