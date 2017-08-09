package pl.training.backend.cart.dto;

import java.util.List;
//history
public class ShoppingCardIdDto {
    private List<Long> ids;

    public List<Long> getIds() {
        return ids;
    }

    public void setIds(List<Long> ids) {
        this.ids = ids;
    }
}