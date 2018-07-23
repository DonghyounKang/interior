package bitcamp.java106.pms.domain;

import java.io.Serializable;

public class Workshop implements Serializable {
    private static final long serialVersionUID = 1L;
    
    int wno; // 공방번호(pk키와 연계)
    int bno; // 판매자 번호
    int mutual; // 상호
    int rpstName; // 대표자명
    int industry; // 업태
    int items; // 종목
    int zcode; // 우편번호
    int baddr; // 기본 주소
    int daddr; // 상세 주소
    int studioName; // 공방명
    int introduction; // 소개글
    int wsContent; // 공방 소개 내용
    int facebook; // 페이스북
    int twitter; // 트위터
    int instagram; // 인스타그램
    
    
    
    public int getWno() {
        return wno;
    }
    public void setWno(int wno) {
        this.wno = wno;
    }
    public int getBno() {
        return bno;
    }
    public void setBno(int bno) {
        this.bno = bno;
    }
    public int getMutual() {
        return mutual;
    }
    public void setMutual(int mutual) {
        this.mutual = mutual;
    }
    public int getRpstName() {
        return rpstName;
    }
    public void setRpstName(int rpstName) {
        this.rpstName = rpstName;
    }
    public int getIndustry() {
        return industry;
    }
    public void setIndustry(int industry) {
        this.industry = industry;
    }
    public int getItems() {
        return items;
    }
    public void setItems(int items) {
        this.items = items;
    }
    public int getZcode() {
        return zcode;
    }
    public void setZcode(int zcode) {
        this.zcode = zcode;
    }
    public int getBaddr() {
        return baddr;
    }
    public void setBaddr(int baddr) {
        this.baddr = baddr;
    }
    public int getDaddr() {
        return daddr;
    }
    public void setDaddr(int daddr) {
        this.daddr = daddr;
    }
    public int getStudioName() {
        return studioName;
    }
    public void setStudioName(int studioName) {
        this.studioName = studioName;
    }
    public int getIntroduction() {
        return introduction;
    }
    public void setIntroduction(int introduction) {
        this.introduction = introduction;
    }
    public int getWsContent() {
        return wsContent;
    }
    public void setWsContent(int wsContent) {
        this.wsContent = wsContent;
    }
    public int getFacebook() {
        return facebook;
    }
    public void setFacebook(int facebook) {
        this.facebook = facebook;
    }
    public int getTwitter() {
        return twitter;
    }
    public void setTwitter(int twitter) {
        this.twitter = twitter;
    }
    public int getInstagram() {
        return instagram;
    }
    public void setInstagram(int instagram) {
        this.instagram = instagram;
    }
    
    
}
