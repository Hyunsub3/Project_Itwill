<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="ko">

<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link rel="stylesheet" href="css/recent_movie.css" />
<link rel="stylesheet" href="css/global.css">
<link rel="stylesheet" href="css/signup.css" />
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
		<div class="topBtn">
			<button onclick="window.scrollTo(0,0);">
				<img src="image/TopBtn.jpg" alt="">
			</button>
		</div>
		<article class="signupBox">
			<h1>회원가입</h1>
			<table class="signupinfo">
				<form action="insert.jsp" method="post">
					<tr>
						<td>✔ 아이디 :</td>
						<td><input type="text" name="u_id"></td>
					</tr>
					<tr>
						<td>✔ 비밀번호 :</td>
						<td><input type="password" name="u_pw"></td>
					</tr>
					<tr>
						<td>✔ 이름 :</td>
						<td><input type="text" name="u_nm"></td>
					</tr>
					<tr>
						<td>✔ 생년월일 :</td>
						<td><input type="date" name="birth"></td>
					</tr>
					<tr>
						<td>✔ 이메일 :</td>
						<td><input type="text" id="signupEmail1" name="email1">
							@ <input id="signupEmail2" list="domains" name="email2"
							placeholder="주소 선택"> <datalist id="domains">
								<option value="직접입력"></option>
								<option value="naver.com"></option>
								<option value="google.com"></option>
								<option value="nate.com"></option>
								<option value="yahoo.co.kr"></option>
							</datalist></td>
					</tr>
					<tr>
						<td>✔ 휴대전화 :  </td>
						<td>
						<input type="text" name="phone1">-
						<input type="text" name="phone2">-
						<input type="text" name="phone3">
						
						</td>
					</tr>
					
					
					<tr>
						<td>✔ 즐겨보는 장르 :  </td>
                	  <td><input type="checkbox" name="favorit" value="스릴러">스릴러
                 		<input type="checkbox" name="favorit" value="미스테리">미스테리
                  		<input type="checkbox" name="favorit" value="멜로">멜로
	                  	<input type="checkbox" name="favorit" value="로맨틱코미디">로맨틱 코미디
	                  	<input type="checkbox" name="favorit" value="어드벤처">어드벤처
	                  	<input type="checkbox" name="favorit" value="정치">정치
		                <input type="checkbox" name="favorit" value="판타지">판타지<br>
	                    <input type="checkbox" name="favorit" value="애니메이션">애니메이션
	                    <input type="checkbox" name="favorit" value="다큐멘터리">다큐멘터리
	                    <input type="checkbox" name="favorit" value="느와르">느와르
	                    <input type="checkbox" name="favorit" value="공상과학">공상과학
	                    <input type="checkbox" name="favorit" value="액션">액션
	                    <input type="checkbox" name="favorit" value="코미디">코미디 </td>
					</tr>
					
					<hr>
					
					<tr>
					<td>✔ 메일링 서비스 동의 :</td>
					<td><input type="radio" name="mailing" value="동의">동의
	                <input type="radio" name="mailing" value="동의안함">동의안함</td>
					
					</tr>
					
					
					
					
					
					<tr>
						<td></td>
						<td><input type="submit" value="회원가입"
							style="font-size: 36px; padding: 0px 20px; height: 72px;">
							<a href="login.html"><button
									style="font-size: 36px; margin-left: 50px; padding: 10px 20px 10px 20px;">취소</button></a>
						</td>
					</tr>
				</form>
			</table>
		</article>
	</div>
</body>

</html>
</body>

</html>