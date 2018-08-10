// 업무로직 구현체 - 고객사 마다 다른 구현을 할 수 있다.
package bitcamp.java106.pms.service.impl;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;

import org.springframework.stereotype.Service;
 
import bitcamp.java106.pms.dao.MainDao;
import bitcamp.java106.pms.dao.TagDao;
import bitcamp.java106.pms.dao.WorksDao;
import bitcamp.java106.pms.dao.WorksOptionDao;
import bitcamp.java106.pms.dao.WorksPhotoDao;
import bitcamp.java106.pms.domain.Tag;
import bitcamp.java106.pms.domain.Works;
import bitcamp.java106.pms.domain.WorksOption;
import bitcamp.java106.pms.domain.WorksPhoto;
import bitcamp.java106.pms.service.WorksService;

@Service
public class WorksServiceImpl implements WorksService {
    
    WorksDao worksDao;
    MainDao mainDao;
    WorksOptionDao worksOptionDao;
    WorksPhotoDao worksPhotoDao;
    TagDao tagDao;

    
    public WorksServiceImpl(WorksDao worksDao, MainDao mainDao,
            WorksOptionDao worksOptionDao, WorksPhotoDao worksPhotoDao, TagDao tagDao) {
        this.worksDao = worksDao;
        this.mainDao = mainDao;
        this.worksOptionDao = worksOptionDao;
        this.worksPhotoDao = worksPhotoDao;
        this.tagDao = tagDao;
    }
    
    @Override
    public List<Works> list() {
        
        return worksDao.selectList();
    }
    
    @Override
    public Works get(int no) {
        return worksDao.selectOne(no);
    }
    
    @Override
    public void add(Works works, ArrayList<WorksPhoto> worksPhotos) {
        
        worksDao.insert(works);
        WorksOption option = new WorksOption();
        String tagResult = Arrays.toString(works.getWorksCategory());
        String[] urlArr = (tagResult.substring(1, tagResult.length()-1)).split(", ");
        
        int worksNo =  worksDao.selectRecent().getWorksNumber();
        
        for(int i = 0; i < worksPhotos.size(); i++) {
           WorksPhoto worksPhoto = worksPhotos.get(i);
           if(i == 1) {
               worksPhoto.setMainPhoto("Y");
           }
           worksPhoto.setWorksNumber(worksNo);
           worksPhotoDao.insert(worksPhoto);
        }
        
        option.setAttributeValue(works.getOption().getAttributeValue());
        option.setWorksNumber(worksNo);
        
        worksOptionDao.insert(option);

        
        for(int i = 0; i < urlArr.length; i++) {
            Tag tag = new Tag();
            tag.setTagName(urlArr[i]);
            tagDao.insert(tag);
            int tagNo = tagDao.getRecent().getHashTagNo();
            
            Tag match = new Tag();
            match.setWorksMatchNo(worksNo);
            match.setHashTagNo(tagNo);
            System.out.println(match.getHashTagNo());
            System.out.println(match.getWorksMatchNo());
            System.out.println();
            tagDao.matchInsert(match);

        }
        
     
    }
    
    @Override
    public int update(Works works) {
       return worksDao.update(works);
    }
    
    @Override
    public int delete(int no) {
        return worksDao.delete(no);
    }

    @Override
    public List<Works> listWithHashtag(String hashtag) {
        return mainDao.selectListWithHashtag(hashtag);
    }
    
    @Override
    public Object getWorksPhotoOption(int worksNumber) {
        // 해당 번호를 이용하여 작품, 옵션, 사진 가져오기
        // 1) 작품
        Works works = worksDao.selectOne(worksNumber);
        // 2) 작품옵션
        List<WorksOption> worksOption = worksOptionDao.selectList(worksNumber);
        // 3) 사진
        List<WorksPhoto> worksPhoto = worksPhotoDao.selectList(worksNumber);
        
        // hash를 이용하여 값을 저장
        HashMap<String, Object> params = new HashMap<>();
        
        params.put("worksNumber", works.getWorksNumber());
        params.put("workshopNumber", works.getWorkshopNumber());
        params.put("title", works.getTitle());
        params.put("price", works.getPrice());
        params.put("registeredDate", works.getRegisteredDate());
        params.put("capacity", works.getCapacity());
        params.put("salesStatus", works.getSalesStatus());
        params.put("productDetail", works.getProductDetail());
        params.put("deliveryPrice", works.getDeliveryPrice());
        params.put("modifiedDate", works.getModifiedDate());
        
        params.put("worksOption", worksOption);
        params.put("worksPhoto", worksPhoto);
        
        System.out.println(worksOption);
        System.out.println(worksPhoto);
        return params; 
    }
    
    // 장바구니 담기
    @Override
    public int addBuscket(int worksNumber, int memberNumber, int optionNumber) {
        HashMap<String, Object> params = new HashMap<>();
        params.put("worksNumber", worksNumber);
        params.put("memberNumber", memberNumber);
        params.put("optionNumber", optionNumber);
        return worksDao.insertBuscket(params);
    }
    
    // 장바구니 리스트 - 해당 공방 안에 담긴 제품을 출력하는 메서드
    @Override
    public List<Object> getBuscketList(int buyerNumber) {
        return worksDao.selectBuscketList(buyerNumber);
    }
    
    // 장바구니 리스트 - 해당 회원이 공방을 찾는 메서드
    @Override
    public List<Object> viewBuscketWorkshopList(int buyerNumber) {
        return worksDao.searchBuscketWorkshop(buyerNumber);
    }
    
    @Override
    public List<Works> adminList(int no) {
        return worksDao.selectAdList(no);
    }
    
    @Override
    public Object getCurrentState(int no) {
        return worksDao.getCurrentState(no);
    }
    
}

//ver 53 - 클래스 추가






