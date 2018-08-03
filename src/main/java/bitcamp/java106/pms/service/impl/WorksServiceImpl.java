// 업무로직 구현체 - 고객사 마다 다른 구현을 할 수 있다.
package bitcamp.java106.pms.service.impl;

import java.util.HashMap;
import java.util.List;

import org.springframework.stereotype.Service;

import bitcamp.java106.pms.dao.WorksDao;
import bitcamp.java106.pms.domain.WorkOption;
import bitcamp.java106.pms.domain.Works;
import bitcamp.java106.pms.service.WorksService;

@Service
public class WorksServiceImpl implements WorksService {
    
    WorksDao worksDao;
    
    public WorksServiceImpl(WorksDao worksDao) {
        this.worksDao = worksDao;
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
    public WorkOption OptionValue(int no) {
        System.out.println("worksService() 정상처리");
        return worksDao.optionName(no);
    }
}







