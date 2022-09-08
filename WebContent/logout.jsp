<%@ page language="java" contentType="text/html; charset=EUC-KR"
	pageEncoding="UTF-8"%>
<%@ page import="java.sql.*"%>
<%@ page import="java.io.PrintWriter"%>
<%@ page import="jsppack.*"%>
<%
	PrintWriter script = response.getWriter();
	script.println("<script>");
	script.println("sessionStorage.removeItem('id')");
	script.println("alert('로그아웃 되었습니다')");
	script.println("location.href=('main.html')");
	script.println("</script>");
%>
<!DOCTYPE html>
<html>
<head>
<meta charset="EUC-KR">
<title>로그아웃 중</title>
</head>
<body>

</body>
</html>