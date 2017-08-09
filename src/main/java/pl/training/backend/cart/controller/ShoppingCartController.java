package pl.training.backend.cart.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import pl.training.backend.cart.dto.ShoppingCartDto;
import pl.training.backend.cart.entity.ShoppingCart;
import pl.training.backend.cart.service.ShoppingCartService;

import java.util.List;


@RequestMapping("/cart")
@RestController
public class ShoppingCartController {

    @Autowired
    private ShoppingCartService shoppingCartService;

    @RequestMapping(method = RequestMethod.POST, produces = "application/json", consumes = "application/json")
    public ShoppingCart addProductItem(@RequestBody ShoppingCartDto shoppingCartDTO) {
        return shoppingCartService.saveProducts(shoppingCartDTO);
    }


    @RequestMapping(method = RequestMethod.GET, produces = "application/json")
    public List<ShoppingCart> getAll(){
        return shoppingCartService.findAll();
    }

    @RequestMapping(method = RequestMethod.PUT, produces = "application/json", consumes = "application/json", value ="/{id}")
    public ShoppingCart updateProductItem(@RequestBody ShoppingCartDto shoppingCartDTO, @PathVariable("id") Long ids) {
        return shoppingCartService.updateProduct(shoppingCartDTO, ids);
    }

    @RequestMapping(method = RequestMethod.DELETE, value ="/{id}")
    public void deleteProductItem(@PathVariable("id") Long ids) {
        shoppingCartService.deleteProduct(ids);
    }

    @RequestMapping(method = RequestMethod.DELETE)
    public void ClearCart( Object object) {
        shoppingCartService.clearShoppingCart(object);
    }

    @RequestMapping(method = RequestMethod.POST, value = "/purchase/{id}")
    public void purchaseProducts(@PathVariable("id") Long id) {
        shoppingCartService.purchaseProducts(id);
    }
}
