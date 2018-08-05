// 업무로직 구현체 - 고객사 마다 다른 구현을 할 수 있다.
package bitcamp.java106.pms.service.impl;

import java.util.HashMap;
import java.util.List;

import org.springframework.stereotype.Service;

import bitcamp.java106.pms.dao.MainDao;
import bitcamp.java106.pms.dao.WorksDao;
import bitcamp.java106.pms.dao.WorksOptionDao;
import bitcamp.java106.pms.dao.WorksPhotoDao;
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
    
    public WorksServiceImpl(WorksDao worksDao, MainDao mainDao,
            WorksOptionDao worksOptionDao, WorksPhotoDao worksPhotoDao) {
        this.worksDao = worksDao;
        this.mainDao = mainDao;
        this.worksOptionDao = worksOptionDao;
        this.worksPhotoDao = worksPhotoDao;
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
    public int add(Works works) {
        return worksDao.insert(works);
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
    public Object getWorksPhotoOption(int no) {
        // 해당 번호를 이용하여 작품, 옵션, 사진 가져오기
        // 1) 작품
        Works works = worksDao.selectOne(no);
        // 2) 작품옵션
        List<WorksOption> worksOption = worksOptionDao.selectList(no);
        // 3) 사진
        List<WorksPhoto> worksPhoto = worksPhotoDao.selectList(no);
        
        // hash를 이용하여 값을 저장
        HashMap<String, Object> params = new HashMap<>();
        
        params.put("no", works.getNo());
        params.put("wno", works.getWno());
        params.put("title", works.getTitle());
        params.put("works", works.getPrice());
        params.put("registeredDate", works.getRegisteredDate());
        params.put("capacity", works.getCapacity());
        params.put("salesStatus", works.getSalesStatus());
        params.put("productDetail", works.getProductDetail());
        params.put("deliveryPrice", works.isDeliveryPrice());
        params.put("requestDetail", works.getRequestDetail());
        
        params.put("worksOption", worksOption);
        params.put("worksPhoto", worksPhoto);
        
        System.out.println(worksOption);
        System.out.println(worksPhoto);
        return params;
    }
    
}

//ver 53 - 클래스 추가






