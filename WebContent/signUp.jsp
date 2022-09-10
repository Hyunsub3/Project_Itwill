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
$(document).ready(function(){
	// 버튼을 클릭했을때 id값을가지고 string3.jsp에 가서 체크 출력값을 
	// 가져와서 iddiv에 출력
	$('#btn').click(function(){ //클릭시 이벤트 동작할거얌 
		$.ajax({  //페이지가 안바뀌면서 뭔가 전해주려한다? ajax
			url: 'iddpcheck.jsp',
			data:{'u_id':$('#u_id').val()},  // 키, 값
			success:function(rdata){
				$('#iddiv').html(rdata); //iddiv에 뿌려줄겅
			}
		}); 
	});
});
</script>
<script>


</script>
<script>
	//alert(sessionID);
	$(document).ready(function() {
		$("#userID").text(sessionID);
	})
</script>

<script>
$(document).ready(function(){
	$('#fr').submit(function(){ //폼태그에 이벤트 적용 

		if($('#c1').is(':checked') == false)  {
			alert('약관에 동의하세요.');
			return false; //되돌아가기
		}
	}); 
});

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
				<form action="insert.jsp" method="post" id="fr">
					<tr>
						<td>✔ 아이디 :</td>
						<td><input type="text" name="u_id" id="u_id" style="width:300px;height:40px;font-size:25px;">
						<input type="button" value="아이디 중복체크" id="btn">
						<div id="iddiv"></div></td>
					</tr>
					<tr>
						<td>✔ 비밀번호 :</td>
						<td><input type="password" name="u_pw" style="width:300px;height:40px;font-size:25px;"></td>
					</tr>
					<tr>
						<td>✔ 이름 :</td>
						<td><input type="text" name="u_nm" style="width:300px;height:40px;font-size:25px;"></td>
					</tr>
					<tr>
						<td>✔ 생년월일 :</td>
						<td><input type="date" name="birth"></td>
					</tr>
					<tr>
						<td >✔ 이메일 :</td>
						<td><input type="text" id="signupEmail1" name="email1" style="width:200px;height:40px;font-size:25px;">
							@ <input id="signupEmail2" list="domains" name="email2"
							placeholder="주소 선택" style="width:230px;height:40px;font-size:25px;"> <datalist id="domains">
								<option value="직접입력"></option>
								<option value="naver.com"></option>
								<option value="google.com"></option>
								<option value="nate.com"></option>
								<option value="yahoo.co.kr"></option>
							</datalist></td>
					</tr>
					<tr>
						<td>✔ 휴대전화 :  </td>
						<td><input type="tel" name="phone1" style="width:70px;height:40px;font-size:25px;">-
						<input type="tel" name="phone2" style="width:70px;height:40px;font-size:25px;">-
						<input type="tel" name="phone3" style="width:70px;height:40px;font-size:25px;">
					</tr>


					<tr>
						<td>✔ 즐겨보는 장르 :  </td>
						<td><input type="checkbox" name="favorit" value="스릴러" >스릴러
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
					<td>✔ 이용약관 </td>
					<td><textarea readonly="readonly" rows="9" cols="100">
					제 1 조 (목적)

이 약관은 네이버 주식회사 ("회사" 또는 "CinemaWill")가 제공하는 네이버 및 네이버 관련 제반 서비스의 이용과 관련하여 회사와 회원과의 권리, 의무 및 책임사항, 기타 필요한 사항을 규정함을 목적으로 합니다.


제 2 조 (정의)

이 약관에서 사용하는 용어의 정의는 다음과 같습니다.
①"서비스"라 함은 구현되는 단말기(PC, TV, 휴대형단말기 등의 각종 유무선 장치를 포함)와 상관없이 "회원"이 이용할 수 있는 네이버 및 네이버 관련 제반 서비스를 의미합니다.
②"회원"이라 함은 회사의 "서비스"에 접속하여 이 약관에 따라 "회사"와 이용계약을 체결하고 "회사"가 제공하는 "서비스"를 이용하는 고객을 말합니다.
③"아이디(ID)"라 함은 "회원"의 식별과 "서비스" 이용을 위하여 "회원"이 정하고 "회사"가 승인하는 문자와 숫자의 조합을 의미합니다.
④"비밀번호"라 함은 "회원"이 부여 받은 "아이디와 일치되는 "회원"임을 확인하고 비밀보호를 위해 "회원" 자신이 정한 문자 또는 숫자의 조합을 의미합니다.
⑤"유료서비스"라 함은 "회사"가 유료로 제공하는 각종 온라인디지털콘텐츠(각종 정보콘텐츠, VOD, 아이템 기타 유료콘텐츠를 포함) 및 제반 서비스를 의미합니다.
⑥"포인트"라 함은 서비스의 효율적 이용을 위해 회사가 임의로 책정 또는 지급, 조정할 수 있는 재산적 가치가 없는 "서비스" 상의 가상 데이터를 의미합니다.
⑦"게시물"이라 함은 "회원"이 "서비스"를 이용함에 있어 "서비스상"에 게시한 부호ㆍ문자ㆍ음성ㆍ음향ㆍ화상ㆍ동영상 등의 정보 형태의 글, 사진, 동영상 및 각종 파일과 링크 등을 의미합니다. 
					
					</textarea>
					<h3><input type="checkbox" name="c1" id="c1" value="c1"><font size="2">개인정보 수집 및 이용에 대한 안내(필수)</font></h3>
					</tr>
					
					
<!-- 					<td><textarea readonly="readonly" rows="9" cols="100"> -->
<!-- 					위치정보 이용약관에 동의하시면, 위치를 활용한 광고 정보 수신 등을 포함하는 네이버 위치기반 서비스를 이용할 수 있습니다. -->


<!-- 제 1 조 (목적) -->
<!-- 이 약관은 네이버 주식회사 (이하 “회사”)가 제공하는 위치정보사업 또는 위치기반서비스사업과 관련하여 회사와 개인위치정보주체와의 권리, 의무 및 책임사항, 기타 필요한 사항을 규정함을 목적으로 합니다. -->


<!-- 제 2 조 (약관 외 준칙) -->
<!-- 이 약관에 명시되지 않은 사항은 위치정보의 보호 및 이용 등에 관한 법률, 정보통신망 이용촉진 및 정보보호 등에 관한 법률, 전기통신기본법, 전기통신사업법 등 관계법령과 회사의 이용약관 및 개인정보취급방침, 회사가 별도로 정한 지침 등에 의합니다. -->


<!-- 제 3 조 (서비스 내용 및 요금) -->
<!-- ①회사는 직접 위치정보를 수집하거나 위치정보사업자인 이동통신사로부터 위치정보를 전달받아 아래와 같은 위치기반서비스를 제공합니다. 1.Geo Tagging 서비스: 게시글 등록 시점의 개인위치정보주체의 위치정보를 게시글과 함께 저장합니다. -->
<!-- 2.위치정보를 활용한 검색결과 제공 서비스: 정보 검색을 요청하거나 개인위치정보주체 또는 이동성 있는 기기의 위치정보를 제공 시 본 위치정보를 이용한 검색결과 및 주변결과(맛집, 주변업체, 교통수단 등)를 제시합니다. -->
<!-- 3.위치정보를 활용한 친구찾기 및 친구맺기: 현재 위치를 활용하여 친구를 찾아주거나 친구를 추천하여 줍니다. -->
<!-- 4.연락처 교환하기: 위치정보를 활용하여 친구와 연락처를 교환할 수 있습니다. -->
<!-- 5.현재 위치를 활용한 광고정보 제공 서비스: 광고정보 제공 요청 시 개인위치정보주체의 현 위치를 이용하여 광고소재를 제시합니다. -->
<!-- 6. 이용자 보호 및 부정 이용 방지: 개인위치정보주체 또는 이동성 있는 기기의 위치를 이용하여 권한없는 자의 비정상적인 서비스 이용 시도 등을 차단합니다. -->
<!-- 					</textarea> -->
<!-- 					<h3><a href="#"><font size="2">개인정보 수집 및 이용에 대한 안내(필수)</font><input type="checkbox" name="c2" id="c2"/></a></h3> -->
<!-- 					</tr> -->



					<tr>
						<td></td>
						<td><input type="submit" value="회원가입"
							style="font-size: 36px; padding: 0px 20px; height: 72px;">
<!-- 							<a href="login.html"><button -->
							<a href="main.jsp"><button
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