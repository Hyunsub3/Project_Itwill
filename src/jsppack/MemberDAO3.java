package jsppack;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;

public class MemberDAO3 {
	private Connection con;
	private PreparedStatement pstmt;
	private ResultSet rs;
	int count;

	public MemberDAO3(MemberVo2 vo) {
		count++;
		String DBURL = "jdbc:mysql://localhost:3306/movieswill";
		String DBID = "root";
		String DBPW = "1234";
		try {
			// jdbc드라이버로딩
			Class.forName("com.mysql.cj.jdbc.Driver");
			// connection 얻어오기
			con = DriverManager.getConnection(DBURL, DBID, DBPW);
			// sql문 준비
			String sql = "insert into moviereserv (title,theater,city,area,reservid) values (?,?,?,?,?)";
			pstmt = con.prepareStatement(sql);
			// 바인딩
			pstmt.setString(1, vo.getMovieTitle());
			pstmt.setString(2, vo.getTheaterSelect());
			pstmt.setString(3, vo.getCitySelect());
			pstmt.setString(4, vo.getAreaSelect());
			pstmt.setString(5, vo.getReservid());
			// 데이터베이스에 데이터 넣을때 쓰는 문구
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
