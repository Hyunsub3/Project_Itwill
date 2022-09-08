package com.cinemaw.member.db;

import java.sql.*;
import java.util.ArrayList;

public class MemberDAO2 {
	// DAO : 데이터베이스 접근 객체_실질적으로 DB에서 회원정보를 불러오거나 넣을 때 사용

	private Connection con;
	private PreparedStatement pstmt;
	private ResultSet rs;
	int count = 0;

	public MemberDAO2() {

		String DBURL = "jdbc:mysql://localhost:3306/jspdb";
		String DBID = "root";
		String DBPW = "1234";

		try {
			// jdbc드라이버로딩
			Class.forName("com.mysql.cj.jdbc.Driver");
			// connection 얻어오기
			con = DriverManager.getConnection(DBURL, DBID, DBPW);

		} catch (Exception e) {
			e.printStackTrace();
		}
	}

	public int memberLogin(String loginId, String loginPw) {
		// sql문 준비 - 현재 db에 저장된 정보를 불러오는 sql 문
		String DBURL = "jdbc:mysql://localhost:3306/jspdb";
		String DBID = "root";
		String DBPW = "1234";
		String sql = "select u_pw from user_master where u_id=?";
		try {
			// 바인딩 - pstmt를 통해 DB와의 통로 연결
			pstmt = con.prepareStatement(sql);
			pstmt.setString(1, loginId);
			// 실행 - 데이터베이스에서 정보를 받아와서 확인할땐 executeQuery(); 를 사용한다
			rs = pstmt.executeQuery();

			if (rs.next()) {
				// 패스워드가 일치한다면 진행
				if (rs.getString(1).equals(loginPw)) {
					return 1;// 로그인성공
				} else if (!rs.getString(1).equals(loginPw)) {
					return 0;// 비밀번호 불일치
				} else {
					return -1;
				}
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		return -2; // 데이터베이스 오류

	}
}
