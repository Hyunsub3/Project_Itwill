package com.cinemaw.point.db;

import java.sql.Date;

public class PointDTO {
	
	private String u_id; //아이디
	private int p_seq;  //포인트 일련번호
	private String p_type; //포인트 유형
	private int point; //포인트
	private Date p_dt; //포인트 지급 날짜
	private int total; //포인트 합계
	
	
	
	
	public int getTotal() {
		return total;
	}
	public void setTotal(int total) {
		this.total = total;
	}
	
	
	public String getU_id() {
		return u_id;
	}
	public void setU_id(String u_id) {
		this.u_id = u_id;
	}
	public int getP_seq() {
		return p_seq;
	}
	public void setP_seq(int p_seq) {
		this.p_seq = p_seq;
	}
	public String getP_type() {
		return p_type;
	}
	public void setP_type(String p_type) {
		this.p_type = p_type;
	}
	public int getPoint() {
		return point;
	}
	public void setPoint(int point) {
		this.point = point;
	}
	public Date getP_dt() {
		return p_dt;
	}
	public void setP_dt(Date p_dt) {
		this.p_dt = p_dt;
	}
	
	public String toString(){
		
		return "toString : " + this.getP_type() + this.getU_id() + this.getP_seq() + this.getPoint();
	}
	
	
}
