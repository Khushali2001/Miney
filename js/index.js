

$('.menu_toggler').click(function(){

   $('.nav_menu').animate({
      width: '100%',
      zIndex: '999',
   });

   $('.nav_menu_list').css({
      display: 'flex',
   });

   $('.mob_nav_icons').css({
      display: 'flex',
   });

   $('.nav_mob_btn').css({
      display: 'flex',
   });
   
});

$('.mob_menu_close').click(function(){

   $('.nav_menu').animate({
      width: '0%',
      zIndex: '-1',
   });

   $('.nav_menu_list').css({
      display: 'none',
   });

   $('.mob_nav_icons').css({
      display: 'none',
   });

   $('.nav_mob_btn').css({
      display: 'none',
   });
   
});


$('.nav_dark_mob .dark_nav_toggle').click(function() {

   $('.nav_dark_mob .nav_dark_menu').css({
      width: '100%',
      zIndex: '999',
   });

   $('.nav_dark_mob ul.nav_d_menu_list ').css({
      display: 'flex',
   })

   $('.nav_dark_mob ul.nav_d_icon').css({
      display: 'flex',
   })

   $('.nav_dark_mob ul.mob_nav_d_icons').css({
      display: 'flex',
   })

})



$('.nav_dark_mob .mob_dark_menu_close').click(function() {

   $('.nav_dark_mob .nav_dark_menu').css({
      width: '0%',
      zIndex: '-1',
   });

   $('.nav_dark_mob ul.nav_d_menu_list ').css({
      display: 'none',
   })

   $('.nav_dark_mob ul.nav_d_icon').css({
      display: 'none',
   })

   $(' ul.mob_nav_d_icons').css({
      display: 'none',
   })

})




$('.products .carousel-main').flickity({
  cellAlign: 'left',
  contain: true,
  pageDots: false,
  wrapAround: true,
  prevNextButtons: false,
  fade: true,
});


$('.tab_inner ').click(function(){

   $(this).addClass('tab_active');

   var tab_index = $(this).parent().index();

   $(this).parent().nextAll().children().removeClass('tab_active');
   $(this).parent().prevAll().children().removeClass('tab_active');

   $('.tab_txt').hide();
   $('.tab_txt').eq(tab_index).show();
   
});

$('.faq_card').click(function(){

    $(this).toggleClass('faq_active');
    $(this).children('.faq_txt').slideToggle();

    $(this).nextAll().children('.faq_txt').slideUp();
    $(this).prevAll().children('.faq_txt').slideUp();

    $(this).nextAll().removeClass('faq_active');
    $(this).prevAll().removeClass('faq_active');
    
});


$('.footer_mob p.footer_link_heading').click(function(){

   $(this).toggleClass('footer_heading_active');
   $(this).next().slideToggle();

});


