<%@page import="com.cinemaw.member.db.MemberVo"%>
<%@ page language="java" contentType="text/html; charset=EUC-KR"
	pageEncoding="UTF-8"%>
<%@ page import="java.sql.*"%>
<%@ page import="java.io.PrintWriter"%>
<%@ page import="jsppack.*"%>


<%
	MemberDAO2 dao = new MemberDAO2();
	MemberVo vo = new MemberVo();
	String id = request.getParameter("loginId");
	String pw = request.getParameter("loginPw");

	int result = dao.memberLogin(id, pw);

	//로그인 성공
	if (result == 1) {
		PrintWriter script = response.getWriter();
		script.println("<script>");
		script.println("sessionStorage.setItem('id','" + id + "')");
		script.println("alert('로그인성공')");
		script.println("location.href='main.html'");
		script.println("</script>");
	} else if (result == 0) {
		PrintWriter script = response.getWriter();
		script.println("<script>");
		script.println("alert('비밀번호가 틀립니다')");
		script.println("history.back()");
		script.println("</script>");
	} else if (result == -1) {
		PrintWriter script = response.getWriter();
		script.println("<script>");
		script.println("alert('존재하지 않는 아이디입니다')");
		script.println("history.back()");
		script.println("</script>");
	} else if (result == -2) {
		PrintWriter script = response.getWriter();
		script.println("<script>");
		script.println("alert('DB오류입니다 잠시 기다려주십시오')");
		script.println("location.href='main.html'");
		script.println("</script>");
	}
%>
<!DOCTYPE html>
<html>
<head>
<meta charset="EUC-KR">
<title>처리 중</title>
</head>
<body>

</body>
</html>