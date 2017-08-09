package pl.training.backend.cart.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;
import pl.training.backend.cart.dto.ShoppingCartDto;
import pl.training.backend.cart.entity.ShoppingCart;
import pl.training.backend.cart.repository.ShoppingCartRepository;
import pl.training.backend.security.repository.UsersRepository;
import pl.training.backend.shop.entity.Products;
import pl.training.backend.shop.repository.ProductsRepository;

import java.util.Date;
import java.util.List;

@Component
@Transactional
public class ShoppingCartService {

    @Autowired
    private ProductsRepository productRepository;

    @Autowired
    private UsersRepository userRepository;

    @Autowired
    private ShoppingCartRepository shoppingCartRepository;

    public ShoppingCart saveProducts(ShoppingCartDto shoppingCartDto) {
        ShoppingCart shoppingCart = new ShoppingCart();
        Products product = productRepository.findOne(shoppingCartDto.getProductId());
        shoppingCart.setProducts(product);
        shoppingCart.setUser(userRepository.findOne(1L));
        shoppingCart.setStatus(shoppingCartDto.getStatus());
        shoppingCart.setDate(new Date());
        shoppingCart.setStock(shoppingCartDto.getStock());


        return shoppingCartRepository.save(shoppingCart);
    }


    public List<ShoppingCart> findAll() {

        return shoppingCartRepository.findByStatus("NOT_PURCHASED");
    }

    public ShoppingCart updateProduct(ShoppingCartDto shoppingCartDTO, Long id) {
        ShoppingCart updateItem = shoppingCartRepository.findOne(id);
        updateItem.setStock(shoppingCartDTO.getStock());

        return shoppingCartRepository.save(updateItem);
    }

    public void deleteProduct(Long id) {
        shoppingCartRepository.delete(id);
    }

    public void clearShoppingCart(Object object) {
        shoppingCartRepository.delete(findAll());
    }


    public List<ShoppingCart> findByPurchased() {
        return shoppingCartRepository.findByStatus("PURCHASED");
    }


    public void purchaseProducts(Long id) {
        ShoppingCart shoppingCart = shoppingCartRepository.findOne(id);
        shoppingCart.setStatus("PURCHASED");
        shoppingCartRepository.save(shoppingCart);
    }
}