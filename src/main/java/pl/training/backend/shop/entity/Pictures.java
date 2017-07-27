package pl.training.backend.shop.entity;

import lombok.Data;

import javax.persistence.*;

@Table(name = "pictures")
@Entity
@Data
public class Pictures {
    @GeneratedValue
    @Id
    private Long id;
    @Column(nullable = false)
    private String image;


    public Pictures() {
    }

}