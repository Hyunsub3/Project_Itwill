<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="ko">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Movigo</title>
<link rel="stylesheet"
	href="https://cdn.jsdelivr.net/bxslider/4.2.12/jquery.bxslider.css">
<link rel="stylesheet" href="css/global.css" />
<link rel="stylesheet" href="css/maincss.css" />

<script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
<script
	src="https://cdn.jsdelivr.net/bxslider/4.2.12/jquery.bxslider.min.js"></script>
<script src="js/main_script.js"></script>
<script type="text/javascript">
	var sessionID = sessionStorage.getItem("id");
	sessionStorage.removeItem("allprice");
</script>
<script>
	//alert(sessionID);
	$(document).ready(function() {
		$("#userID").text(sessionID);
	});
</script>

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
		<article class="content1">
			<h1>상영중인 영화</h1>
			<div class="main_slide">
				<div class="main_slide_box">
					<a href="#"><img src="image/slide1.jpg" alt=""></a>
				</div>
				<div class="main_slide_box">
					<a href="#"><img src="image/slide2.jpg" alt=""></a>
				</div>
				<div class="main_slide_box">
					<a href="#"><img src="image/slide3.jpg" alt=""></a>
				</div>
				<div class="main_slide_box">
					<a href="#"><img src="image/recent4.jpg" alt=""></a>
				</div>
				<div class="main_slide_box">
					<a href="#"><img src="image/recent5.jpg" alt=""></a>
				</div>
				<div class="main_slide_box">
					<a href="#"><img src="image/recent6.jpg" alt=""></a>
				</div>
				<div class="main_slide_box">
					<a href="#"><img src="image/recent7.jpg" alt=""></a>
				</div>
				<div class="main_slide_box">
					<a href="#"><img src="image/recent8.jpg" alt=""></a>
				</div>
				<div class="main_slide_box">
					<a href="#"><img src="image/recent9.jpg" alt=""></a>
				</div>
			</div>
		</article>

		<article class="content2">
			<h1>이벤트 목록</h1>
			<div class="event_box">
				<a href="#"><img src="image/event1.jpg" alt="" class="eventBtn1"></a>
				<a href="#"><img src="image/event2.jpg" alt="" class="eventBtn2"></a>
				<a href="#"><img src="image/event3.jpg" alt="" class="eventBtn3"></a>
				<a href="#"><img src="image/event4.jpg" alt="" class="eventBtn4"></a>
				<a href="#"><img src="image/event5.jpg" alt="" class="eventBtn5"></a>
			</div>
		</article>
		<footer>
			<img src="image/footer.png" alt="">
		</footer>

	</div>

</body>

</html>>