package bitcamp.java106.pms.dao;

import bitcamp.java106.pms.domain.Tag;

public interface TagDao {

    //Tag 삽입
    void insert(Tag tag);
    //저장한 최근 Tag가져오기
    Tag getRecent();
    //태그번호와 작품번호 매칭
    void matchInsert(Tag match);

}
