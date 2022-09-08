<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@page import="java.sql.*" import="jsppack.*"
	import="java.io.PrintWriter"%>

<%
	String sitNum = request.getParameter("hiddensit");
	String reservid = request.getParameter("hiddenid");
	String reservtime = request.getParameter("hiddentime");
	String reservAdult = request.getParameter("amountAdult");
	String reservTeen = request.getParameter("amountTeen");
	String reservKids = request.getParameter("amountKids");

	int priceAdult = Integer.parseInt(reservAdult) * 5000;
	int priceTeen = Integer.parseInt(reservTeen) * 4000;
	int priceKids = Integer.parseInt(reservKids) * 3000;

	int price = priceAdult + priceTeen + priceKids;
	String priceStr = Integer.toString(price);
	PrintWriter script = response.getWriter();
	script.println("<script>");
	script.println("sessionStorage.setItem('allprice','" + priceStr + "')");
	script.println("</script>");

	MemberVo3 vo = new MemberVo3();
	vo.setReservid(reservid);
	vo.setDatetime(reservtime);
	vo.setSitnum(sitNum);
	vo.setReservKid(reservKids);
	vo.setReservTeen(reservTeen);
	vo.setReservAdult(reservAdult);
	MemberDAO4 dao = new MemberDAO4(vo);
	script.println("<script>");
	script.println("location.href='pay.html'");
	script.println("</script>");
%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>예약처리중</title>
</head>
<body>

</body>
</html>