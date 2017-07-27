package pl.training.backend.shop.controler;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;
import org.springframework.http.ResponseEntity;
import org.springframework.security.oauth2.provider.OAuth2Authentication;
import org.springframework.web.bind.annotation.*;
import pl.training.backend.common.model.Mapper;
import pl.training.backend.common.model.ResultPage;
import pl.training.backend.common.web.UriBuilder;
import pl.training.backend.shop.dto.ProductDTO;
import pl.training.backend.shop.dto.ProductPageDto;
import pl.training.backend.shop.entity.Products;
import pl.training.backend.shop.service.ProductService;
import java.net.URI;
import java.util.List;

import static org.springframework.http.ResponseEntity.created;
@Api(description = "Product resource")
@RequestMapping(value = "products")
@RestController
public class ProductController {
    private ProductService productService;
    private Mapper mapper;
    private UriBuilder uriBuilder = new UriBuilder();

    public ProductController(ProductService productService, Mapper mapper) {
        this.productService = productService;
        this.mapper = mapper;
    }

    @RequestMapping(method = RequestMethod.POST)
    public ResponseEntity createProduct(@ApiParam(name = "product") @RequestBody ProductDTO productDTO) {
        Products products = mapper.map(productDTO, Products.class);
        productService.addProduct(productDTO);
        URI uri = uriBuilder.requestUriWithId(products.getId());
        return created(uri).build();
    }

    @ApiOperation(value = "Get current product", response = ProductDTO.class)
    @RequestMapping(value = "active", method = RequestMethod.GET)
    public ProductDTO getProduct(OAuth2Authentication authentication) {
        Products products = (Products) authentication.getPrincipal();
        return mapper.map(products, ProductDTO.class);
    }

    @ApiOperation(value = "Get products", response = ProductPageDto.class)
    @RequestMapping(method = RequestMethod.GET)
    public ProductPageDto getProducts(
            @RequestParam(required = false, defaultValue = "0", name = "pageNumber") int pageNumber,
            @RequestParam(required = false, defaultValue = "10", name = "pageSize") int pageSize) {
        ResultPage<Products> resultPage = productService.getProducts(pageNumber, pageSize);
        List<ProductDTO> productDto = mapper.map(resultPage.getContent(), ProductDTO.class);
        return new ProductPageDto(productDto, resultPage.getPageNumber(), resultPage.getTotalPages());
    }

}