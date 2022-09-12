package com.cinemaw.point.db;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;

public class PointDAO2 {

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
		public List<PointDTO2> getPointList2(){
			
			List<PointDTO2> pointList2 = new ArrayList<PointDTO2>();
			
			//DB테이블에 있는 데이터를 꺼내오기
			
			try {
				//1. 드라이버 로드
				//2. 디비연결
				con = getConnect();
				//3. sql 작성 & pstmt 객체
				sql = "select * from reserve_info;";
				Statement stmt = con.createStatement();
				pstmt =con.prepareStatement(sql);
				
				//4. sql 실행
				rs = stmt.executeQuery(sql);
				
				//5. 데이터 처리 
				while(rs.next()){
					PointDTO2 dto2 = new PointDTO2();
					dto2.setR_id(rs.getString("r_id"));
					dto2.setR_user_point(rs.getInt("r_user_point"));
					pointList2.add(dto2);
					
				}
				
			} catch (Exception e) {
				e.printStackTrace();
			}
			
			return pointList2;
			
			
			
			
			}
		
		
		//실험 이거는 왜 안되는지 이해가 안됐어요 제가 pstmt 이거 한지가 넘 오래돼서 
//public List<PointDTO2> PointTotal3(){
//			
//			List<PointDTO2> pointList3 = new ArrayList<PointDTO2>();
//			
//			//DB테이블에 있는 데이터를 꺼내오기
//			
//			
//				//1. 드라이버 로드
//				//2. 디비연결
//				try {
//					con = getConnect();
//					//3. sql 작성 & pstmt 객체
//					sql = "select sum(r_user_point) as 'total' from reserve_info;";
//					pstmt =con.prepareStatement(sql);
//					
//					//4. sql 실행
//					rs = pstmt.executeQuery();
//					String test = rs.getString("total");
//					
//					System.out.print("실행");
//					//5. 데이터 처리
//						PointDTO2 dto3 = new PointDTO2(); //이쪽 객체 생성한거랑 다른 껍데기라고,,, 
////						dto3.setTotal(rs.getInt("total"));
////						pointList3.add(dto3);
//						
//				} catch (Exception e) {
//					StackTraceElement[] ste = e.getStackTrace();
//				    String className = ste[0].getClassName();
//				    String methodName = ste[0].getMethodName();
//				    int lineNumber = ste[0].getLineNumber();
//				    String fileName = ste[0].getFileName();
//				    System.out.println("Exception : " + e.getMessage());
//				    System.out.println(className + "." + methodName + " " + fileName + " " + lineNumber + "line");
//				}
//				
//					
//			
//			return pointList3;  
//			
//			
//			
//			
//			}
		
		
		//이걸로 다시작성하고 리턴으로 int(select sum(r_user_point) as 'total' from reserve_info;) 이거 보냅니다
		public int PointTotal3() {
			int result = 0;
			try {
				con = getConnect();
				//3. sql 작성 & pstmt 객체
				sql = "select sum(r_user_point) as 'total' from reserve_info;";
				pstmt =con.prepareStatement(sql);
				
				//4. sql 실행
				rs = pstmt.executeQuery();
	            if(rs.next()) {
	                result = rs.getInt("total");
	            }  

					
			} catch (Exception e) {
				StackTraceElement[] ste = e.getStackTrace();
			    String className = ste[0].getClassName();
			    String methodName = ste[0].getMethodName();
			    int lineNumber = ste[0].getLineNumber();
			    String fileName = ste[0].getFileName();
			    System.out.println("Exception : " + e.getMessage());
			    System.out.println(className + "." + methodName + " " + fileName + " " + lineNumber + "line");
			}
			return result;
		}
		
	   }


