<%@page import="com.cinemaw.member.db.MemberDAO5"%>
<%@page import="com.cinemaw.member.db.MemberVo3"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@page import="java.sql.*" import="jsppack.*"
	import="java.io.PrintWriter"%>
<%
	String reservid = request.getParameter("hiddenid");
	out.println(reservid);

	MemberVo3 vo = new MemberVo3();
	vo.setReservid(reservid);
	MemberDAO5 dao = new MemberDAO5(vo);

	response.sendRedirect("main.html");
%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>취소 중</title>
</head>
<body>

</body>
</html>