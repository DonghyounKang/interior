// 서비스 컴포넌트 - 게시물 관련 업무를 처리할 객체
package bitcamp.java106.pms.service;

import java.util.ArrayList;
import java.util.List;

import bitcamp.java106.pms.domain.WorksOption;
import bitcamp.java106.pms.domain.WorksPhoto;
import bitcamp.java106.pms.domain.Wkacp;
import bitcamp.java106.pms.domain.Works;

public interface WorksService {
    // 서비스 컴포넌트에서 메서드명을 지을 때는 
    // 업무 용어를 사용하라!
    List<Works> list();
    Works get(int no);
    void add(Works works);
    int update(Works works);
    int delete(int no);
    List<Works> listWithHashtag(String hashtag);
    Object getWorksPhotoOption(int worksNumber); // 작품, 옵션, 사진 가져오는 메소드
    List<Works> adminList(int no);
    Object getCurrentState(int no); 
    int addBuscket(int worksNumber, int memberNumber, int optionNumber); // 여기는 장바구니 담는 용도
    Object getBusketList(int workshopNumber, int memberNumber); // 여기는 장바구니를 해당 조건에 맞는 리스트 출력
}

//ver 53 - 인터페이스 추가






