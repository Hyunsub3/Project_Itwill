$(document).ready(function () {
    //고객 숫자 에 쓸 변수
    var amount1=0;
    var amount2=0;
    var amount3=0;
    var selectamount = (document.getElementsByClassName('sit_selected')).length;
    var amountck=0;
    // 어른 행 숫자 증감
    $('#amountminusBtn1').click(function(){
        amount1--;
        $('#amount1').attr('value', amount1);
        $('#totalamount').attr('value',amount1+amount2+amount3);
        amountck--;
        if(amount1 < 0){
            amount1=0;
            amountck=0;
            $('#amount1').attr('value',amount1);
            $('#totalamount').attr('value',amount1+amount2+amount3);
        }
    });
    $('#amountplusBtn1').click(function(){
        amount1++;
        amountck++;
        $('#amount1').attr('value', amount1);
        $('#totalamount').attr('value',amount1+amount2+amount3);

    });

// 청소년 행 숫자 증감
    $('#amountminusBtn2').click(function(){
        amount2--;
        amountck--;
        $('#amount2').attr('value', amount2);
        $('#totalamount').attr('value',amount1+amount2+amount3);
        if(amount2 < 0){
            amount2=0;
            amountck=0;
            $('#amount2').attr('value',amount2);
            $('#totalamount').attr('value',amount1+amount2+amount3);
            
        }
    });
    $('#amountplusBtn2').click(function(){
        amount2++;
        amountck++;
        $('#amount2').attr('value', amount2);
        $('#totalamount').attr('value',amount1+amount2+amount3);

    });

// 어린이 행 숫자 증감
    $('#amountminusBtn3').click(function(){
        amount3--;
        amountck--;
        $('#amount3').attr('value', amount3);
        $('#totalamount').attr('value',amount1+amount2+amount3);
        if(amount3 < 0){
            amount3=0;
            amountck=0;
            $('#amount3').attr('value',amount3);
            $('#totalamount').attr('value',amount1+amount2+amount3);
            
        }
    });
    $('#amountplusBtn3').click(function(){
        amount3++;
        amountck++;
        $('#amount3').attr('value', amount3);
        $('#totalamount').attr('value',amount1+amount2+amount3);
        
    });
    
// 좌석선택쪽 제이쿼리
// 좌석 1번째 줄
    $('#sit1_1Btn').click(function(){
        if(amountck <= 0){
            alert('사용자 수를 선택해 주세요');
        }
        else if(amountck > 0 && $('#sit1_1Btn').hasClass('sit_selected') == false){
            $('#sit1_1Btn').addClass('sit_selected');
            selectamount = (document.getElementsByClassName('sit_selected')).length;
            if(selectamount > amountck){
                alert('선택한 사용자 수 보다 많은 좌석수 입니다.');
                $('#sit1_1Btn').removeClass('sit_selected');
            }else{
/*                $('#testbox').attr('value',selectamount);*/
                $("#sit1_1Btn img").attr('src','image/checksit.png');
            }        
        }
        else if($('#sit1_1Btn').hasClass('sit_selected') == true){
            $('#sit1_1Btn img').attr('src','image/sit1.png');
            $('#sit1_1Btn').removeClass('sit_selected');
            selectamount = (document.getElementsByClassName('sit_selected')).length;
            /*$('#testbox').attr('value',selectamount);*/
        }
    });
    $('#sit1_2Btn').click(function(){
        if(amountck<0){
            alert('사용자 수를 선택해 주세요');
        }
        else if(amountck > 0 && $('#sit1_2Btn').hasClass('sit_selected') == false){
            $('#sit1_2Btn').addClass('sit_selected');
            selectamount = (document.getElementsByClassName('sit_selected')).length;
            if(selectamount > amountck){
                alert('선택한 사용자 수 보다 많은 좌석수 입니다.');
                $('#sit1_2Btn').removeClass('sit_selected');
            }else{
                /*$('#testbox').attr('value',selectamount);*/
                $("#sit1_2Btn img").attr('src','image/checksit.png');
            }        
        }
        else if($('#sit1_2Btn').hasClass('sit_selected') == true){
            $('#sit1_2Btn img').attr('src','image/sit1.png');
            $('#sit1_2Btn').removeClass('sit_selected');
            selectamount = (document.getElementsByClassName('sit_selected')).length;
            /*$('#testbox').attr('value',selectamount);*/
        }
    });
    $('#sit1_3Btn').click(function(){
        if(amountck <= 0){
            alert('사용자 수를 선택해 주세요');
        }
        else if(amountck > 0 && $('#sit1_3Btn').hasClass('sit_selected') == false){
            $('#sit1_3Btn').addClass('sit_selected');
            selectamount = (document.getElementsByClassName('sit_selected')).length;
            if(selectamount > amountck){
                alert('선택한 사용자 수 보다 많은 좌석수 입니다.');
                $('#sit1_3Btn').removeClass('sit_selected');
            }else{
                /*$('#testbox').attr('value',selectamount);*/
                $("#sit1_3Btn img").attr('src','image/checksit.png');
            }        
        }
        else if($('#sit1_3Btn').hasClass('sit_selected') == true){
            $('#sit1_3Btn img').attr('src','image/sit1.png');
            $('#sit1_3Btn').removeClass('sit_selected');
            selectamount = (document.getElementsByClassName('sit_selected')).length;
            /*$('#testbox').attr('value',selectamount);*/
        }
    });
    $('#sit1_4Btn').click(function(){
        if(amountck <= 0){
            alert('사용자 수를 선택해 주세요');
        }
        else if(amountck > 0 && $('#sit1_4Btn').hasClass('sit_selected') == false){
            $('#sit1_4Btn').addClass('sit_selected');
            selectamount = (document.getElementsByClassName('sit_selected')).length;
            if(selectamount > amountck){
                alert('선택한 사용자 수 보다 많은 좌석수 입니다.');
                $('#sit1_4Btn').removeClass('sit_selected');
            }else{
                /*$('#testbox').attr('value',selectamount);*/
                $("#sit1_4Btn img").attr('src','image/checksit.png');
            }        
        }
        else if($('#sit1_4Btn').hasClass('sit_selected') == true){
            $('#sit1_4Btn img').attr('src','image/sit1.png');
            $('#sit1_4Btn').removeClass('sit_selected');
            selectamount = (document.getElementsByClassName('sit_selected')).length;
            /*$('#testbox').attr('value',selectamount);*/
        }
    });
    $('#sit1_5Btn').click(function(){
        if(amountck <= 0){
            alert('사용자 수를 선택해 주세요');
        }
        else if(amountck > 0 && $('#sit1_5Btn').hasClass('sit_selected') == false){
            $('#sit1_5Btn').addClass('sit_selected');
            selectamount = (document.getElementsByClassName('sit_selected')).length;
            if(selectamount > amountck){
                alert('선택한 사용자 수 보다 많은 좌석수 입니다.');
                $('#sit1_5Btn').removeClass('sit_selected');
            }else{
                /*$('#testbox').attr('value',selectamount);*/
                $("#sit1_5Btn img").attr('src','image/checksit.png');
            }        
        }
        else if($('#sit1_5Btn').hasClass('sit_selected') == true){
            $('#sit1_5Btn img').attr('src','image/sit1.png');
            $('#sit1_5Btn').removeClass('sit_selected');
            selectamount = (document.getElementsByClassName('sit_selected')).length;
            /*$('#testbox').attr('value',selectamount);*/
        }
    });

// 좌석 2번째 줄
    $('#sit2_1Btn').click(function(){
        if(amountck <= 0){
            alert('사용자 수를 선택해 주세요');
        }
        else if(amountck > 0 && $('#sit2_1Btn').hasClass('sit_selected') == false){
            $('#sit2_1Btn').addClass('sit_selected');
            selectamount = (document.getElementsByClassName('sit_selected')).length;
            if(selectamount > amountck){
                alert('선택한 사용자 수 보다 많은 좌석수 입니다.');
                $('#sit2_1Btn').removeClass('sit_selected');
            }else{
                /*$('#testbox').attr('value',selectamount);*/
                $("#sit2_1Btn img").attr('src','image/checksit.png');
            }        
        }
        else if($('#sit2_1Btn').hasClass('sit_selected') == true){
            $('#sit2_1Btn img').attr('src','image/sit1.png');
            $('#sit2_1Btn').removeClass('sit_selected');
            selectamount = (document.getElementsByClassName('sit_selected')).length;
            /*$('#testbox').attr('value',selectamount);*/
        }
    });
    $('#sit2_2Btn').click(function(){
        if(amountck <= 0){
            alert('사용자 수를 선택해 주세요');
        }
        else if(amountck > 0 && $('#sit2_2Btn').hasClass('sit_selected') == false){
            $('#sit2_2Btn').addClass('sit_selected');
            selectamount = (document.getElementsByClassName('sit_selected')).length;
            if(selectamount > amountck){
                alert('선택한 사용자 수 보다 많은 좌석수 입니다.');
                $('#sit2_2Btn').removeClass('sit_selected');
            }else{
                /*$('#testbox').attr('value',selectamount);*/
                $("#sit2_2Btn img").attr('src','image/checksit.png');
            }        
        }
        else if($('#sit2_2Btn').hasClass('sit_selected') == true){
            $('#sit2_2Btn img').attr('src','image/sit1.png');
            $('#sit2_2Btn').removeClass('sit_selected');
            selectamount = (document.getElementsByClassName('sit_selected')).length;
            /*$('#testbox').attr('value',selectamount);*/
        }
    });
    $('#sit2_3Btn').click(function(){
        if(amountck <= 0){
            alert('사용자 수를 선택해 주세요');
        }
        else if(amountck > 0 && $('#sit2_3Btn').hasClass('sit_selected') == false){
            $('#sit2_3Btn').addClass('sit_selected');
            selectamount = (document.getElementsByClassName('sit_selected')).length;
            if(selectamount > amountck){
                alert('선택한 사용자 수 보다 많은 좌석수 입니다.');
                $('#sit2_3Btn').removeClass('sit_selected');
            }else{
                /*$('#testbox').attr('value',selectamount);*/
                $("#sit2_3Btn img").attr('src','image/checksit.png');
            }        
        }
        else if($('#sit2_3Btn').hasClass('sit_selected') == true){
            $('#sit2_3Btn img').attr('src','image/sit1.png');
            $('#sit2_3Btn').removeClass('sit_selected');
            selectamount = (document.getElementsByClassName('sit_selected')).length;
            /*$('#testbox').attr('value',selectamount);*/
        }
    });
    $('#sit2_4Btn').click(function(){
        if(amountck <= 0){
            alert('사용자 수를 선택해 주세요');
        }
        else if(amountck > 0 && $('#sit2_4Btn').hasClass('sit_selected') == false){
            $('#sit2_4Btn').addClass('sit_selected');
            selectamount = (document.getElementsByClassName('sit_selected')).length;
            if(selectamount > amountck){
                alert('선택한 사용자 수 보다 많은 좌석수 입니다.');
                $('#sit2_4Btn').removeClass('sit_selected');
            }else{
                /*$('#testbox').attr('value',selectamount);*/
                $("#sit2_4Btn img").attr('src','image/checksit.png');
            }        
        }
        else if($('#sit2_4Btn').hasClass('sit_selected') == true){
            $('#sit2_4Btn img').attr('src','image/sit1.png');
            $('#sit2_4Btn').removeClass('sit_selected');
            selectamount = (document.getElementsByClassName('sit_selected')).length;
            /*$('#testbox').attr('value',selectamount);*/
        }
    });
    $('#sit2_5Btn').click(function(){
        if(amountck <= 0){
            alert('사용자 수를 선택해 주세요');
        }
        else if(amountck > 0 && $('#sit2_5Btn').hasClass('sit_selected') == false){
            $('#sit2_5Btn').addClass('sit_selected');
            selectamount = (document.getElementsByClassName('sit_selected')).length;
            if(selectamount > amountck){
                alert('선택한 사용자 수 보다 많은 좌석수 입니다.');
                $('#sit2_5Btn').removeClass('sit_selected');
            }else{
                /*$('#testbox').attr('value',selectamount);*/
                $("#sit2_5Btn img").attr('src','image/checksit.png');
            }        
        }
        else if($('#sit2_5Btn').hasClass('sit_selected') == true){
            $('#sit2_5Btn img').attr('src','image/sit1.png');
            $('#sit2_5Btn').removeClass('sit_selected');
            selectamount = (document.getElementsByClassName('sit_selected')).length;
            /*$('#testbox').attr('value',selectamount);*/
        }
    });

// 좌석 3번째 줄
$('#sit3_1Btn').click(function(){
    if(amountck <= 0){
        alert('사용자 수를 선택해 주세요');
    }
    else if(amountck > 0 && $('#sit3_1Btn').hasClass('sit_selected') == false){
        $('#sit3_1Btn').addClass('sit_selected');
        selectamount = (document.getElementsByClassName('sit_selected')).length;
        if(selectamount > amountck){
            alert('선택한 사용자 수 보다 많은 좌석수 입니다.');
            $('#sit3_1Btn').removeClass('sit_selected');
        }else{
            /*$('#testbox').attr('value',selectamount);*/
            $("#sit3_1Btn img").attr('src','image/checksit.png');
        }        
    }
    else if($('#sit3_1Btn').hasClass('sit_selected') == true){
        $('#sit3_1Btn img').attr('src','image/sit1.png');
        $('#sit3_1Btn').removeClass('sit_selected');
        selectamount = (document.getElementsByClassName('sit_selected')).length;
        /*$('#testbox').attr('value',selectamount);*/
    }
});
$('#sit3_2Btn').click(function(){
    if(amountck <= 0){
        alert('사용자 수를 선택해 주세요');
    }
    else if(amountck > 0 && $('#sit3_2Btn').hasClass('sit_selected') == false){
        $('#sit3_2Btn').addClass('sit_selected');
        selectamount = (document.getElementsByClassName('sit_selected')).length;
        if(selectamount > amountck){
            alert('선택한 사용자 수 보다 많은 좌석수 입니다.');
            $('#sit3_2Btn').removeClass('sit_selected');
        }else{
            /*$('#testbox').attr('value',selectamount);*/
            $("#sit3_2Btn img").attr('src','image/checksit.png');
        }        
    }
    else if($('#sit3_2Btn').hasClass('sit_selected') == true){
        $('#sit3_2Btn img').attr('src','image/sit1.png');
        $('#sit3_2Btn').removeClass('sit_selected');
        selectamount = (document.getElementsByClassName('sit_selected')).length;
        /*$('#testbox').attr('value',selectamount);*/
    }
});
$('#sit3_3Btn').click(function(){
    if(amountck <= 0){
        alert('사용자 수를 선택해 주세요');
    }
    else if(amountck > 0 && $('#sit3_3Btn').hasClass('sit_selected') == false){
        $('#sit3_3Btn').addClass('sit_selected');
        selectamount = (document.getElementsByClassName('sit_selected')).length;
        if(selectamount > amountck){
            alert('선택한 사용자 수 보다 많은 좌석수 입니다.');
            $('#sit3_3Btn').removeClass('sit_selected');
        }else{
            /*$('#testbox').attr('value',selectamount);*/
            $("#sit3_3Btn img").attr('src','image/checksit.png');
        }        
    }
    else if($('#sit3_3Btn').hasClass('sit_selected') == true){
        $('#sit3_3Btn img').attr('src','image/sit1.png');
        $('#sit3_3Btn').removeClass('sit_selected');
        selectamount = (document.getElementsByClassName('sit_selected')).length;
        /*$('#testbox').attr('value',selectamount);*/
    }
});
$('#sit3_4Btn').click(function(){
    if(amountck <= 0){
        alert('사용자 수를 선택해 주세요');
    }
    else if(amountck > 0 && $('#sit3_4Btn').hasClass('sit_selected') == false){
        $('#sit3_4Btn').addClass('sit_selected');
        selectamount = (document.getElementsByClassName('sit_selected')).length;
        if(selectamount > amountck){
            alert('선택한 사용자 수 보다 많은 좌석수 입니다.');
            $('#sit3_4Btn').removeClass('sit_selected');
        }else{
            /*$('#testbox').attr('value',selectamount);*/
            $("#sit3_4Btn img").attr('src','image/checksit.png');
        }        
    }
    else if($('#sit3_4Btn').hasClass('sit_selected') == true){
        $('#sit3_4Btn img').attr('src','image/sit1.png');
        $('#sit3_4Btn').removeClass('sit_selected');
        selectamount = (document.getElementsByClassName('sit_selected')).length;
        /*$('#testbox').attr('value',selectamount);*/
    }
});
$('#sit3_5Btn').click(function(){
    if(amountck <= 0){
        alert('사용자 수를 선택해 주세요');
    }
    else if(amountck > 0 && $('#sit3_5Btn').hasClass('sit_selected') == false){
        $('#sit3_5Btn').addClass('sit_selected');
        selectamount = (document.getElementsByClassName('sit_selected')).length;
        if(selectamount > amountck){
            alert('선택한 사용자 수 보다 많은 좌석수 입니다.');
            $('#sit3_5Btn').removeClass('sit_selected');
        }else{
            /*$('#testbox').attr('value',selectamount);*/
            $("#sit3_5Btn img").attr('src','image/checksit.png');
        }        
    }
    else if($('#sit3_5Btn').hasClass('sit_selected') == true){
        $('#sit3_5Btn img').attr('src','image/sit1.png');
        $('#sit3_5Btn').removeClass('sit_selected');
        selectamount = (document.getElementsByClassName('sit_selected')).length;
        /*$('#testbox').attr('value',selectamount);*/
    }
});

// 좌석 4번째 줄
$('#sit4_1Btn').click(function(){
    if(amountck <= 0){
        alert('사용자 수를 선택해 주세요');
    }
    else if(amountck > 0 && $('#sit4_1Btn').hasClass('sit_selected') == false){
        $('#sit4_1Btn').addClass('sit_selected');
        selectamount = (document.getElementsByClassName('sit_selected')).length;
        if(selectamount > amountck){
            alert('선택한 사용자 수 보다 많은 좌석수 입니다.');
            $('#sit4_1Btn').removeClass('sit_selected');
        }else{
            /*$('#testbox').attr('value',selectamount);*/
            $("#sit4_1Btn img").attr('src','image/checksit.png');
        }        
    }
    else if($('#sit4_1Btn').hasClass('sit_selected') == true){
        $('#sit4_1Btn img').attr('src','image/sit1.png');
        $('#sit4_1Btn').removeClass('sit_selected');
        selectamount = (document.getElementsByClassName('sit_selected')).length;
        /*$('#testbox').attr('value',selectamount);*/
    }
});
$('#sit4_2Btn').click(function(){
    if(amountck <= 0){
        alert('사용자 수를 선택해 주세요');
    }
    else if(amountck > 0 && $('#sit4_2Btn').hasClass('sit_selected') == false){
        $('#sit4_2Btn').addClass('sit_selected');
        selectamount = (document.getElementsByClassName('sit_selected')).length;
        if(selectamount > amountck){
            alert('선택한 사용자 수 보다 많은 좌석수 입니다.');
            $('#sit4_2Btn').removeClass('sit_selected');
        }else{
            /*$('#testbox').attr('value',selectamount);*/
            $("#sit4_2Btn img").attr('src','image/checksit.png');
        }        
    }
    else if($('#sit4_2Btn').hasClass('sit_selected') == true){
        $('#sit4_2Btn img').attr('src','image/sit1.png');
        $('#sit4_2Btn').removeClass('sit_selected');
        selectamount = (document.getElementsByClassName('sit_selected')).length;
        /*$('#testbox').attr('value',selectamount);*/
    }
});
$('#sit4_3Btn').click(function(){
    if(amountck <= 0){
        alert('사용자 수를 선택해 주세요');
    }
    else if(amountck > 0 && $('#sit4_3Btn').hasClass('sit_selected') == false){
        $('#sit4_3Btn').addClass('sit_selected');
        selectamount = (document.getElementsByClassName('sit_selected')).length;
        if(selectamount > amountck){
            alert('선택한 사용자 수 보다 많은 좌석수 입니다.');
            $('#sit4_3Btn').removeClass('sit_selected');
        }else{
            /*$('#testbox').attr('value',selectamount);*/
            $("#sit4_3Btn img").attr('src','image/checksit.png');
        }        
    }
    else if($('#sit4_3Btn').hasClass('sit_selected') == true){
        $('#sit4_3Btn img').attr('src','image/sit1.png');
        $('#sit4_3Btn').removeClass('sit_selected');
        selectamount = (document.getElementsByClassName('sit_selected')).length;
        /*$('#testbox').attr('value',selectamount);*/
    }
});
$('#sit4_4Btn').click(function(){
    if(amountck <= 0){
        alert('사용자 수를 선택해 주세요');
    }
    else if(amountck > 0 && $('#sit4_4Btn').hasClass('sit_selected') == false){
        $('#sit4_4Btn').addClass('sit_selected');
        selectamount = (document.getElementsByClassName('sit_selected')).length;
        if(selectamount > amountck){
            alert('선택한 사용자 수 보다 많은 좌석수 입니다.');
            $('#sit4_4Btn').removeClass('sit_selected');
        }else{
            /*$('#testbox').attr('value',selectamount);*/
            $("#sit4_4Btn img").attr('src','image/checksit.png');
        }        
    }
    else if($('#sit4_4Btn').hasClass('sit_selected') == true){
        $('#sit4_4Btn img').attr('src','image/sit1.png');
        $('#sit4_4Btn').removeClass('sit_selected');
        selectamount = (document.getElementsByClassName('sit_selected')).length;
        /*$('#testbox').attr('value',selectamount);*/
    }
});
$('#sit4_5Btn').click(function(){
    if(amountck <= 0){
        alert('사용자 수를 선택해 주세요');
    }
    else if(amountck > 0 && $('#sit4_5Btn').hasClass('sit_selected') == false){
        $('#sit4_5Btn').addClass('sit_selected');
        selectamount = (document.getElementsByClassName('sit_selected')).length;
        if(selectamount > amountck){
            alert('선택한 사용자 수 보다 많은 좌석수 입니다.');
            $('#sit4_5Btn').removeClass('sit_selected');
        }else{
            /*$('#testbox').attr('value',selectamount);*/
            $("#sit4_5Btn img").attr('src','image/checksit.png');
        }        
    }
    else if($('#sit4_5Btn').hasClass('sit_selected') == true){
        $('#sit4_5Btn img').attr('src','image/sit1.png');
        $('#sit4_5Btn').removeClass('sit_selected');
        selectamount = (document.getElementsByClassName('sit_selected')).length;
        /*$('#testbox').attr('value',selectamount);*/
    }
});

// 좌석 5번째 줄
$('#sit5_1Btn').click(function(){
    if(amountck <= 0){
        alert('사용자 수를 선택해 주세요');
    }
    else if(amountck > 0 && $('#sit5_1Btn').hasClass('sit_selected') == false){
        $('#sit5_1Btn').addClass('sit_selected');
        selectamount = (document.getElementsByClassName('sit_selected')).length;
        if(selectamount > amountck){
            alert('선택한 사용자 수 보다 많은 좌석수 입니다.');
            $('#sit5_1Btn').removeClass('sit_selected');
        }else{
            /*$('#testbox').attr('value',selectamount);*/
            $("#sit5_1Btn img").attr('src','image/checksit.png');
        }        
    }
    else if($('#sit5_1Btn').hasClass('sit_selected') == true){
        $('#sit5_1Btn img').attr('src','image/sit1.png');
        $('#sit5_1Btn').removeClass('sit_selected');
        selectamount = (document.getElementsByClassName('sit_selected')).length;
        /*$('#testbox').attr('value',selectamount);*/
    }
});
$('#sit5_2Btn').click(function(){
    if(amountck <= 0){
        alert('사용자 수를 선택해 주세요');
    }
    else if(amountck > 0 && $('#sit5_2Btn').hasClass('sit_selected') == false){
        $('#sit5_2Btn').addClass('sit_selected');
        selectamount = (document.getElementsByClassName('sit_selected')).length;
        if(selectamount > amountck){
            alert('선택한 사용자 수 보다 많은 좌석수 입니다.');
            $('#sit5_2Btn').removeClass('sit_selected');
        }else{
            /*$('#testbox').attr('value',selectamount);*/
            $("#sit5_2Btn img").attr('src','image/checksit.png');
        }        
    }
    else if($('#sit5_2Btn').hasClass('sit_selected') == true){
        $('#sit5_2Btn img').attr('src','image/sit1.png');
        $('#sit5_2Btn').removeClass('sit_selected');
        selectamount = (document.getElementsByClassName('sit_selected')).length;
        /*$('#testbox').attr('value',selectamount);*/
    }
});
$('#sit5_3Btn').click(function(){
    if(amountck <= 0){
        alert('사용자 수를 선택해 주세요');
    }
    else if(amountck > 0 && $('#sit5_3Btn').hasClass('sit_selected') == false){
        $('#sit5_3Btn').addClass('sit_selected');
        selectamount = (document.getElementsByClassName('sit_selected')).length;
        if(selectamount > amountck){
            alert('선택한 사용자 수 보다 많은 좌석수 입니다.');
            $('#sit5_3Btn').removeClass('sit_selected');
        }else{
            /*$('#testbox').attr('value',selectamount);*/
            $("#sit5_3Btn img").attr('src','image/checksit.png');
        }        
    }
    else if($('#sit5_3Btn').hasClass('sit_selected') == true){
        $('#sit5_3Btn img').attr('src','image/sit1.png');
        $('#sit5_3Btn').removeClass('sit_selected');
        selectamount = (document.getElementsByClassName('sit_selected')).length;
        /*$('#testbox').attr('value',selectamount);*/
    }
});
$('#sit5_4Btn').click(function(){
    if(amountck <= 0){
        alert('사용자 수를 선택해 주세요');
    }
    else if(amountck > 0 && $('#sit5_4Btn').hasClass('sit_selected') == false){
        $('#sit5_4Btn').addClass('sit_selected');
        selectamount = (document.getElementsByClassName('sit_selected')).length;
        if(selectamount > amountck){
            alert('선택한 사용자 수 보다 많은 좌석수 입니다.');
            $('#sit5_4Btn').removeClass('sit_selected');
        }else{
            /*$('#testbox').attr('value',selectamount);*/
            $("#sit5_4Btn img").attr('src','image/checksit.png');
        }        
    }
    else if($('#sit5_4Btn').hasClass('sit_selected') == true){
        $('#sit5_4Btn img').attr('src','image/sit1.png');
        $('#sit5_4Btn').removeClass('sit_selected');
        selectamount = (document.getElementsByClassName('sit_selected')).length;
        /*$('#testbox').attr('value',selectamount);*/
    }
});
$('#sit5_5Btn').click(function(){
    if(amountck <= 0){
        alert('사용자 수를 선택해 주세요');
    }
    else if(amountck > 0 && $('#sit5_5Btn').hasClass('sit_selected') == false){
        $('#sit5_5Btn').addClass('sit_selected');
        selectamount = (document.getElementsByClassName('sit_selected')).length;
        if(selectamount > amountck){
            alert('선택한 사용자 수 보다 많은 좌석수 입니다.');
            $('#sit5_5Btn').removeClass('sit_selected');
        }else{
            /*$('#testbox').attr('value',selectamount);*/
            $("#sit5_5Btn img").attr('src','image/checksit.png');
        }        
    }
    else if($('#sit5_5Btn').hasClass('sit_selected') == true){
        $('#sit5_5Btn img').attr('src','image/sit1.png');
        $('#sit5_5Btn').removeClass('sit_selected');
        selectamount = (document.getElementsByClassName('sit_selected')).length;
        /*$('#testbox').attr('value',selectamount);*/
    }
});
});