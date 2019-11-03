package br.com.nathan.desafio.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.nathan.desafio.model.Produto;
import br.com.nathan.desafio.repository.ProdutoRepository;

@RestController
@RequestMapping({ "/produtos" })
public class ProdutoController {

	private ProdutoRepository repository;

	ProdutoController(ProdutoRepository produtoRepository) {
		this.repository = produtoRepository;
	}

	@GetMapping
	public List<?> findAll() {
		return repository.findAll();
	}

	@GetMapping(path = { "/{id}" })
	public ResponseEntity<?> findById(@PathVariable Integer id) {
		return repository.findById(id).map(record -> ResponseEntity.ok().body(record))
				.orElse(ResponseEntity.notFound().build());
	}

	@PostMapping
	public Produto create(@RequestBody Produto produto) {
		return repository.save(produto);
	}

	@PatchMapping(value = "/{id}")
	public ResponseEntity<Produto> updatePartial(@PathVariable("id") Integer id, @RequestBody Produto produto) {

		Optional<Produto> actual = repository.findById(id);

		return null;
	}

	@PutMapping(value = "/{id}")
	public ResponseEntity<Produto> update(@PathVariable("id") Integer id, @RequestBody Produto produto) {

		return repository.findById(id).map(record -> {
			record.setNome(produto.getNome());
			record.setCodigoDeBarras(produto.getCodigoDeBarras());
			record.setDescricao(produto.getDescricao());
			record.setQuantidade(produto.getQuantidade());
			record.setCategoria(produto.getCategoria());
			Produto updated = repository.save(record);
			return ResponseEntity.ok().body(updated);
		}).orElse(ResponseEntity.notFound().build());
	}

	@DeleteMapping(path = { "/{id}" })
	public ResponseEntity<?> delete(@PathVariable Integer id) {
		return repository.findById(id).map(record -> {
			repository.deleteById(id);
			return ResponseEntity.ok().build();
		}).orElse(ResponseEntity.notFound().build());
	}

}
