package bitcamp.java106.pms.domain;

import java.io.Serializable;

public class Tag implements Serializable {
    private static final long serialVersionUID = 1L;

    private int no; /* 해시태그번호 */
    private String tagName; /* 해시태그 값*/
    
    

    public int getNo() {
        return no;
    }
    public void setNo(int no) {
        this.no = no;
    }
    public String getTagName() {
        return tagName;
    }
    public void setTagName(String tagName) {
        this.tagName = tagName;
    }
}
