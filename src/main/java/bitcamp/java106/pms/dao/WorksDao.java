package bitcamp.java106.pms.dao;

import java.util.List;

import bitcamp.java106.pms.domain.Works;

public interface WorksDao {
    int delete(int no) ;
    List<Works> selectList();
    int insert(Works works);
    int update(Works works);
    Works selectOne(int no);
    //WorkOption optionName(int no); // 옵션 가져오기
}






