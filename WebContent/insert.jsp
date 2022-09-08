<%@ page language="java" contentType="text/html; charset=EUC-KR"
	pageEncoding="UTF-8"%>
<%@page import="jsppack.*"%>
<%
	String id = request.getParameter("signupId");
	String password = request.getParameter("signupPw");
	String name = request.getParameter("signupName");
	String nick = request.getParameter("signupNickname");
	String email = request.getParameter("signupEmail1") + "@" + request.getParameter("signupEmail2");

	MemberVo vo = new MemberVo();
	vo.setId(id);
	vo.setPw(password);
	vo.setName(name);
	vo.setNickname(nick);
	vo.setEmail(email);

	MemberDAO dao = new MemberDAO();
	dao.MemberInsert(vo);
	response.sendRedirect("main.html");
%>
<!DOCTYPE html>
<html>
<head>
<meta charset="EUC-KR">
<title>처리중</title>
</head>
<body>

</body>
</html>