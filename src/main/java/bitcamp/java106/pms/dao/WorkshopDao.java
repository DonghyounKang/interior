package bitcamp.java106.pms.dao;

import bitcamp.java106.pms.domain.Member;

public interface WorkshopDao {
    int insert(Member member);  // 공방 관련 판매자 등록하기!
    int selectOneNumber(int no); // 공방 등록 번호 여부 검사! (있으면 해당 값 리턴)
}
