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
    //WorkOption optionName(int no); // 옵션 가져오기
    List<Works> selectAdList(int no);
    Object getCurrentState(int no);
    int insertBuscket(HashMap<String, Object> params);
}






