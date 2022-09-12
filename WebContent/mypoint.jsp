<%@page import="java.sql.Timestamp"%>
<%@page import="java.util.List"%>
<%@page import="com.cinemaw.point.db.PointDTO"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="ko">

<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link rel="stylesheet" href="css/recent_movie.css" />
<link rel="stylesheet" href="css/global.css">
<script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
<script
	src="https://cdn.jsdelivr.net/bxslider/4.2.12/jquery.bxslider.min.js"></script>
<script src="js/main_script.js"></script>
<script type="text/javascript">
	var sessionID = sessionStorage.getItem("id");
</script>
<script>
	//alert(sessionID);
	$(document).ready(function() {
		$("#userID").text(sessionID);
	})
</script>
<title>Movigo</title>
</head>

<body>
	<div id="wrapper">
		<div class="overlay"></div>
		<div id="sidepage">
			<div class="profile">
				<img src="image/profile_icon.jpg" alt="" class="profile_icon">
				<a href="login.html"><button id="loginBtn" class="">로그인</button></a>
				<a href="logout.jsp"><button id="logoutBtn" class="">로그아웃</button></a>
				<a href="signUp.html"><button id="joinBtn" class="">회원가입</button></a>
				<p style="text-align: center;" id="beforelogin">로그인이 필요합니다.</p>
				<p style="text-align: center;" id="afterlogin">
					<b id="userID">sessionID</b>님 환영합니다.
				</p>
			</div>
			<script>
				var btnLogin = document.getElementById('loginBtn');
				var btnLogout = document.getElementById('logoutBtn');
				var beforelog = document.getElementById('beforelogin');
				var afterlog = document.getElementById('afterlogin');
				if (sessionID == null) {
					//로그인 안했을때
					btnLogout.setAttribute('class', 'loginoutBtn');
					btnLogin.setAttribute('class', '');
					beforelog.setAttribute('class', '');
					afterlog.setAttribute('class', 'loginoutBtn');
				} else if (sessionID != null) {
					//로그인했을때
					btnLogin.setAttribute('class', 'loginoutBtn');
					btnLogout.setAttribute('class', '');
					beforelog.setAttribute('class', 'loginoutBtn');
					afterlog.setAttribute('class', '');
				}
			</script>
			<div class="sidemenu">
				<ul>
					<ul>
						영화
						<li><a href="recent_movie.html">상영중인 영화</a></li>
					</ul>
					<ul>
						예매
						<li><a href="reservation.html">예매하기</a></li>
						<li><a href="timetable.html">상영시간표</a></li>
					</ul>
					<ul>
						극장
						<li><a href="theater.html">전체극장</a></li>
					</ul>
					<ul>
						<a href="event.html" class="eventtab">이벤트</a>
						</ui>
					</ul>
			</div>
		</div>
		<header>
			<div class="logo_div">
				<a href="main.html" class="logoBox1"> <img
					src="image/main_logo.jpg" alt="메인페이지" class="logoBtn" />

				</a>
				<button class="dropoutBtnBox1">
					<img src="image/dropout_btn.jpg" alt="마이메뉴" class="dropoutBtn">
				</button>
			</div>
			<div class="mainmenu_div">
				<button class="menu1">
					<img src="image/menu_1.jpg" alt="">
				</button>
				<button class="menu2">
					<img src="image/menu_2.jpg" alt="">
				</button>
				<button class="menu3">
					<img src="image/menu_3.jpg" alt="">
				</button>
				<a href="event.html"><img src="image/menu_4.jpg" alt=""
					class="menu4"></a>
			</div>
			<div class="submenu_box">
				<div id="submenu1_div">
					<ul>
						<a href="recent_movie.html">
							<li>상영중인영화</li>
						</a>
					</ul>
				</div>
				<div id="submenu2_div">
					<ul>
						<a href="reservation.html">
							<li>예매하기</li>
						</a>
						<a href="timetable.html">
							<li>상영시간표</li>
						</a>
					</ul>
				</div>
				<div id="submenu3_div">
					<ul>
						<a href="theater.html">
							<li>전체극장</li>
						</a>
					</ul>
				</div>
			</div>
		</header>
		<div>
			<button class="topBtn" onclick="window.scrollTo(0,0);">
				<img src="image/TopBtn.jpg" alt="">
			</button>
		</div>
		<article style="height: 1164px;">
			<h1 style="text-align: center;"> 💳 나의 포인트💳</h1> <br><br><br>
			
			<%
			List<PointDTO> pointList = (List<PointDTO>)request.getAttribute("pointList");
			
			String u_id = (String)request.getAttribute("u_id");
			int p_seq = (Integer)request.getAttribute("p_seq");
			String p_type = (String)request.getAttribute("p_type");
			int point = (Integer)request.getAttribute("point");
			Timestamp p_dt = (Timestamp)request.getAttribute("p_dt");
			
			%>
			
			
			
			
			<table border="1"  style="margin-left: auto; margin-right: auto; text-align: center;" width="1000">
			<tr>
			<td> 고유번호</td>
			<td> 지급 유형</td>
			<td> 지급 금액</td>
			<td> 지급 일자</td>
			</tr>
			
			<%
			  for(int i=0;i<pointList.size();i++){ 
		           // DB -> DTO -> List
		          PointDTO dto = pointList.get(i);
		      %>
			       <tr>
			        <td><%=dto.getP_seq() %></td>
			        <td><%=dto.getP_type()%></td>
			        <td><%=dto.getPoint() %></td>
			        <td><%=dto.getP_dt() %></td>
			      </tr>
		     <%
		     
			  	} 
		     
		     %>
			
			
			
			
			
			
			
			</table>
			
		</article>
	</div>
</body>

</html>
</body>
</html>