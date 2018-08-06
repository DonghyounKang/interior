package bitcamp.java106.pms.domain;

import java.io.Serializable;
import java.sql.Date;
import java.util.List;

public class Works implements Serializable {
    private static final long serialVersionUID = 1L;
    
    private int worksNumber;  // 작품번호
    private int workshopNumber;  // 공방번호
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
<<<<<<< HEAD
        return "Works [worksNumber=" + worksNumber + ", workshopNumber=" + workshopNumber + ", title=" + title
                + ", price=" + price + ", registeredDate=" + registeredDate + ", modifiedDate=" + modifiedDate
                + ", capacity=" + capacity + ", salesStatus=" + salesStatus + ", productDetail=" + productDetail
                + ", deliveryPrice=" + deliveryPrice + ", photo=" + photo + ", option=" + option + "]";
    }
    
    

    public int getWorksNumber() {
        return worksNumber;
=======
        return "Works [worksNumber=" + worksNumber + ", workshopNumber="
                + workshopNumber + ", title=" + title + ", price=" + price
                + ", registeredDate=" + registeredDate + ", capacity="
                + capacity + ", salesStatus=" + salesStatus + ", productDetail="
                + productDetail + ", deliveryPrice=" + deliveryPrice
                + ", requestDetail=" + requestDetail + ", photo=" + photo
                + ", option=" + option + "]";
>>>>>>> branch 'master' of https://github.com/DonghyounKang/interior.git
    }



<<<<<<< HEAD
    public void setWorksNumber(int worksNumber) {
        this.worksNumber = worksNumber;
=======
    public int getWorksNumber() {
        return worksNumber;
>>>>>>> branch 'master' of https://github.com/DonghyounKang/interior.git
    }



<<<<<<< HEAD
    public int getWorkshopNumber() {
        return workshopNumber;
=======
    public void setWorkNumber(int worksNumber) {
        this.worksNumber = worksNumber;
>>>>>>> branch 'master' of https://github.com/DonghyounKang/interior.git
    }



<<<<<<< HEAD
    public void setWorkshopNumber(int workshopNumber) {
        this.workshopNumber = workshopNumber;
=======
    public int getWorkshopNumber() {
        return workshopNumber;
>>>>>>> branch 'master' of https://github.com/DonghyounKang/interior.git
    }



<<<<<<< HEAD
    public String getDeliveryPrice() {
        return deliveryPrice;
=======
    public void setWorkshopNumber(int workshopNumber) {
        this.workshopNumber = workshopNumber;
>>>>>>> branch 'master' of https://github.com/DonghyounKang/interior.git
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
