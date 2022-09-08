<%@page import="com.cinemaw.member.db.MemberDAO"%>
<%@page import="com.cinemaw.member.db.MemberVo"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
   pageEncoding="UTF-8"%>

<%

   request.setCharacterEncoding("UTF-8");
   String u_id = request.getParameter("u_id");
   String u_pw= request.getParameter("u_pw");
   String u_nm= request.getParameter("u_nm");
   String birth= request.getParameter("birth");
   String email = request.getParameter("email");
   String phone = request.getParameter("phone");
   String favorit = request.getParameter("favorit");
   String mailing = request.getParameter("mailing");
   
   //System.out.println(mailing);

   MemberVo vo = new MemberVo();
   vo.setU_id(u_id);
   vo.setU_pw(u_pw);
   vo.setU_nm(u_nm);
   vo.setBirth(birth);
   vo.setEmail(email);
   vo.setPhone(phone);
   vo.setFavorit(favorit);
   vo.setMailing(mailing);
   
   MemberDAO dao = new MemberDAO();
   dao.MemberInsert(vo);
   response.sendRedirect("main.jsp");
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