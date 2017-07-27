package pl.training.backend.shop.dto;

import io.swagger.annotations.ApiModel;
import lombok.Data;

import java.util.List;
@ApiModel(value = "Products")
@Data
public class ProductPageDto {



    private List<ProductDTO> products;
    private int pageNumber;
    private int totalPages;

    public ProductPageDto() {
    }

    public ProductPageDto(List<ProductDTO> products, int pageNumber, int totalPages) {
        this.products= products;
        this.pageNumber = pageNumber;
        this.totalPages = totalPages;
    }

}




