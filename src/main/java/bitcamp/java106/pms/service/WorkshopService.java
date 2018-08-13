package bitcamp.java106.pms.service;

import java.util.List;

import bitcamp.java106.pms.domain.Workshop;
import bitcamp.java106.pms.domain.Wspho;

public interface WorkshopService {
    int add(Workshop workshop);  // 판매자 신청 관련 데이터 삽입 내용
    int add(Wspho wspho);
    int addIntroduce(Wspho wspho);
    boolean isExist(int no); // 이미 판매자 신청이 되어 있는 경우 여부 검사
    List<Workshop> selectPopularList();
    List<Workshop> list(int no);
    List<Workshop> listtwo(int pageNo, int pageSize);
    List<Workshop> listSellerSite();
    List<Workshop> listIntroduce();
    List<Workshop> listSellerSiteBanner();
    Workshop get(int no);
    int update(Workshop workshop);
    int updateIntroduce(Workshop workshop);
    int delete(int no);
}
