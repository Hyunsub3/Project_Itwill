package com.cinemaw.point.db;

import java.sql.Date;

public class PointDTO2 {
	
		
	private String r_id;
	private int r_user_point;
	private int total;
	
	
	public String getR_id() {
		return r_id;
	}
	public void setR_id(String r_id) {
		this.r_id = r_id;
	}
	public int getR_user_point() {
		return r_user_point;
	}
	public void setR_user_point(int r_user_point) {
		this.r_user_point = r_user_point;
	}
	public int getTotal() {
		return total;
	}
	public void setTotal(int total) {
		this.total = total;
	}
	
	public String toString(){
		
		return "toString : " + this.getR_id() +"  "+ this.getR_user_point() +"  "+ this.getTotal();
	}
	
	
}
