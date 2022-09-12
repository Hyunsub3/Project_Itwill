package com.cinemaw.point.db;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

public class PointDAO {

		private Connection con = null; 
		private PreparedStatement pstmt = null; 
		private ResultSet rs = null;
		private String sql = "";

		
		//디비 연결
		private Connection getConnect() throws Exception {
			String DRIVER = "com.mysql.cj.jdbc.Driver";
			String DBURL = "jdbc:mysql://localhost:3306/jspdb";
			String DBID = "root";
			String DBPW = "1234"; 
			
			// 1. 드라이버 로드 
			Class.forName(DRIVER);
			System.out.println("드라이버로드 성공!");
			
			//2. 디비연결
			con = DriverManager.getConnection(DBURL, DBID, DBPW);
			System.out.println("디비연결 성공");
			System.out.println("con :"+con);
			
			return con;
		} //디비연결
		
		
		//자원해제
		public void closeDB(){
			
				try {
					if(rs != null) rs.close();
					if(pstmt !=null) pstmt.close();
					if(con!=null)
					con.close();
				} catch (SQLException e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				}
			
		}
		//자원해제
		
		//포인트 목록 조회 (all) - getPoint() 
		public List<PointDTO> getPointList(){
			
			List<PointDTO> pointList = new ArrayList<PointDTO>();
			
			//DB테이블에 있는 데이터를 꺼내오기
			
			try {
				//1. 드라이버 로드
				//2. 디비연결
				con = getConnect();
				//3. sql 작성 & pstmt 객체
				sql = "select * from point";
				pstmt =con.prepareStatement(sql);
				
				//4. sql 실행
				rs = pstmt.executeQuery();
				
				//5. 데이터 처리 
				while(rs.next()){
					PointDTO dto = new PointDTO();
					dto.setU_id(rs.getString("u_id"));
					dto.setP_seq(rs.getInt("p_seq"));
					dto.setP_type(rs.getString("p_type"));
					dto.setPoint(rs.getInt("point"));
					dto.setP_dt(rs.getDate("p_dt"));
					
					pointList.add(dto);
					
				}
				
			} catch (Exception e) {
				e.printStackTrace();
			}
			
			return pointList;
			
			
			
			
			}
		
	   }


