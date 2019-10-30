package br.com.nathan.desafio.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.nathan.desafio.model.Categoria;

public interface CategoriaRepository  extends JpaRepository<Categoria, Integer>{

}
