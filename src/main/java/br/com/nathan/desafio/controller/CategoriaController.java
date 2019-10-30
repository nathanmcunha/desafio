package br.com.nathan.desafio.controller;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.nathan.desafio.model.Categoria;
import br.com.nathan.desafio.model.Produto;
import br.com.nathan.desafio.repository.CategoriaRepository;

@RestController
@RequestMapping({"/categorias"})
public class CategoriaController {
	
	  private CategoriaRepository repository;

	  CategoriaController(CategoriaRepository categoriaRepository) {
	       this.repository = categoriaRepository;
	   }

	  @GetMapping
	  public List<?> findAll(){
	     return repository.findAll();
	  }
	
	  
	  @GetMapping(path = {"/{id}"})
	  public ResponseEntity<?> findById(@PathVariable Integer id){
	     return repository.findById(id)
	             .map(record -> ResponseEntity.ok().body(record))
	             .orElse(ResponseEntity.notFound().build());
	  }
	  
	  @PostMapping
	  public Categoria create(@RequestBody Categoria categoria){
	     return repository.save(categoria);
	  }
	  
	  
	  @DeleteMapping(path ={"/{id}"})
	  public ResponseEntity<?> delete(@PathVariable Integer id) {
	     return repository.findById(id)
	             .map(record -> {
	                 repository.deleteById(id);
	                 return ResponseEntity.ok().build();
	             }).orElse(ResponseEntity.notFound().build());
	  }

}
