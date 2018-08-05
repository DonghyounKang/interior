package bitcamp.java106.pms.dao;

import java.util.List;
import java.util.Map;

import bitcamp.java106.pms.domain.Workshop;

public interface WorkshopDao {
    int insert(Workshop workshop);  // 공방 관련 판매자 등록하기!
    int selectOneNumber(int no); // 공방 등록 번호 여부 검사! (있으면 해당 값 리턴)
    int delete(int no) ;
    List<Workshop> selectList(int no);
    List<Workshop> selectListtwo(Map<String,Object> params);
    int update(Workshop workshop);
    Workshop selectOne(int no);

}
