$(function () { // jQuery 시작
    var h_top; //각 콘텐츠 영역 top값
    var box_name, box_id;
    var $navi = $('#scl_btn_navi > ul > li');

    $navi.eq(0).addClass('on');

    //블릿메뉴 복제
    var naviClone = $('#scl_btn_navi').contents().clone();
    var navi_list = $('<div class="navi_cont"></div>');

    navi_list.append(naviClone);
    navi_list.appendTo('body');

    var bl = $('.navi_cont ul li');
    var button = $('#scl_btn_navi > ul > li, .navi_cont ul li');


    button.click(function () {
        box_name = $(this).find('a').attr('href'); //책갈피 이름
        box_id = box_name.substr(1); //#profile => profile

        h_top = $('#main_wrap #' + box_id).offset().top - 50;

        console.log(h_top);

        $('html, body').animate({
            scrollTop: h_top
        }, 400);

        return false;
    });

    $(window).scroll(function () {
        var st = $(this).scrollTop();

        //각 콘텐츠에 도달시 해당 메뉴 활성화
        $('#main_wrap > section').each(function () {
            var i = $(this).index();

            if ($(this).offset().top - 250 <= st) {
                $navi.removeClass('on');
                $navi.eq(i).addClass('on');
                bl.removeClass('on');
                bl.eq(i).addClass('on');
            }

        }); //end:each

        //마지막 콘텐츠의 세로 길이가 화면의 세로 길이보다 작은 경우 마지막 콘텐츠로 활성화시킴
        if (st >= ($('#main_wrap').height() - $(window).height())) {
            $navi.removeClass('on');
            $navi.eq($navi.length - 1).addClass('on');
            bl.removeClass('on');
            bl.eq($navi.length - 1).addClass('on');
        }

    }); //end:scroll   
   
    
    $('#topbtn').click(function(){
         $('html, body').animate({
             scrollTop : 0
         }, 400);
        
        return false;
    });    
    
    
  
});

