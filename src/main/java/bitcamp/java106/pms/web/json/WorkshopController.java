package bitcamp.java106.pms.web.json;

import java.io.File;
import java.util.HashMap;
import java.util.UUID;

import javax.servlet.ServletContext;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import bitcamp.java106.pms.domain.Workshop;
import bitcamp.java106.pms.domain.Wspho;
import bitcamp.java106.pms.service.MemberService;
import bitcamp.java106.pms.service.WorkshopService;
import bitcamp.java106.pms.service.WsphoService;

@RestController
@RequestMapping("/workshop")
public class WorkshopController {

    @Autowired ServletContext sc;
    WorkshopService workshopService;
    MemberService memberService;
    WsphoService wsphoService;
    
    public WorkshopController(
            WorkshopService workshopService) {
        this.workshopService = workshopService;
    }
    
    @RequestMapping("add")
    @ResponseStatus(HttpStatus.CREATED)
    public void add(Workshop workshop) throws Exception {
        workshopService.add(workshop);
    }
    
    @RequestMapping("addwspho")
    @ResponseStatus(HttpStatus.CREATED)
    public void addwspho(Wspho wspho) throws Exception {
        workshopService.add(wspho);
    }
    
    @RequestMapping("addfile")
    @ResponseStatus(HttpStatus.CREATED)
    public Object addfile(Workshop workshop, MultipartFile files) throws Exception {
            
        HashMap<String,Object> jsonData = new HashMap<>();
        
        String filesDir = sc.getRealPath("/files");
        
        String filename = UUID.randomUUID().toString();
        jsonData.put("filename", filename);
        jsonData.put("filesize", files.getSize());
        jsonData.put("originname", files.getOriginalFilename());
        try {
            File path = new File(filesDir + "/" + filename);
            System.out.println(path);
            files.transferTo(path);
        } catch (Exception e) {
            e.printStackTrace();
        }
        return jsonData;
        //workshopService.addfile(workshop, jsonData);
    }
    
    @RequestMapping("isExist/{isExistNo}") 
    public boolean isExist(@PathVariable int isExistNo) throws Exception {
        return workshopService.isExist(isExistNo); // 판매자 신청을 완료한 경우
    }
    
    @RequestMapping("delete")
    //@ResponseStatus(HttpStatus.OK) // 응답 상태 코드 값의 기본은 "200(OK)" 이다.
    public void delete(@RequestParam("no") int no) throws Exception {
        workshopService.delete(no);
    }
    
    
    @RequestMapping("list")
    public Object list(int no) {        
        return workshopService.list(no);
    }
    
    @RequestMapping("listtwo")
    public Object listtwo(
            @RequestParam("pageNo") int pageNo,
            @RequestParam("pageSize") int pageSize) {        
        return workshopService.listtwo(pageNo, pageSize);
    }
    
    @RequestMapping("listSellerSite")
    public Object listSellerSite() {        
        return workshopService.listSellerSite();
    }
    
    @RequestMapping("update")
    @ResponseStatus(HttpStatus.OK) // 기본 값이 OK 이다. 
    public void update(Workshop workshop) throws Exception {
        workshopService.update(workshop);
    }
    
    @RequestMapping("{no}")
    public Workshop view(@PathVariable int no) throws Exception {
        return workshopService.get(no);
    }
    
    
    
//    @RequestMapping("delete")
//    public void delete(@RequestParam("no") int no) throws Exception {
//        workshopService.delete(no);
//    }
//    
//    @RequestMapping("list{page}")
//    public Object list(
//            @MatrixVariable(defaultValue="1") int pageNo,
//            @MatrixVariable(defaultValue="3") int pageSize) {
//        return workshopService.list(pageNo, pageSize);
//    }
//    
//    @RequestMapping("update")
//    @ResponseStatus(HttpStatus.OK)
//    public void update(Member member) throws Exception {
//        workshopService.update(member);
//    }
//    
//    @RequestMapping("{id}")
//    public Member view(@PathVariable String id) throws Exception {
//        return workshopService.get(id);
//    }
//    
}



