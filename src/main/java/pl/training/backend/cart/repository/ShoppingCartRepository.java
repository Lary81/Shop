package pl.training.backend.cart.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import pl.training.backend.cart.entity.ShoppingCart;

import java.util.List;

public interface ShoppingCartRepository extends JpaRepository<ShoppingCart, Long> {
    List<ShoppingCart> findByStatus(String status);
}