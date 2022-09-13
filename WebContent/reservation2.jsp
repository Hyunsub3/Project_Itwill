<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link rel="stylesheet" href="css/global.css">
<link rel="stylesheet" href="css/reservation2.css" />
<script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
<script
	src="https://cdn.jsdelivr.net/bxslider/4.2.12/jquery.bxslider.min.js"></script>
<script src="js/main_script.js"></script>
<script src="js/sit.js"></script>
<script type="text/javascript">
	var sessionID = sessionStorage.getItem("id");
	if (sessionID == null) {
		alert("로그인이 필요한 서비스 입니다");
		location.href = "login.html";
	}
</script>
<script>
	//alert(sessionID);
	$(document).ready(function() {
		$("#userID").text(sessionID);
	})
</script>
<title>Cinemawill</title>
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
		<form action="sitAct.jsp" method="post">
			<article id="sitbox">
				<h1 style="font-size: 36px; text-align: center;">좌석 선택</h1>
				<div id="sitamout">
					<!-- 고객 종류 -->
					<div id="sitamount_list">
						<div>
							<img src="image/adult.png" alt="">
						</div>
						<div>
							<img src="image/teen.png" alt="">
						</div>
						<div>
							<img src="image/kids.png" alt="">
						</div>
					</div>
					<!-- 고객 종류의 숫자 조절 -->
					<div id="sitamount_modulate">
						<!-- 성인 행 -->
						<div id="amount_adult">
							<div>
								<button type="button" id="amountminusBtn1">
									<img src="image/amountminus.png" alt="">
								</button>
							</div>
							<div>
								<input type="text" readonly id="amount1" name="amountAdult"
									value="0">
							</div>
							<div>
								<button type="button" id="amountplusBtn1">
									<img src="image/amountplus.png" alt="">
								</button>
							</div>
						</div>
						<!-- 청소년 행 -->
						<div id="amount_teen">
							<div>
								<button type="button" id="amountminusBtn2">
									<img src="image/amountminus.png" alt="">
								</button>
							</div>
							<div>
								<input type="text" readonly id="amount2" name="amountTeen"
									value="0">
							</div>
							<div>
								<button type="button" id="amountplusBtn2">
									<img src="image/amountplus.png" alt="">
								</button>
							</div>
						</div>
						<!-- 어린이 행 -->
						<div id="amount_kids">
							<div>
								<button type="button" id="amountminusBtn3">
									<img src="image/amountminus.png" alt="">
								</button>
							</div>
							<div>
								<input type="text" readonly id="amount3" name="amountKids"
									value="0">
							</div>
							<div>
								<button type="button" id="amountplusBtn3">
									<img src="image/amountplus.png" alt="">
								</button>
							</div>
						</div>
					</div>
				</div>
				<div id="totalbox">
					<p
						style="display: inline-block; font-size: 20px; margin-top: 20px;">총
						고객의 수</p>
					<input type="text" readonly id="totalamount" value='0'>
				</div>

				<div id="sittable">

					<div id="sitrow1">
						<div id="sit1_1">
							<button type="button" id="sit1_1Btn" name="sit1_1">
								<img src="image/sit1.png">
							</button>
						</div>
						<div id="sit1_2">
							<button type="button" id="sit1_2Btn" name="sit1_2">
								<img src="image/sit1.png">
							</button>
						</div>
						<div id="sit1_3">
							<button type="button" id="sit1_3Btn" name="sit1_3">
								<img src="image/sit1.png">
							</button>
						</div>
						<div id="sit1_4">
							<button type="button" id="sit1_4Btn" name="sit1_4">
								<img src="image/sit1.png">
							</button>
						</div>
						<div id="sit1_5">
							<button type="button" id="sit1_5Btn" name="sit1_5">
								<img src="image/sit1.png">
							</button>
						</div>
					</div>
					<div id="sitrow2">
						<div id="sit2_1">
							<button type="button" id="sit2_1Btn" name="sit2_1">
								<img src="image/sit1.png">
							</button>
						</div>
						<div id="sit2_2">
							<button type="button" id="sit2_2Btn" name="sit2_2">
								<img src="image/sit1.png">
							</button>
						</div>
						<div id="sit2_3">
							<button type="button" id="sit2_3Btn" name="sit2_3">
								<img src="image/sit1.png">
							</button>
						</div>
						<div id="sit2_4">
							<button type="button" id="sit2_4Btn" name="sit2_4">
								<img src="image/sit1.png">
							</button>
						</div>
						<div id="sit2_5">
							<button type="button" id="sit2_5Btn" name="sit2_5">
								<img src="image/sit1.png">
							</button>
						</div>
					</div>
					<div id="sitrow3">
						<div id="sit3_1">
							<button type="button" id="sit3_1Btn" name="sit3_1">
								<img src="image/sit1.png">
							</button>
						</div>
						<div id="sit3_2">
							<button type="button" id="sit3_2Btn" name="sit3_2">
								<img src="image/sit1.png">
							</button>
						</div>
						<div id="sit3_3">
							<button type="button" id="sit3_3Btn" name="sit3_3">
								<img src="image/sit1.png">
							</button>
						</div>
						<div id="sit3_4">
							<button type="button" id="sit3_4Btn" name="sit3_4">
								<img src="image/sit1.png">
							</button>
						</div>
						<div id="sit3_5">
							<button type="button" id="sit3_5Btn" name="sit3_5">
								<img src="image/sit1.png">
							</button>
						</div>
					</div>
					<div id="sitrow4">
						<div id="sit4_1">
							<button type="button" id="sit4_1Btn" name="sit4_1">
								<img src="image/sit1.png">
							</button>
						</div>
						<div id="sit4_2">
							<button type="button" id="sit4_2Btn" name="sit4_2">
								<img src="image/sit1.png">
							</button>
						</div>
						<div id="sit4_3">
							<button type="button" id="sit4_3Btn" name="sit4_3">
								<img src="image/sit1.png">
							</button>
						</div>
						<div id="sit4_4">
							<button type="button" id="sit4_4Btn" name="sit4_4">
								<img src="image/sit1.png">
							</button>
						</div>
						<div id="sit4_5">
							<button type="button" id="sit4_5Btn" name="sit4_5">
								<img src="image/sit1.png">
							</button>
						</div>
					</div>
					<div id="sitrow5">
						<div id="sit5_1">
							<button type="button" id="sit5_1Btn" name="sit5_1">
								<img src="image/sit1.png">
							</button>
						</div>
						<div id="sit5_2">
							<button type="button" id="sit5_2Btn" name="sit5_2">
								<img src="image/sit1.png">
							</button>
						</div>
						<div id="sit5_3">
							<button type="button" id="sit5_3Btn" name="sit5_3">
								<img src="image/sit1.png">
							</button>
						</div>
						<div id="sit5_4">
							<button type="button" id="sit5_4Btn" name="sit5_4">
								<img src="image/sit1.png">
							</button>
						</div>
						<div id="sit5_5">
							<button type="button" id="sit5_5Btn" name="sit5_5">
								<img src="image/sit1.png">
							</button>
						</div>
					</div>
					<!--                 <input type="text" style="font-size:20px; text-align:center;" readonly value='0'; id="testbox"> -->
				</div>

				<div id="sitfinishbox">
					<!-- <button type="button" id="sitfinishBtn">선택 완료</button> -->
					<input type="hidden" readonly name="hiddensit" id="hiddensit">
					<input type="hidden" readonly name="hiddenid" id="hiddenid">
					<input type="hidden" readonly name="hiddentime" id="hiddentime">
					<input type="hidden" name="hiddenadult" id="hiddenadult"> <input
						type="hidden" name="hiddenteen" id="hiddenteen"> <input
						type="hidden" name="hiddenkid" id="hiddenkid"> <input
						type="submit" id="sitfinishBtn" value="선택완료">

					<script>
						$("#sitfinishBtn")
								.click(
										function() {
											var testa = document
													.getElementsByClassName("sit_selected");
											var sitArray = new Array();
											var sessionId = sessionStorage
													.getItem("id");
											for (var i = 0; i < testa.length; i++) {
												var test = testa[i]
														.getAttribute("name");
												sitArray[i] = test;
											}
											$("#hiddensit").val(sitArray);
											$("#hiddenid").val(sessionId);
											var date = new Date();
											var month = date.getMonth() + 1;
											var datetime = date.getFullYear()
													+ "/" + month + "/"
													+ date.getDate();
											$("#hiddentime").val(datetime);
										});
					</script>
		</form>
		</a>
	</div>
	</article>

	</div>
</body>

</html>
</body>
</html>