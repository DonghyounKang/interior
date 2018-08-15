package bitcamp.java106.pms.web.json;

import java.util.HashMap;
import java.util.List;

import javax.servlet.ServletContext;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import bitcamp.java106.pms.domain.Member;
import bitcamp.java106.pms.domain.Order;
import bitcamp.java106.pms.service.OrderService;

@RestController
@RequestMapping("/order")
public class OrderController {
    
    @Autowired ServletContext sc;
    
    OrderService orderService;
    
    public OrderController(OrderService orderService) {
        this.orderService = orderService;
    }

    //관리자 list
    @RequestMapping("adList")
    public Object adList(HttpSession session) {
        Member member = (Member)session.getAttribute("loginUser");
        int no = member.getNo();
        return orderService.adList(no);
    }
    
    //관리자 update
    @RequestMapping("adUpdate")
    @ResponseStatus(HttpStatus.OK) // 기본 값이 OK 이다. 
    public Object adUpdate(Order order) throws Exception {
        return orderService.adUpdate(order);
    }
    
    //관리자 view
    @RequestMapping("adView/{no}")
    public Object adView(@PathVariable int no) throws Exception {
        return orderService.adGet(no);
    }
    
    //관리자 클레임 list
    @RequestMapping("returnList")
    public Object returnList(HttpSession session) {
        Member member = (Member)session.getAttribute("loginUser");
        int no = member.getNo();
        return orderService.returnList(no);
    }
    
    @RequestMapping("getReturnState") 
    public Object getCurrentState(HttpSession session) {
        Member member = (Member)session.getAttribute("loginUser");
        int no = member.getNo();
        return orderService.getReturnState(no);
    }
    
    //관리자 update
    @RequestMapping("finClaim")
    @ResponseStatus(HttpStatus.OK) // 기본 값이 OK 이다. 
    public int finClaim(@RequestBody String qs) throws Exception {
        return orderService.finClaim(qs);
    }
    //관리자 update
    @RequestMapping("chngExchange")
    @ResponseStatus(HttpStatus.OK) // 기본 값이 OK 이다. 
    public int chngExchange(@RequestBody String qs) throws Exception {
        return orderService.chngExchange(qs);
    }
    //관리자 update
    @RequestMapping("chngReturn")
    @ResponseStatus(HttpStatus.OK) // 기본 값이 OK 이다. 
    public int chngReturn(@RequestBody String qs) throws Exception {
        return orderService.chngReturn(qs);
    }
    
    @RequestMapping("rejSelectList")
    public Object adList(int no, HttpSession session) {
        System.out.println(no);
        Member member = (Member)session.getAttribute("loginUser");
        int userNo = member.getNo();
        System.out.println(userNo);
        return orderService.rejSelectList(no, userNo);
    }
    
    
    // 전체 주문번호
    @RequestMapping("allOrderNumber")
    public List<Integer> allOrderNumber() {
        return orderService.AllOrderNumber();
    }
    
    
    //list
    @RequestMapping("list")
    public Object list(int no) {
        // 여기는 주문 번호 조회용으로 리스트 출력!
        return orderService.list(no);
    }
    
    // 결제시 주문 추가
    @RequestMapping("add")
    @ResponseStatus(HttpStatus.CREATED)
    public void add(Order order, HttpSession session) throws Exception {
        Member member = (Member) session.getAttribute("loginUser");
        
        // 회원번호 등록
        order.setMemberNo(member.getNo());
        
        // 주문번호 등록
        order.setNo(order.getNo());
        order.setOrderState("결제완료");
        
        orderService.add(order);
        
    }
    
    //add
//    @RequestMapping("add")
//    @ResponseStatus(HttpStatus.CREATED)
//    public void add(Order order) throws Exception {
//        orderService.add(order);
//    }
    
    
    //list
//    @RequestMapping("list")
//    public Object list(int no) {        
//        return orderService.list(no);
//    }
    
    //update
//    @RequestMapping("update")
//    @ResponseStatus(HttpStatus.OK) // 기본 값이 OK 이다. 
//    public Object update(Order order) throws Exception {
//        
//        return orderService.update(order);
//    }
    
   
    //view   
//    @RequestMapping("{no}")
//    public Order view(@PathVariable int no) throws Exception {
//        return orderService.get(no);
//    }

}