package pl.training.backend.shop.service;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;
import pl.training.backend.common.model.ResultPage;
import pl.training.backend.shop.dto.ProductDTO;
import pl.training.backend.shop.entity.Pictures;
import pl.training.backend.shop.entity.Products;
import pl.training.backend.shop.repository.ProductsRepository;

import java.util.List;

@Component
@Transactional
public class ProductService {
@Autowired
private ProductsRepository productsRepository;

    public void  editProduct(Products productDTO)  {
        Products products = productsRepository.findOne(productDTO.getId());
        Products product = new Products();
        product.setId(productDTO.getId());
        product.setProductName(productDTO.getProductName());
        product.setProperities(productDTO.getProperities());
        product.setQuantity(productDTO.getQuantity());
         List<Pictures> piclist;

        productsRepository.save(products);

    }



    public void  addProduct(Products products)  {

    productsRepository.saveAndFlush(products);

    }


    public void deleteProduct(Long id)  {

    }


    public ProductDTO getProduct(Long productId)  {
        return null;
    }

    public ResultPage<Products> getProducts(int pageNumber, int pageSize) {
        Page<Products> productsPage = productsRepository.findAll(new PageRequest(pageNumber, pageSize));
        return new ResultPage<>(productsPage.getContent(), productsPage.getNumber(),productsPage.getTotalPages());
    }
}
