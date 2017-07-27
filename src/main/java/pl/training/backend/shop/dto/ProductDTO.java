package pl.training.backend.shop.dto;


import lombok.Data;
import pl.training.backend.shop.entity.Pictures;


import java.util.List;

@Data
public class ProductDTO {


    private Long id;
    private String productName;
    private int quantity;
    private String properities;
    private List<Pictures> piclist;


    public ProductDTO() {
    }



    }

