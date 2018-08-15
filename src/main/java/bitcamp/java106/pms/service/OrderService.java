package bitcamp.java106.pms.service;

import java.util.List;

import org.springframework.web.multipart.MultipartFile;

import bitcamp.java106.pms.domain.Odnwk;
import bitcamp.java106.pms.domain.Order;
import bitcamp.java106.pms.domain.Wsav;

public interface OrderService {
    // 서비스 컴포넌트에서 메서드명을 지을 때는 
    // 업무 용어를 사용하라!
    List<Order> list(int no);
    Order get(int no);
    int update(Order order);
    
    //관리자 전용
    int adUpdate(Order order);
    Object adGet(int no);
    List<Object> adList(int no);
    void add(Order order); // 주문
    List<Integer> AllOrderNumber();
}