package pl.training.backend.shop.entity;
import lombok.Data;

import javax.persistence.*;
import java.io.Serializable;
import java.util.List;

@Table(name = "products")
@Entity
@Data
public class Products implements Serializable{

    @GeneratedValue
    @Id
    private Long id;
    @Column(name = "productName")
    private String productName;
    @Column(name = "quantity")
    private int quantity;

    private String properities;
    @OneToMany
    @JoinColumn
    @Column(name="pictures")
    private List<Pictures>piclist;
    @Column
    private Object unitPrice;


    public Object getUnitPrice() {
        return unitPrice;
    }
}
