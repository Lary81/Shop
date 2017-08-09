package pl.training.backend.cart.dto;

import lombok.Data;

@Data
public class ShoppingCartDto {
    private Long productId;
    private Integer stock;
    private String status;

   public ShoppingCartDto(){}
}
