$(document).ready(function () {

        //'#movie1,#movie2,#movie3,#movie4,#movie5,#movie6,#movie7,#movie8,#movie9' ------------------------------
    $('#movie1').click(function () {
        if ($('#movie1').hasClass('change') == false) {
            $('.movielist').addClass('selected');
            $('#movie1').addClass('change');
            $('#movie2,#movie3,#movie4,#movie5,#movie6,#movie7,#movie8,#movie9').removeClass('change');
        } else if ($('#movie1').hasClass('change') == true) {
            $('#movie1').removeClass('change');
            $('.movielist').removeClass('selected');
        }
    });
    $('#movie2').click(function () {
        if ($('#movie2').hasClass('change') == false) {
            $('.movielist').addClass('selected');
            $('#movie2').addClass('change');
            $('#movie1,#movie3,#movie4,#movie5,#movie6,#movie7,#movie8,#movie9').removeClass('change');
        } else if ($('#movie2').hasClass('change') == true) {
            $('#movie2').removeClass('change');
            $('.movielist').removeClass('selected');

        }
    });
    $('#movie3').click(function () {
        if ($('#movie3').hasClass('change') == false) {
            $('#movie3').addClass('change');
            $('.movielist').addClass('selected')
            $('#movie1,#movie2,#movie4,#movie5,#movie6,#movie7,#movie8,#movie9').removeClass('change');
        } else if ($('#movie3').hasClass('change') == true) {
            $('#movie3').removeClass('change');
            $('.movielist').removeClass('selected');
        }
    });
    $('#movie4').click(function () {
        if ($('#movie4').hasClass('change') == false) {
            $('.movielist').addClass('selected');
            $('#movie4').addClass('change');
            $('#movie1,#movie2,#movie3,#movie5,#movie6,#movie7,#movie8,#movie9').removeClass('change');
        } else if ($('#movie4').hasClass('change') == true) {
            $('#movie4').removeClass('change');
            $('.movielist').removeClass('selected');
        }
    });
    $('#movie5').click(function () {
        if ($('#movie5').hasClass('change') == false) {
            $('#movie5').addClass('change');
            $('.movielist').addClass('selected');
            $('#movie1,#movie2,#movie4,#movie3,#movie6,#movie7,#movie8,#movie9').removeClass('change');
        } else if ($('#movie5').hasClass('change') == true) {
            $('#movie5').removeClass('change');
            $('.movielist').removeClass('selected');
        }
    });
    $('#movie6').click(function () {
        if ($('#movie6').hasClass('change') == false) {
            $('.movielist').addClass('selected');
            $('#movie6').addClass('change');
            $('#movie1,#movie2,#movie4,#movie3,#movie5,#movie7,#movie8,#movie9').removeClass('change');
        } else if ($('#movie6').hasClass('change') == true) {
            $('#movie6').removeClass('change');
            $('.movielist').removeClass('selected'); 
        }
    });
    $('#movie7').click(function () {
        if ($('#movie7').hasClass('change') == false) {
            $('#movie7').addClass('change');
            $('.movielist').addClass('selected');
            $('#movie1,#movie2,#movie4,#movie3,#movie5,#movie6,#movie8,#movie9').removeClass('change');
        } else if ($('#movie7').hasClass('change') == true) {
            $('#movie7').removeClass('change');
            $('.movielist').removeClass('selected');
        }
    });
    $('#movie8').click(function () {
        if ($('#movie8').hasClass('change') == false) {
            $('.movielist').addClass('selected');
            $('#movie8').addClass('change');
            $('#movie1,#movie2,#movie4,#movie3,#movie5,#movie6,#movie7,#movie9').removeClass('change');
        } else if ($('#movie8').hasClass('change') == true) {
            $('#movie8').removeClass('change');
            $('.movielist').removeClass('selected');
        }
    });
    $('#movie9').click(function () {
        if ($('#movie9').hasClass('change') == false) {
            $('.movielist').addClass('selected');
            $('#movie9').addClass('change');
            $('#movie1,#movie2,#movie4,#movie3,#movie5,#movie6,#movie7,#movie8').removeClass('change');
        } else if ($('#movie9').hasClass('change') == true) {
            $('#movie9').removeClass('change');
            $('.movielist').removeClass('selected');
        }
    });


    // #theater1,#theater2,#theater3 ----------------------------------------------------------------------------
    $('#theater1').click(function () {
        if ($('#theater1').hasClass('change') == false) {
            $('#theater1').addClass('change');
            $('.theaterlist').addClass('selected');
            $('#theater2,#theater3').removeClass('change');
        } else if ($('#theater1').hasClass('change') == true) {
            $('#theater1').removeClass('change');
            $('.theaterlist').removeClass('selected');
        }
    });
    $('#theater2').click(function () {
        if ($('#theater2').hasClass('change') == false) {
            $('#theater2').addClass('change');
            $('#theater1,#theater3').removeClass('change');
            $('.theaterlist').addClass('selected');
        } else if ($('#theater2').hasClass('change') == true) {
            $('#theater2').removeClass('change');
            $('.theaterlist').removeClass('selected');
        }
    });
    $('#theater3').click(function () {
        if ($('#theater3').hasClass('change') == false) {
            $('#theater3').addClass('change');
            $('.theaterlist').addClass('selected');
            $('#theater1,#theater2').removeClass('change');
        } else if ($('#theater3').hasClass('change') == true) {
            $('#theater3').removeClass('change');
            $('.theaterlist').removeClass('selected');
        }
    });


    // #city1,#city2,#city3,#city4,#city5,#city6,#city7,#city8----------------------------------------------------
    $('#city1').click(function () {
        if ($('#city1').hasClass('change') == false) {
            $('#city1').addClass('change');
            $('#city2,#city3,#city4,#city5,#city6,#city7,#city8').removeClass('change');
            $('.seoul').css('display', 'block');
            $('.kyeonggi_incheon').css('display', 'none');
            $('.choongcheong_daejeon').css('display', 'none');
            $('.jeonna_gwangju').css('display', 'none');
            $('.kyeongbuk_daegu').css('display', 'none');
            $('.busan').css('display', 'none');
            $('.kangwon').css('display', 'none');
            $('.jeju').css('display', 'none');
            $('.citylist').addClass('selected');
        } else if ($('#city1').hasClass('change') == true) {
            $('#city1').removeClass('change');
            $('.seoul').css('display', 'none');
            $('.citylist').removeClass('selected');
        }
    });
    $('#city2').click(function () {
        if ($('#city2').hasClass('change') == false) {
            $('#city2').addClass('change');
            $('#city1,#city3,#city4,#city5,#city6,#city7,#city8').removeClass('change');
            $('.seoul').css('display', 'none');
            $('.kyeonggi_incheon').css('display', 'block');
            $('.choongcheong_daejeon').css('display', 'none');
            $('.jeonna_gwangju').css('display', 'none');
            $('.kyeongbuk_daegu').css('display', 'none');
            $('.busan').css('display', 'none');
            $('.kangwon').css('display', 'none');
            $('.jeju').css('display', 'none');
            $('.citylist').addClass('selected');
        } else if ($('#city2').hasClass('change') == true) {
            $('#city2').removeClass('change');
            $('.kyeonggi_incheon').css('display', 'none');
            $('.citylist').removeClass('selected');
        }
    });
    $('#city3').click(function () {
        if ($('#city3').hasClass('change') == false) {
            $('#city3').addClass('change');
            $('#city2,#city1,#city4,#city5,#city6,#city7,#city8').removeClass('change');
            $('.seoul').css('display', 'none');
            $('.kyeonggi_incheon').css('display', 'none');
            $('.choongcheong_daejeon').css('display', 'block');
            $('.jeonna_gwangju').css('display', 'none');
            $('.kyeongbuk_daegu').css('display', 'none');
            $('.busan').css('display', 'none');
            $('.kangwon').css('display', 'none');
            $('.jeju').css('display', 'none');
            $('.citylist').addClass('selected');
        } else if ($('#city3').hasClass('change') == true) {
            $('#city3').removeClass('change');
            $('.choongcheong_daejeon').css('display', 'none');
            $('.citylist').removeClass('selected');
        }
    });
    $('#city4').click(function () {
        if ($('#city4').hasClass('change') == false) {
            $('#city4').addClass('change');
            $('#city2,#city3,#city1,#city5,#city6,#city7,#city8').removeClass('change');
            $('.seoul').css('display', 'none');
            $('.kyeonggi_incheon').css('display', 'none');
            $('.choongcheong_daejeon').css('display', 'none');
            $('.jeonna_gwangju').css('display', 'block');
            $('.kyeongbuk_daegu').css('display', 'none');
            $('.busan').css('display', 'none');
            $('.kangwon').css('display', 'none');
            $('.jeju').css('display', 'none');
            $('.citylist').addClass('selected');
        } else if ($('#city4').hasClass('change') == true) {
            $('#city4').removeClass('change');
            $('.jeonna_gwangju').css('display', 'none');
            $('.citylist').removeClass('selected');
        }
    });
    $('#city5').click(function () {
        if ($('#city5').hasClass('change') == false) {
            $('#city5').addClass('change');
            $('#city2,#city3,#city4,#city1,#city6,#city7,#city8').removeClass('change');
            $('.seoul').css('display', 'none');
            $('.kyeonggi_incheon').css('display', 'none');
            $('.choongcheong_daejeon').css('display', 'none');
            $('.jeonna_gwangju').css('display', 'none');
            $('.kyeongbuk_daegu').css('display', 'block');
            $('.busan').css('display', 'none');
            $('.kangwon').css('display', 'none');
            $('.jeju').css('display', 'none');
            $('.citylist').addClass('selected');
        } else if ($('#city5').hasClass('change') == true) {
            $('#city5').removeClass('change');
            $('.kyeongbuk_daegu').css('display', 'none');
            $('.citylist').removeClass('selected');
        }
    });
    $('#city6').click(function () {
        if ($('#city6').hasClass('change') == false) {
            $('#city6').addClass('change');
            $('#city2,#city3,#city4,#city5,#city1,#city7,#city8').removeClass('change');
            $('.seoul').css('display', 'none');
            $('.kyeonggi_incheon').css('display', 'none');
            $('.choongcheong_daejeon').css('display', 'none');
            $('.jeonna_gwangju').css('display', 'none');
            $('.kyeongbuk_daegu').css('display', 'none');
            $('.busan').css('display', 'block');
            $('.kangwon').css('display', 'none');
            $('.jeju').css('display', 'none');
            $('.citylist').addClass('selected');
        } else if ($('#city6').hasClass('change') == true) {
            $('#city6').removeClass('change');
            $('.busan').css('display', 'none');
            $('.citylist').removeClass('selected');
        }
    });
    $('#city7').click(function () {
        if ($('#city7').hasClass('change') == false) {
            $('#city7').addClass('change');
            $('#city2,#city3,#city4,#city5,#city6,#city1,#city8').removeClass('change');
            $('.seoul').css('display', 'none');
            $('.kyeonggi_incheon').css('display', 'none');
            $('.choongcheong_daejeon').css('display', 'none');
            $('.jeonna_gwangju').css('display', 'none');
            $('.kyeongbuk_daegu').css('display', 'none');
            $('.busan').css('display', 'none');
            $('.kangwon').css('display', 'block');
            $('.jeju').css('display', 'none');
            $('.citylist').addClass('selected');
        } else if ($('#city7').hasClass('change') == true) {
            $('#city7').removeClass('change');
            $('.kangwon').css('display', 'none');
            $('.citylist').removeClass('selected');
        }
    });
    $('#city8').click(function () {
        if ($('#city8').hasClass('change') == false) {
            $('#city8').addClass('change');
            $('#city2,#city3,#city4,#city5,#city6,#city7,#city1').removeClass('change');
            $('.seoul').css('display', 'none');
            $('.kyeonggi_incheon').css('display', 'none');
            $('.choongcheong_daejeon').css('display', 'none');
            $('.jeonna_gwangju').css('display', 'none');
            $('.kyeongbuk_daegu').css('display', 'none');
            $('.busan').css('display', 'none');
            $('.kangwon').css('display', 'none');
            $('.jeju').css('display', 'block');
            $('.citylist').addClass('selected');
        } else if ($('#city8').hasClass('change') == true) {
            $('#city8').removeClass('change');
            $('.jeju').css('display', 'none');
            $('.citylist').removeClass('selected');
        }
    });

    // 서울
    // #gasan, #gayang, #gangdong, #geondae, #kimpo, #nowon, #doksan---------------------------------------------
    $('#gasan').click(function () {
        if ($('#gasan').hasClass('change') == false) {
            $('#gasan').addClass('change');
            $('#arealist').addClass('selected');
            $('#gayang, #gangdong, #geondae, #kimpo, #nowon, #doksan').removeClass('change');
        } else if ($('#gasan').hasClass('change') == true) {
            $('#gasan').removeClass('change');
            $('#arealist').removeClass('selected');
        }
    });
    $('#gayang').click(function () {
        if ($('#gayang').hasClass('change') == false) {
            $('#gayang').addClass('change');
            $('#arealist').addClass('selected');
            $('#gangdong, #gasan, #geondae, #kimpo, #nowon, #doksan').removeClass('change');
        } else if ($('#gayang').hasClass('change') == true) {
            $('#gayang').removeClass('change');
            $('#arealist').removeClass('selected');
        }
    });
    $('#gangdong').click(function () {
        if ($('#gangdong').hasClass('change') == false) {
            $('#gangdong').addClass('change');
            $('#arealist').addClass('selected');
            $('#gasan, #gayang, #geondae, #kimpo, #nowon, #doksan').removeClass('change');
        } else if ($('#gangdong').hasClass('change') == true) {
            $('#gangdong').removeClass('change');
            $('#arealist').removeClass('selected');
        }
    });
    $('#geondae').click(function () {
        if ($('#geondae').hasClass('change') == false) {
            $('#geondae').addClass('change');
            $('#gayang, #gangdong, #gasan, #kimpo, #nowon, #doksan').removeClass('change');
            $('#arealist').addClass('selected');
        } else if ($('#geondae').hasClass('change') == true) {
            $('#geondae').removeClass('change');
            $('#arealist').removeClass('selected');
        }
    });
    $('#kimpo').click(function () {
        if ($('#kimpo').hasClass('change') == false) {
            $('#kimpo').addClass('change');
            $('#gayang, #gangdong, #geondae, #gasan, #nowon, #doksan').removeClass('change');
            $('#arealist').addClass('selected');
        } else if ($('#kimpo').hasClass('change') == true) {
            $('#kimpo').removeClass('change');
            $('#arealist').removeClass('selected');
        }
    });
    $('#nowon').click(function () {
        if ($('#nowon').hasClass('change') == false) {
            $('#nowon').addClass('change');
            $('#gayang, #gangdong, #geondae, #kimpo, #gasan, #doksan').removeClass('change');
            $('#arealist').addClass('selected');
        } else if ($('#nowon').hasClass('change') == true) {
            $('#nowon').removeClass('change');
            $('#arealist').removeClass('selected');
        }
    });
    $('#doksan').click(function () {
        if ($('#doksan').hasClass('change') == false) {
            $('#doksan').addClass('change');
            $('#gayang, #gangdong, #geondae, #kimpo, #nowon, #gasan').removeClass('change');
            $('#arealist').addClass('selected');
        } else if ($('#doksan').hasClass('change') == true) {
            $('#doksan').removeClass('change');
            $('#arealist').removeClass('selected');
        }
    });

    // 경기/인천
    // #geomdan, #ganggyo, #gangmyeong, #gwangju, #guri, #lafesta-------------------------------------------------
    $('#geomdan').click(function () {
        if ($('#geomdan').hasClass('change') == false) {
            $('#geomdan').addClass('change');
            $('#ganggyo, #gangmyeong, #gwangju_term, #guri, #lafesta').removeClass('change');
            $('#arealist').addClass('selected');
        } else if ($('#geomdan').hasClass('change') == true) {
            $('#geomdan').removeClass('change');
            $('#arealist').removeClass('selected');
        }
    });
    $('#ganggyo').click(function () {
        if ($('#ganggyo').hasClass('change') == false) {
            $('#ganggyo').addClass('change');
            $('#geomdan, #gangmyeong, #gwangju_term, #guri, #lafesta').removeClass('change');
            $('#arealist').addClass('selected');
        } else if ($('#ganggyo').hasClass('change') == true) {
            $('#ganggyo').removeClass('change');
            $('#arealist').removeClass('selected');
        }
    });
    $('#gangmyeong').click(function () {
        if ($('#gangmyeong').hasClass('change') == false) {
            $('#gangmyeong').addClass('change');
            $('#ganggyo, #geomdan, #gwangju_term, #guri, #lafesta').removeClass('change');
            $('#arealist').addClass('selected');
        } else if ($('#gangmyeong').hasClass('change') == true) {
            $('#gangmyeong').removeClass('change');
            $('#arealist').removeClass('selected');
        }
    });
    $('#gwangju_term').click(function () {
        if ($('#gwangju_term').hasClass('change') == false) {
            $('#gwangju_term').addClass('change');
            $('#ganggyo, #gangmyeong, #geomdan, #guri, #lafesta').removeClass('change');
            $('#arealist').addClass('selected');
        } else if ($('#gwangju_term').hasClass('change') == true) {
            $('#gwangju_term').removeClass('change');
            $('#arealist').removeClass('selected');
        }
    });
    $('#guri').click(function () {
        if ($('#guri').hasClass('change') == false) {
            $('#guri').addClass('change');
            $('#ganggyo, #gangmyeong, #gwangju_term, #geomdan, #lafesta').removeClass('change');
            $('#arealist').addClass('selected');
        } else if ($('#guri').hasClass('change') == true) {
            $('#guri').removeClass('change');
            $('#arealist').removeClass('selected');
        }
    });
    $('#lafesta').click(function () {
        if ($('#lafesta').hasClass('change') == false) {
            $('#lafesta').addClass('change');
            $('#ganggyo, #gangmyeong, #gwangju_term, #guri, #geomdan').removeClass('change');
            $('#arealist').addClass('selected');
        } else if ($('#lafesta').hasClass('change') == true) {
            $('#lafesta').removeClass('change');
            $('#arealist').removeClass('selected');
        }
    });


    // 충청/대전
    // #daejeon_gwanjeo, #daejeon_dunsan, #daejeon_central, #seosan, #seocheongju, #ahsan-------------------------
    $('#daejeon_gwanjeo').click(function () {
        if ($('#daejeon_gwanjeo').hasClass('change') == false) {
            $('#daejeon_gwanjeo').addClass('change');
            $('#daejeon_dunsan, #daejeon_central, #seosan, #seocheongju, #ahsan').removeClass('change');
            $('#arealist').addClass('selected');
        } else if ($('#daejeon_gwanjeo').hasClass('change') == true) {
            $('#daejeon_gwanjeo').removeClass('change');
            $('#arealist').removeClass('selected');
        }
    });
    $('#daejeon_dunsan').click(function () {
        if ($('#daejeon_dunsan').hasClass('change') == false) {
            $('#daejeon_dunsan').addClass('change');
            $('#daejeon_gwanjeo, #daejeon_central, #seosan, #seocheongju, #ahsan').removeClass('change');
            $('#arealist').addClass('selected');
        } else if ($('#daejeon_dunsan').hasClass('change') == true) {
            $('#daejeon_dunsan').removeClass('change');
            $('#arealist').removeClass('selected');
        }
    });
    $('#daejeon_central').click(function () {
        if ($('#daejeon_central').hasClass('change') == false) {
            $('#daejeon_central').addClass('change');
            $('#daejeon_dunsan, #daejeon_gwanjeo, #seosan, #seocheongju, #ahsan').removeClass('change');
            $('#arealist').addClass('selected');
        } else if ($('#daejeon_central').hasClass('change') == true) {
            $('#daejeon_central').removeClass('change');
            $('#arealist').removeClass('selected');
        }
    });
    $('#seosan').click(function () {
        if ($('#seosan').hasClass('change') == false) {
            $('#seosan').addClass('change');
            $('#daejeon_dunsan, #daejeon_central, #daejeon_gwanjeo, #seocheongju, #ahsan').removeClass('change');
            $('#arealist').addClass('selected');
        } else if ($('#seosan').hasClass('change') == true) {
            $('#seosan').removeClass('change');
            $('#arealist').removeClass('selected');
        }
    });
    $('#seocheongju').click(function () {
        if ($('#seocheongju').hasClass('change') == false) {
            $('#seocheongju').addClass('change');
            $('#daejeon_dunsan, #daejeon_central, #seosan, #daejeon_gwanjeo, #ahsan').removeClass('change');
            $('#arealist').addClass('selected');
        } else if ($('#seocheongju').hasClass('change') == true) {
            $('#seocheongju').removeClass('change');
            $('#arealist').removeClass('selected');
        }
    });
    $('#ahsan').click(function () {
        if ($('#ahsan').hasClass('change') == false) {
            $('#ahsan').addClass('change');
            $('#daejeon_dunsan, #daejeon_central, #seosan, #seocheongju, #daejeon_gwanjeo').removeClass('change');
            $('#arealist').addClass('selected');
        } else if ($('#ahsan').hasClass('change') == true) {
            $('#ahsan').removeClass('change');
            $('#arealist').removeClass('selected');
        }
    });

    // 전라/광주
    // #gwangju, #gunsan, #gunsanmall, #iksan, #jeonju_pyeonghwa, #chungjangro------------------------------------
    $('#gwangju').click(function () {
        if ($('#gwangju').hasClass('change') == false) {
            $('#gwangju').addClass('change');
            $('#gunsan, #gunsanmall, #iksan, #jeonju_pyeonghwa, #chungjangro').removeClass('change');
            $('#arealist').addClass('selected');
        } else if ($('#gwangju').hasClass('change') == true) {
            $('#gwangju').removeClass('change');
            $('#arealist').removeClass('selected');
        }
    });
    $('#gunsan').click(function () {
        if ($('#gunsan').hasClass('change') == false) {
            $('#gunsan').addClass('change');
            $('#gwangju, #gunsanmall, #iksan, #jeonju_pyeonghwa, #chungjangro').removeClass('change');
            $('#arealist').addClass('selected');
        } else if ($('#gunsan').hasClass('change') == true) {
            $('#gunsan').removeClass('change');
            $('#arealist').removeClass('selected');
        }
    });
    $('#gunsanmall').click(function () {
        if ($('#gunsanmall').hasClass('change') == false) {
            $('#gunsanmall').addClass('change');
            $('#gunsan, #gwangju, #iksan, #jeonju_pyeonghwa, #chungjangro').removeClass('change');
            $('#arealist').addClass('selected');
        } else if ($('#gunsanmall').hasClass('change') == true) {
            $('#gunsanmall').removeClass('change');
            $('#arealist').removeClass('selected');
        }
    });
    $('#iksan').click(function () {
        if ($('#iksan').hasClass('change') == false) {
            $('#iksan').addClass('change');
            $('#gunsan, #gunsanmall, #gwangju, #jeonju_pyeonghwa, #chungjangro').removeClass('change');
            $('#arealist').addClass('selected');
        } else if ($('#iksan').hasClass('change') == true) {
            $('#iksan').removeClass('change');
            $('#arealist').removeClass('selected');
        }
    });
    $('#jeonju_pyeonghwa').click(function () {
        if ($('#jeonju_pyeonghwa').hasClass('change') == false) {
            $('#jeonju_pyeonghwa').addClass('change');
            $('#gunsan, #gunsanmall, #iksan, #gwangju, #chungjangro').removeClass('change');
            $('#arealist').addClass('selected');
        } else if ($('#jeonju_pyeonghwa').hasClass('change') == true) {
            $('#jeonju_pyeonghwa').removeClass('change');
            $('#arealist').removeClass('selected');
        }
    });
    $('#chungjangro').click(function () {
        if ($('#chungjangro').hasClass('change') == false) {
            $('#chungjangro').addClass('change');
            $('#gunsan, #gunsanmall, #iksan, #jeonju_pyeonghwa, #gwangju').removeClass('change');
            $('#arealist').addClass('selected');
        } else if ($('#chungjangro').hasClass('change') == true) {
            $('#chungjangro').removeClass('change');
            $('#arealist').removeClass('selected');
        }
    });

    // 경북/대구
    // #kyeongsan, #gumiprime, #kyeongju, #gumigongdan, #daegugwangjang, #daeguhyeonpung, #dongseongro------------
    $('#kyeongsan').click(function () {
        if ($('#kyeongsan').hasClass('change') == false) {
            $('#kyeongsan').addClass('change');
            $('#gumiprime, #kyeongju, #gumigongdan, #daegugwangjang, #daeguhyeonpung, #dongseongro').removeClass('change');
            $('#arealist').addClass('selected');
        } else if ($('#kyeongsan').hasClass('change') == true) {
            $('#kyeongsan').removeClass('change');
            $('#arealist').removeClass('selected');
        }
    });
    $('#gumiprime').click(function () {
        if ($('#gumiprime').hasClass('change') == false) {
            $('#gumiprime').addClass('change');
            $('#kyeongsan, #kyeongju, #gumigongdan, #daegugwangjang, #daeguhyeonpung, #dongseongro').removeClass('change');
            $('#arealist').addClass('selected');
        } else if ($('#gumiprime').hasClass('change') == true) {
            $('#gumiprime').removeClass('change');
            $('#arealist').removeClass('selected');
        }
    });
    $('#kyeongju').click(function () {
        if ($('#kyeongju').hasClass('change') == false) {
            $('#kyeongju').addClass('change');
            $('#gumiprime, #kyeongsan, #gumigongdan, #daegugwangjang, #daeguhyeonpung, #dongseongro').removeClass('change');
            $('#arealist').addClass('selected');
        } else if ($('#kyeongju').hasClass('change') == true) {
            $('#kyeongju').removeClass('change');
            $('#arealist').removeClass('selected');
        }
    });
    $('#gumigongdan').click(function () {
        if ($('#gumigongdan').hasClass('change') == false) {
            $('#gumigongdan').addClass('change');
            $('#gumiprime, #kyeongju, #kyeongsan, #daegugwangjang, #daeguhyeonpung, #dongseongro').removeClass('change');
            $('#arealist').addClass('selected');
        } else if ($('#gumigongdan').hasClass('change') == true) {
            $('#gumigongdan').removeClass('change');
            $('#arealist').removeClass('selected');
        }
    });
    $('#daegugwangjang').click(function () {
        if ($('#daegugwangjang').hasClass('change') == false) {
            $('#daegugwangjang').addClass('change');
            $('#gumiprime, #kyeongju, #gumigongdan, #kyeongsan, #daeguhyeonpung, #dongseongro').removeClass('change');
            $('#arealist').addClass('selected');
        } else if ($('#daegugwangjang').hasClass('change') == true) {
            $('#daegugwangjang').removeClass('change');
            $('#arealist').removeClass('selected');
        }
    });
    $('#daeguhyeonpung').click(function () {
        if ($('#daeguhyeonpung').hasClass('change') == false) {
            $('#daeguhyeonpung').addClass('change');
            $('#gumiprime, #kyeongju, #gumigongdan, #daegugwangjang, #kyeongsan, #dongseongro').removeClass('change');
            $('#arealist').addClass('selected');
        } else if ($('#daeguhyeonpung').hasClass('change') == true) {
            $('#daeguhyeonpung').removeClass('change');
            $('#arealist').removeClass('selected');
        }
    });
    $('#dongseongro').click(function () {
        if ($('#dongseongro').hasClass('change') == false) {
            $('#dongseongro').addClass('change');
            $('#gumiprime, #kyeongju, #gumigongdan, #daegugwangjang, #daeguhyeonpung, #kyeongsan').removeClass('change');
            $('#arealist').addClass('selected');
        } else if ($('#dongseongro').hasClass('change') == true) {
            $('#dongseongro').removeClass('change');
            $('#arealist').removeClass('selected');
        }
    });

    // 경남/부산/울산
    // #daeyeong, #dongrae, #dongbusan, #sasang, #busanbonjeom, #seomyeon-----------------------------------------
    $('#daeyeong').click(function () {
        if ($('#daeyeong').hasClass('change') == false) {
            $('#daeyeong').addClass('change');
            $('#dongrae, #dongbusan, #sasang, #busanbonjeom, #seomyeon').removeClass('change');
            $('#arealist').addClass('selected');
        } else if ($('#daeyeong').hasClass('change') == true) {
            $('#daeyeong').removeClass('change');
            $('#arealist').removeClass('selected');
        }
    });
    $('#dongrae').click(function () {
        if ($('#dongrae').hasClass('change') == false) {
            $('#dongrae').addClass('change');
            $('#daeyeong, #dongbusan, #sasang, #busanbonjeom, #seomyeon').removeClass('change');
            $('#arealist').addClass('selected');
        } else if ($('#dongrae').hasClass('change') == true) {
            $('#dongrae').removeClass('change');
            $('#arealist').removeClass('selected');
        }
    });
    $('#dongbusan').click(function () {
        if ($('#dongbusan').hasClass('change') == false) {
            $('#dongbusan').addClass('change');
            $('#dongrae, #daeyeong, #sasang, #busanbonjeom, #seomyeon').removeClass('change');
            $('#arealist').addClass('selected');
        } else if ($('#dongbusan').hasClass('change') == true) {
            $('#dongbusan').removeClass('change');
            $('#arealist').removeClass('selected');
        }
    });
    $('#sasang').click(function () {
        if ($('#sasang').hasClass('change') == false) {
            $('#sasang').addClass('change');
            $('#dongrae, #dongbusan, #daeyeong, #busanbonjeom, #seomyeon').removeClass('change');
            $('#arealist').addClass('selected');
        } else if ($('#sasang').hasClass('change') == true) {
            $('#sasang').removeClass('change');
            $('#arealist').removeClass('selected');
        }
    });
    $('#busanbonjeom').click(function () {
        if ($('#busanbonjeom').hasClass('change') == false) {
            $('#busanbonjeom').addClass('change');
            $('#dongrae, #dongbusan, #sasang, #daeyeong, #seomyeon').removeClass('change');
            $('#arealist').addClass('selected');
        } else if ($('#busanbonjeom').hasClass('change') == true) {
            $('#busanbonjeom').removeClass('change');
            $('#arealist').removeClass('selected');
        }
    });
    $('#seomyeon').click(function () {
        if ($('#seomyeon').hasClass('change') == false) {
            $('#seomyeon').addClass('change');
            $('#dongrae, #dongbusan, #sasang, #busanbonjeom, #daeyeong').removeClass('change');
            $('#arealist').addClass('selected');
        } else if ($('#seomyeon').hasClass('change') == true) {
            $('#seomyeon').removeClass('change');
            $('#arealist').removeClass('selected');
        }
    });

    // 강원
    // #namwonju, #donghae, #wonjumusil---------------------------------------------------------------------------
    $('#namwonju').click(function () {
        if ($('#namwonju').hasClass('change') == false) {
            $('#namwonju').addClass('change');
            $('#donghae, #wonjumusil').removeClass('change');
            $('#arealist').addClass('selected');
        } else if ($('#namwonju').hasClass('change') == true) {
            $('#namwonju').removeClass('change');
            $('#arealist').removeClass('selected');
        }
    });
    $('#donghae').click(function () {
        if ($('#donghae').hasClass('change') == false) {
            $('#donghae').addClass('change');
            $('#namwonju, #wonjumusil').removeClass('change');
            $('#arealist').addClass('selected');
        } else if ($('#donghae').hasClass('change') == true) {
            $('#donghae').removeClass('change');
            $('#arealist').removeClass('selected');
        }
    });
    $('#wonjumusil').click(function () {
        if ($('#wonjumusil').hasClass('change') == false) {
            $('#wonjumusil').addClass('change');
            $('#donghae, #namwonju').removeClass('change');
            $('#arealist').addClass('selected');
        } else if ($('#wonjumusil').hasClass('change') == true) {
            $('#wonjumusil').removeClass('change');
            $('#arealist').removeClass('selected');
        }
    });

    // 제주
    // #seoguipo, #jejusamhwa, #jejuahra--------------------------------------------------------------------------
    $('#seoguipo').click(function () {
        if ($('#seoguipo').hasClass('change') == false) {
            $('#seoguipo').addClass('change');
            $('#jejusamhwa, #jejuahra').removeClass('change');
            $('#arealist').addClass('selected');
        } else if ($('#seoguipo').hasClass('change') == true) {
            $('#seoguipo').removeClass('change');
            $('#arealist').removeClass('selected');
        }
    });
    $('#jejusamhwa').click(function () {
        if ($('#jejusamhwa').hasClass('change') == false) {
            $('#jejusamhwa').addClass('change');
            $('#seoguipo, #jejuahra').removeClass('change');
            $('#arealist').addClass('selected');
        } else if ($('#jejusamhwa').hasClass('change') == true) {
            $('#jejusamhwa').removeClass('change');
            $('#arealist').removeClass('selected');
        }
    });
    $('#jejuahra').click(function () {
        if ($('#jejuahra').hasClass('change') == false) {
            $('#jejuahra').addClass('change');
            $('#jejusamhwa, #seoguipo').removeClass('change');
            $('#arealist').addClass('selected');
        } else if ($('#jejuahra').hasClass('change') == true) {
            $('#jejuahra').removeClass('change');
            $('#arealist').removeClass('selected');
        }
    });
    
    $('#reservfinish').click(function(){
        
        if($('.movielist').hasClass('selected') == true && $('.theaterlist').hasClass('selected') == true && $('.citylist').hasClass('selected') == true && $('#arealist').hasClass('selected') == true ){
            location.href="reservation2.html";
        }
        else if($('.movielist').hasClass('selected') == false){
            alert('영화를 선택해 주세요');
        }
        else if($('.theaterlist').hasClass('selected')==false){
            alert('상영관을 선택해 주세요');
        }
        else if($('.citylist').hasClass('selected') == false){
            alert('지역을 선택해 주세요');
        }
        else if($('#arealist').hasClass('selected') == false){
            alert('상세지역을 선택해 주세요');
        }
    });

});
