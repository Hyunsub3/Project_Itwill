package com.cinemaw.member.db;

import java.sql.*;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;

//좌석까지 선택한 후의 데이터베이스 관련 Vo 클래스
public class MemberDAO4 {
	private Connection con;
	private PreparedStatement pstmt;
	private ResultSet rs;

	public MemberDAO4(MemberVo3 vo) {
		String DBURL = "jdbc:mysql://localhost:3306/movieswill";
		String DBID = "root";
		String DBPW = "1234";

		try {
			Class.forName("com.mysql.cj.jdbc.Driver");

			con = DriverManager.getConnection(DBURL, DBID, DBPW);
			String sql = "update moviereserv set sitnumber=?,reservdate=?,reservadult=?,reservteen=?,reservkids=? where reservid=?;";

			pstmt = con.prepareStatement(sql);
			pstmt.setString(1, vo.getSitnum());
			pstmt.setString(2, vo.getDatetime());
			pstmt.setString(3, vo.getReservAdult());
			pstmt.setString(4, vo.getReservTeen());
			pstmt.setString(5, vo.getReservKid());
			pstmt.setString(6, vo.getReservid());
			pstmt.executeUpdate();
		} catch (Exception e) {
			e.printStackTrace();
		} finally {
			try {
				con.close();
				pstmt.close();
			} catch (Exception e) {
				e.printStackTrace();
			}
		}
	}
}