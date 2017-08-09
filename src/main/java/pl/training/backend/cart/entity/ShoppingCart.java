package pl.training.backend.cart.entity;

import pl.training.backend.security.entity.User;
import pl.training.backend.shop.entity.Products;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.io.Serializable;
import java.util.Date;

@Entity
@Table(name = "shopping_cart")
public class ShoppingCart implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id")
    private Long id;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "user_id")
    private User user;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "product_id")
    private Products products;

    @Column(name = "stock")
    @NotNull
    private Integer stock;

    @Column(name = "amount")
    private Double amount;

    @Column(name = "status")
    private String status;

    @Column(name = "date")
    private Date date;

    public void setUser(User user) {
        this.user = user;
    }

    public void setProducts(Products products) {
        this.products = products;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public void setStock(Integer stock) {
        this.stock = stock;
    }
}