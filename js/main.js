$(function () {

    //============= menu ===========
      $('.toggle_bar').on("click", function(e) {
        e.stopPropagation()
        $('.toggle_bar_icon').toggleClass('active');
        $('.navbar-nav').toggleClass('active');
        if ($(".navbar-nav").hasClass('active')) {
            $('.header_cart_deitals, .header_serch').removeClass('active');
            $("body").addClass('overlay');
        } else {
            $("body").removeClass('overlay');
            $('.navbar-sub,.mega-menu').slideUp().parents('li').removeClass('active');
            $('.simple-mega .mega-text').removeClass('active').next().slideUp();
        }
    });

    $('.navbar-nav li').click(function(e) {
        e.stopPropagation();
        // $(this).children('.navbar-sub,.mega-menu').slideToggle().parents('li').siblings().find('.navbar-sub,.mega-menu').slideUp();
        
      // $(this).toggleClass('active').siblings().removeClass('active').find('.navbar-sub,.mega-menu').slideUp();

    $(this).children('.navbar-sub,.mega-menu').slideToggle().parents('li').siblings().find('.navbar-sub,.mega-menu').slideUp();
    $(this).toggleClass('active').siblings().removeClass('active').find('.navbar-sub,.mega-menu').slideUp();
      });

     
    $('a[href=#]').click(function(e) {
        e.preventDefault(); 
    });

// ===================== Mega Menu ===============

  $('.simple-mega,.mega-text').click(function(e) {
    e.stopPropagation();
        $(this).toggleClass('active').next().slideToggle().parents().siblings().children().removeClass('active').next('.mega-navbar-sub').slideUp();
    });



    //=========food catagory=============

    $('.single-catagory .title').on("click", function() {
      $(this).siblings().slideToggle().parents().siblings().children('.item').slideUp();
  });


  // nice select
  $('select').niceSelect();
  
  // scroll to top
  $(window).scroll(function () {
    if ($(this).scrollTop() !== 0) {
        $('#scroll_to_Up').fadeIn();
    } else {
        $('#scroll_to_Up').fadeOut();
    }
  });

  $('#scroll_to_Up').on('click', function () {
    $("html, body").animate({scrollTop: 0});
    return false;
  });

   // Prelax Efect
   var image = document.getElementsByClassName('top-bottom');
   new simpleParallax(image, {
     delay: .8,
     transition: 'cubic-bezier(0,0,0,1)'
   });

   var image = document.getElementsByClassName('Paralex_left_right');
   new simpleParallax(image, {
       delay: .8,
     orientation: 'left'
   });

   // sticky top menu  

    let win = $(window);
    let sticky_id = $(".navbar");
    win.on('scroll', function () {
        let scroll = win.scrollTop();
        if (scroll < 245) {
            sticky_id.removeClass("sticky-header");
        } else {
            sticky_id.addClass("sticky-header");
        }
    });


  //===============product slider =============
  var main_img=document.getElementById('main_img');
  var smallimg=document.getElementsByClassName('small_img');

  smallimg[0].onclick=function(){
    main_img.src= smallimg[0].src;
  }
  smallimg[1].onclick=function(){
    main_img.src= smallimg[1].src;
  }
  smallimg[2].onclick=function(){
    main_img.src= smallimg[2].src;
  }
  smallimg[3].onclick=function(){
    main_img.src= smallimg[3].src;
  }

  

  //============ review slider ===================


  $('.review_slider').owlCarousel({
    loop:false,
    margin:20,
    dots: true,
    arrow:false,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
        },
        575:{
            items:2,
        },
        1000:{
            items:3,
        }
    }
})


$('.navbar-nav li').click(function(e) {
  e.stopPropagation()
});


 });
