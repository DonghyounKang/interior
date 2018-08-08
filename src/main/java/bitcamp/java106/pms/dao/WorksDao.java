package bitcamp.java106.pms.dao;

import java.util.HashMap;
import java.util.List;

import bitcamp.java106.pms.domain.Works;

public interface WorksDao {
    int delete(int no) ;
    List<Works> selectList();
    int insert(Works works);
    int update(Works works);
    Works selectOne(int worksNumber);
    List<Works> selectAdList(int no);
    Object getCurrentState(int no);
    int insertBuscket(HashMap<String, Object> params);
    List<Object> selectBuscketList(int buyerNumber); // 장바구니에 담긴 공방별제품 목록
    List<String> searchBuscketWorkshop(int buyerNumber); // 장바구니에 담긴 공방이름 목록
}






