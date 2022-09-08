<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ page import="java.io.PrintWriter"%>
<%@page import="java.sql.*"%>
<%@page import="jsppack.*"%>

<%
	request.setCharacterEncoding("utf-8");
	String selmovie = request.getParameter("selmovie");
	String seltheater = request.getParameter("seltheater");
	String selcity = request.getParameter("selcity");
	String selarea = request.getParameter("selarea");
	String reservid = request.getParameter("reservid");

	MemberVo2 vo = new MemberVo2();
	vo.setMovieTitle(selmovie);
	vo.setTheaterSelect(seltheater);
	vo.setCitySelect(selcity);
	vo.setAreaSelect(selarea);
	vo.setReservid(reservid);

	MemberDAO3 dao = new MemberDAO3(vo);
	response.sendRedirect("reservation2.html");

	/* out.println(test);
	out.println(test2);
	out.println(test3);
	out.println(test4);
	out.println("준비중");
	 */
%>
<!DOCTYPE html>
<html>
<head>
<meta charset="EUC-KR">
<title>Insert title here</title>
</head>
<body>

</body>
</html>