package com.cinemaw.member.db;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;

public class MemberDAO {
	// DAO : 데이터베이스 접근 객체_실질적으로 DB에서 회원정보를 불러오거나 넣을 때 사용함
	
	// 공통변수 (인스턴스 변수)
	private Connection con = null; // 디비 연결정보 저장 객체
	private PreparedStatement pstmt = null; // 디비에 SQL 실행 처리 객체
	private ResultSet rs = null; // select 실행 결과 저장 객체
	private String sql = ""; // SQL쿼리 구문 저장
	int count = 0;
	
	// 디비 연결
	// private Connection getConnect() throws Exception{
	
	
	// mysql에 접속하는 부분
	public void MemberInsert(MemberVo vo) {
		// 생성자, 실행될때마다 자동으로 DB연결이 이루어지게함
		try {
			// jdbc드라이버 로딩
			String DRIVER = "com.mysql.cj.jdbc.Driver";
			String DBURL = "jdbc:mysql://localhost:3306/movieswill";
			String DBID = "root";
			String DBPW = "1234";
			// connection 얻어오기
			Class.forName(DRIVER);
			con = DriverManager.getConnection(DBURL, DBID, DBPW);
			// Sql문 준비
			// String sql = "insert into user_master(u_id, u_pw, u_nm) values
			// (?,?,?,?,?,?,?,?,?,?,?,?)";
			String sql = "insert into user_master(u_id, u_pw, u_nm, birth) values ('test2','2222','회원','19880606')";
			pstmt = con.prepareStatement(sql);
			// 바인딩
			// pstmt.setString(1, vo.getId());
			// pstmt.setString(2, vo.getPw());
			// pstmt.setString(3, vo.getName());
			// pstmt.setString(4, vo.getNickname());
			// pstmt.setString(5, vo.getEmail());
			
			// 실행
			count = pstmt.executeUpdate();
			if (count > 0) {
				System.out.println("가입완료");
			}

		} catch (Exception e) {
			e.printStackTrace();
		} finally {
			try {
				// 준비했던 DB연결문들 종료
				con.close();
				pstmt.close();
			} catch (Exception e) {
				e.printStackTrace();
			}
		}
	}

}