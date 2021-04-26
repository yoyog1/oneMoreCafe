$(function(){

    $('header a').click(function () { 
        var $navid =$(this).attr('href');
        var $position=$($navid).offset().top;


        $('html,body').animate({'scrollTop':$position},1000);
        
    });

    //$(function(){
      //  if( $(window).scrollTop()>740){
        //    $('.fa-coffee').fadeIn();
        //}else{
            //$('.fa-coffee').fadeOut();
      //  };
    //});
    $('main i').hover(
            function(){
              $('.fa-mug-hot').show();
              
            
            },function(){
              
              $('.fa-mug-hot').hide();
            });

    $(window).on('load scroll', function(){
        if ($(window).scrollTop() > 200) {
          $('main .fa-coffee').fadeIn(400);
         } else {
          $('main i').fadeOut(400);
         }
      });

      $('main i').click(function(){
        $('html,body').animate({'scrollTop':0},500);

      });

      

});
