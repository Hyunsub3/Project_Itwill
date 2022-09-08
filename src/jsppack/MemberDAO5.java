package jsppack;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.*;

public class MemberDAO5 {
	private Connection con;
	private PreparedStatement pstmt;
	private ResultSet rs;

	public MemberDAO5(MemberVo3 vo) {
		String DBURL = "jdbc:mysql://localhost:3306/movieswill";
		String DBID = "root";
		String DBPW = "1234";

		try {
			Class.forName("com.mysql.cj.jdbc.Driver");

			con = DriverManager.getConnection(DBURL, DBID, DBPW);
			String sql = "delete from moviereserv where reservid=?";
			pstmt = con.prepareStatement(sql);
			pstmt.setString(1, vo.getReservid());

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
