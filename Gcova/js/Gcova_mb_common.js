var $ = jQuery;


$(function () { //JQuery 시작
      $('#lnb_wrap').mouseenter(function () {
          $('#lnb_wrap >ul > li  .lnb_sec').stop().slideDown('fast');
      }).mouseleave(function () {
          $('#lnb_wrap >ul > li .lnb_sec').stop().slideUp('fast');
      });


      var naviClon = $('#lnb_wrap').contents().clone();

      naviClon.appendTo('#mb_menu');


      var ulClon = $('#sns_wrap').contents().clone();
      /* pc 네비게이션 ul 아래 모든 후손이 복제 */

      ulClon.appendTo('#mb_sns_wrap');
      
      /* 모바일 메뉴버튼 클릭시 메뉴 보임 */
    $('#m_menu').click(function(){
       $('#mb_navi').css('right','0');
    });


    /* 닫기버튼 클릭시 모바일 메뉴 사라짐 */
    $('#close').click(function () {
        $('#mb_navi').css('right', '-100%');

    });
      
      
    // 모바일 서브메뉴 활성화
      $('#mb_menu > ul > li > a').click(function(){
          $(this).toggleClass('selected');
          $('#mb_menu > ul > li > a').not(this).removeClass('selected');
          
            $(this).find('+.lnb_sec').slideToggle('fast');
        $('#mb_menu > ul > li > a').not(this).find('+.lnb_sec').slideUp('fast');
          
          return false;
      });
      
    $(window).resize(function(){
        if($(this).outerWidth() > 860){
            $('#mb_navi').css('right','-100%');
            $('#mb_menu > ul > li > a').removeClass('selected');
            $('#mb_menu > ul > li .lnb_sec').hide();
        }
    });
      
      
      var time = 500;
      $('#m_menu > a').click(function(){
         $('#mb_navi').stop().animate({
             right: 0
         },time);
      });
      
       $('#close > a img').click(function(){
         $('#mb_navi').stop().animate({
             right:'-100%'
         },time);
      });
        
      
  }); //JQuery 끝


    
