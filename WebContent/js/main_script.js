$(document).ready(function(){
    $('#sidepage').css('display','none');
    $('#submenu1_div,#submenu2_div,#submenu3_div,#submenu4_div').addClass('menuhidden');
    var visible=0;
    // 최신 상영 영화 슬라이더
    $('.main_slide').bxSlider({
        touchEnabled : (navigator.maxTouchPoints > 0)
    });
    // 메뉴 클릭 시 하위메뉴
    $('.menu1').click(function(){
        if($('#submenu1_div').hasClass('menuvisible') == false){
            $('#submenu1_div').removeClass('menuhidden');
            $('#submenu1_div').addClass('menuvisible');
            $('#submenu2_div').addClass('menuhidden');
            $('#submenu2_div').removeClass('menuvisible');
            $('#submenu3_div').addClass('menuhidden');
            $('#submenu2_div').removeClass('menuvisible');
        }
        else if($('#submenu1_div').hasClass('menuvisible') == true){
            $('#submenu1_div').removeClass('menuvisible');
            $('#submenu1_div').addClass('menuhidden');
        }
    });
    $('.menu2').click(function(){
        if($('#submenu2_div').hasClass('menuvisible') == false){
            $('#submenu2_div').removeClass('menuhidden');
            $('#submenu2_div').addClass('menuvisible');
            $('#submenu1_div').addClass('menuhidden');
            $('#submenu1_div').removeClass('menuvisible');
            $('#submenu3_div').addClass('menuhidden');
            $('#submenu3_div').removeClass('menuvisible');
            
        }
        else if($('#submenu2_div').hasClass('menuvisible') == true){
            $('#submenu2_div').removeClass('menuvisible');
            $('#submenu2_div').addClass('menuhidden');
        }
    });
    $('.menu3').click(function(){
        if($('#submenu3_div').hasClass('menuvisible') == false){
            $('#submenu3_div').removeClass('menuhidden');
            $('#submenu3_div').addClass('menuvisible');
            $('#submenu1_div').addClass('menuhidden');
            $('#submenu1_div').removeClass('menuvisible');
            $('#submenu2_div').addClass('menuhidden');
            $('#submenu2_div').removeClass('menuvisible');
        }
        else if($('#submenu3_div').hasClass('menuvisible') == true){
            $('#submenu3_div').removeClass('menuvisible');
            $('#submenu3_div').addClass('menuhidden');
        }
    });

    
    // 사이드바 메뉴

    $('.dropoutBtnBox1').on('click', function(){
        $('#sidepage').fadeIn();
        $('#sidepage').css('right','0');
        $('.sidemenu').css('display','block');
        $('.profile').css('display','block');
        $('.beforelogin').css('display','block');
        $('.overlay').fadeIn();
    });

    $('.overlay').on('click',function(){
        $('#sidepage').fadeOut();
        $('#sidepage').css('right','-500px');
        $('.sidemenu').css('display','none');
        $('.profile').css('display','none');
        $('.beforelogin').css('display','none');
        $('.overlay').fadeOut();
    });
  });
