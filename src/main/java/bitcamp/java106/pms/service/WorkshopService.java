package bitcamp.java106.pms.service;

import bitcamp.java106.pms.domain.Member;

public interface WorkshopService {
    int add(Member member);  // 판매자 신청 관련
    boolean isExist(int no); // 이미 판매자 신청이 되어 있는 경우 여부 검사
}
