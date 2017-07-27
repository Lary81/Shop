package pl.training.backend.shop.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Service;
import pl.training.backend.shop.dto.ProductDTO;
import pl.training.backend.shop.entity.Products;



public interface ProductsRepository extends JpaRepository<Products, Long> {






}