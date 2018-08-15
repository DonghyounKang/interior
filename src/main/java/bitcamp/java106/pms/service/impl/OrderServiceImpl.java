// 업무로직 구현체 - 고객사 마다 다른 구현을 할 수 있다.
package bitcamp.java106.pms.service.impl;

import java.util.HashMap;
import java.util.List;

import org.springframework.stereotype.Service;

import bitcamp.java106.pms.dao.OdnwkDao;
import bitcamp.java106.pms.dao.OrderDao;
import bitcamp.java106.pms.dao.WorksDao;
import bitcamp.java106.pms.domain.Order;
import bitcamp.java106.pms.service.OrderService;

@Service
public class OrderServiceImpl implements OrderService {
    
    OrderDao orderDao;
    WorksDao worksDao;
    OdnwkDao odnwkDao;
    
    public OrderServiceImpl(OrderDao orderDao, OdnwkDao odnwkDao, WorksDao worksDao) {
        this.orderDao = orderDao;
        this.worksDao = worksDao;
        this.odnwkDao = odnwkDao;
    }
    
    @Override
    public List<Order> list(int no) {
        return orderDao.selectList(no);
    }
    
    @Override
    public Order get(int no) {
        return orderDao.selectOne(no);
    }
    
    
    @Override
    public void add(Order order) {
        orderDao.insert(order);
    }
    
    @Override
    public int update(Order order) {
        
        return orderDao.update(order);
    }

    
    //관리자 전용
    @Override
    public int adUpdate(Order order) {
        return orderDao.adUpdate(order);
    }

    @Override
    public Object adGet(int no) {
        return orderDao.adGet(no);
    }
    
    @Override
    public List<Object> adList(int no) {
        return orderDao.adList(no); 
    }

    @Override
    public List<Object> returnList(int no) {
        return orderDao.returnList(no);
    }

    @Override
    public Object getReturnState(int no) {
        // TODO Auto-generated method stub
        return orderDao.getReturnState(no);
    }

    @Override
    public int finClaim(String qs) {
        System.out.println(qs);
        String[] arr = qs.split("&");
        for(int i = 0; i < arr.length; i++) {
            int no = Integer.parseInt(arr[i].split("=")[1]);
            String status = orderDao.selectStatus(no);
            
            if(status.equals("환불")) {
                System.out.println(status);
                HashMap<String,Object> param = new HashMap<>();
                param.put("wono", no);
                param.put("prstt","환불완료");
                orderDao.finClaim(param);
            }else if(status.equals("교환")) {
                HashMap<String,Object> param = new HashMap<>();
                param.put("wono", no);
                param.put("prstt","교환완료");
                orderDao.finClaim(param);
            }
            System.out.println(status);
        }
        return 1;
    }

    @Override
    public int chngExchange(String qs) {
        System.out.println(qs);
        String[] arr = qs.split("&");
        for(int i = 0; i < arr.length; i++) {
            int no = Integer.parseInt(arr[i].split("=")[1]);
            
            HashMap<String,Object> param = new HashMap<>();
            param.put("wono", no);
            param.put("crqst","교환");
            param.put("prstt","교환신청");
            orderDao.chngExchange(param);
        }
        
        return 1; 
    }

    @Override
    public int chngReturn(String qs) {
        System.out.println(qs);
        String[] arr = qs.split("&");
        for(int i = 0; i < arr.length; i++) {
            int no = Integer.parseInt(arr[i].split("=")[1]);
            
            HashMap<String,Object> param = new HashMap<>();
            param.put("wono", no);
            param.put("crqst","환불");
            param.put("prstt","환불신청");
            orderDao.chngReturn(param);
        }
        return 0; 
    }

    @Override
    public List<Object> rejSelectList(int no, int userNo) {
        
        return null;
    }

    // 전체 주문번호 조회
    @Override
    public List<Integer> AllOrderNumber() {
        return orderDao.selectOrderNumberList();
    }
    
    
    
}