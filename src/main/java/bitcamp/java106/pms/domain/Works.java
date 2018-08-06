package bitcamp.java106.pms.domain;

import java.io.Serializable;
import java.sql.Date;
import java.util.List;

public class Works implements Serializable {
    private static final long serialVersionUID = 1L;
    
    private int no;  // 작품번호
    private int wno;  // 공방번호
    private String title; //작품명
    private int price; // 가격  
    private Date registeredDate; // 등록 날짜
    private Date modifiedDate;//수정일자
    private int capacity; // 재고수량
    private String salesStatus; // 판매 상태
    private String productDetail; // 제품 상세
    private String deliveryPrice; // 배송비 여부
    private WorksPhoto photo;  // 사진 관련
    private WorksOption option; // 제품 옵션 관련
    
    
    @Override
    public String toString() {
        return "Works [no=" + no + ", wno=" + wno + ", title=" + title
                + ", price=" + price + ", registeredDate=" + registeredDate
                + ", capacity=" + capacity + ", salesStatus=" + salesStatus
                + ", productDetail=" + productDetail + ", deliveryPrice="
                + deliveryPrice + ", modifiedDate=" + modifiedDate
                + ", photo=" + photo + ", option=" + option + "]";
    }


    public int getNo() {
        return no;
    }


    public void setNo(int no) {
        this.no = no;
    }


    public int getWno() {
        return wno;
    }


    public void setWno(int wno) {
        this.wno = wno;
    }


    public String getTitle() {
        return title;
    }


    public void setTitle(String title) {
        this.title = title;
    }


    public int getPrice() {
        return price;
    }


    public void setPrice(int price) {
        this.price = price;
    }


    public Date getRegisteredDate() {
        return registeredDate;
    }


    public void setRegisteredDate(Date registeredDate) {
        this.registeredDate = registeredDate;
    }


    public int getCapacity() {
        return capacity;
    }


    public void setCapacity(int capacity) {
        this.capacity = capacity;
    }


    public String getSalesStatus() {
        return salesStatus;
    }


    public void setSalesStatus(String salesStatus) {
        this.salesStatus = salesStatus;
    }


    public String getProductDetail() {
        return productDetail;
    }


    public void setProductDetail(String productDetail) {
        this.productDetail = productDetail;
    }


    public String isDeliveryPrice() {
        return deliveryPrice;
    }


    public void setDeliveryPrice(String deliveryPrice) {
        this.deliveryPrice = deliveryPrice;
    }


    public Date getModifiedDate() {
        return modifiedDate;
    }


    public void setModifiedDate(Date modifiedDate) {
        this.modifiedDate = modifiedDate;
    }


    public WorksPhoto getPhoto() {
        return photo;
    }


    public void setPhoto(WorksPhoto photo) {
        this.photo = photo;
    }


    public WorksOption getOption() {
        return option;
    }


    public void setOption(WorksOption option) {
        this.option = option;
    }


    public static long getSerialversionuid() {
        return serialVersionUID;
    }
    
    
    
    
    
    
}
