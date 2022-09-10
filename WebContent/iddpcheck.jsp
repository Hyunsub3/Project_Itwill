<%@page import="java.sql.ResultSet"%>
<%@page import="java.sql.PreparedStatement"%>
<%@page import="java.sql.Connection"%>
<%@page import="java.sql.DriverManager"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%!static final String DRIVER = "com.mysql.cj.jdbc.Driver";
	static final String DBURL = "jdbc:mysql://localhost:3306/jspdb";
	static final String DBID = "root";
	static final String DBPW = "1234";%>
<%
//String3.jsp
String u_id = request.getParameter("u_id");
//1. 드라이버 로드(생략)
Class.forName(DRIVER);
//2. 디비연결 
Connection con = DriverManager.getConnection(DBURL,DBID,DBPW);
//3. SQL 작성(select) & pstmt객체
String sql = "select * from user_master where u_id=?";
PreparedStatement pstmt = con.prepareStatement(sql);
// ???
pstmt.setString(1, u_id);	
//4. SQL 실행
ResultSet rs = pstmt.executeQuery();
//5. 데이터처리
String result="";
if(rs.next()){
	//아이디 있음 => 아이디 중복
			result="아이디 중복";
} else {
	//아이디 없음 => 아이디 사용 가능
			result="아이디 사용가능";
}

%>
<%=result %>