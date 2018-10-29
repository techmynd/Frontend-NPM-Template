//$.noConflict();
var $ = jQuery.noConflict();
jQuery(window).on('load',function($) {
  // code here
  // $('body').fadeIn();
});

/*if window is resized - check*/
jQuery(window).on('resize',function($){
  // code here
  shiftColsLeftRight();

  // window width height now
  windowHeightNow = jQuery(window).height();
  windowWidthNow = jQuery(window).width();

});

jQuery(document).ready(function($) {

  shiftColsLeftRight();

  $('table tr:even').addClass("even");
  $('table tr:odd').addClass("odd");

  $('ul li:even').addClass("even");
  $('ul li:odd').addClass("odd");

  // initial window width height
  windowHeightInitial = jQuery(window).height();
  windowWidthInitial = jQuery(window).width();

  //add defer if its not in script tag  
  $('script').each(function(){
    if( !$(this).attr('defer') || $(this).attr('defer', '') ) {
       $(this).attr('defer', 'defer');
    }
  });
  //end
  
  //add clas and number, unique identifier to each element
  $('ul li').addClass(function(index) {
    $(this).addClass("list-item-" + index);
  });

  // secondary nav move
  // $('.secondary-nav').animate({ 'margin-left': '+=200px', 'opacity': '0.5' }, 1000 );
  
  // time // set interval or set timeout
    // setInterval('doSomethingPeriodically()', 1000);  
    // setTimeout('doSomethingAfterFiveSeconds()', 5000);
  // or

  /*just toggle*/
  $('.toggleTrigger').click(function(event) {
    event.preventDefault();
    $('.toggleWrap').slideToggle();
  });

  // collapsable widgets // with single function
  $('.widget-expandable .title a').on('click', function(event){
    event.preventDefault();
    $(this).closest('.widget-expandable').find('.w-body').stop().slideToggle('fast');
    $(this).closest('.widget-expandable').find('.title a i').stop().toggleClass('fa-minus fa-plus');
  });

  $('.widget-expandable-reverse .title a').on('click', function(event){
    event.preventDefault();
    $(this).closest('.widget-expandable-reverse').find('.w-body').stop().slideToggle('fast');
    $(this).closest('.widget-expandable-reverse').find('.title a i').stop().toggleClass('fa-minus fa-plus');
  });
  // collapsable widgets // with single function

  // categories collapse starts
  $(".collapsable a").on('click', function(event){
    event.preventDefault();
    $(this).closest('.collapsable').find('.nav').stop().slideToggle('fast');
    $(this).closest('.collapsable').find('a .fa').stop().toggleClass('fa-angle-right fa-angle-down');
  });
  // categories collapse ends
  
  /* animate to top */
  //$('.top').click(function () {$('body,html').animate({scrollTop: 0}, 800,'easeInOutExpo');
  //    return false;
  //});
  $('.scrollTop').click(function(event){
    event.preventDefault();
    $('body,html').animate({ scrollTop:0 }, 800, 'easeOutExpo');
  });

  // bootstrap accordian - toggle icons
  var selectIds = $('#collapseOne,#collapseTwo,#collapseThree,.panel-collapse');
  $(function ($) {
      selectIds.on('show.bs.collapse hidden.bs.collapse', function () {
          $(this).prev().find('.fa').toggleClass('fa-plus fa-minus');
          $(this).prev().find('.icon').toggleClass('ion-ios-add ion-ios-remove');
          $(this).prev().find('.icnc').toggleClass('ion-ios-add-circle-outline ion-ios-remove-circle-outline');
      });
  });
  // bootstrap accordian - toggle icons

  /////// Bootstrap Accordian FIX - move control to the top of opened tab - onclick - start
  $('#accordion').on('shown.bs.collapse', function (e) {

    // Validate this panel belongs to this accordian, and not an embedded one
    var actualAccordianId = $('a[href="#' + $(e.target).attr('id') + '"').data('parent');
    var targetAccordianId = '#' + $(this).attr('id');
    if (actualAccordianId !== targetAccordianId) return;

    var clickedHeader = $(this).find('.panel > .collapse.in').closest('.panel').find('.panel-heading');
    var offset = clickedHeader.offset();
    var top = $(window).scrollTop();
    if(offset) {
      var topOfHeader = offset.top;
      if(topOfHeader < top) {
        $('html,body').animate({ scrollTop: topOfHeader}, 400, 'swing');
      }
    }
  });
  /////// Bootstrap Accordian FIX - move control to the top of opened tab - onclick - end
  
  // animate numbers // count number to its original value // number counter // number animator
  // just add .counter class to a div / span that contains a number
  /*
  $('.counter').each(function(){
      $(this).prop('NumberUp', 0).animate({
        NumberUp: $(this).text()
      }, {
        duration: 2000,
        easing: 'easeOutExpo', 
        step: function (now) {
          $(this).text(Math.ceil(now));
        }
      });
  });
  */

  /*
  $('.down').click(function(event){
    event.preventDefault();
    $('.slide1').slideDown(800, 'easeInOutExpo');
  });
  */
 
  // this toggleclass / not this remove class
  // remove class from siblings that not not quite siblings but toggle class on this
  /*
  $('.choose-metal-wrap .metal-box').click(function(){
      $('.choose-metal-wrap .metal-box').not(this).removeClass('active');
      $(this).toggleClass('active');
  });
  */

});

// wow animation
var wow = new WOW(
  {
    boxClass:     'wow',      // animated element css class (default is wow)
    animateClass: 'animated', // animation css class (default is animated)
    offset:       0,          // distance to the element when triggering the animation (default is 0)
    mobile:       true,       // trigger animations on mobile devices (default is true)
    live:         true,       // act on asynchronously loaded content (default is true)
    callback:     function(box) {
      // the callback is fired every time an animation is started
      // the argument that is passed in is the DOM node being animated
    },
    scrollContainer: null // optional scroll container selector, otherwise use window
  }
);
wow.init();

/*Plain JS*/

/*Year for Footer*/
function showCurrentYear() {
  var yearFormula = new Date().getFullYear();
  return yearFormula;
}
document.getElementById("yearJS").innerHTML = showCurrentYear();


// FUNCTIONS //

// shift columns for small screen
function shiftColsLeftRight() {
    if( jQuery(window).width() <= 991 ) {
        //jQuery('.col-shift-left-js').insertBefore('.col-shift-right-js');
        jQuery('.col-shift-left-js').each(function() {
            jQuery(this).parent('.row').find('.col-shift-right-js').insertAfter(this);
        });  

    } else {
        // jQuery('.col-shift-right-js').insertBefore('.col-shift-left-js');
        jQuery('.col-shift-right-js').each(function() {
            jQuery(this).parent('.row').find('.col-shift-left-js').insertAfter(this);
        });  
    }
}




// $('.col-shift-right-js').each(function() {
//     $(this).parent('.row').find('.col-shift-left-js').insertAfter(this);
// });





// stop droppdown to close on clicking inside of it // for example in case of signin dropdowns
// $(document).on('click', '.dropdown-user', '.dropdown-menu', function (e) {
//   e.stopPropagation();
// });

/*
// stick header starts
$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if (scroll >= 10) {
        $(".navbar-fixed-top").addClass("top-opacity");
    } else {
        $(".navbar-fixed-top").removeClass("top-opacity");
    }
});
// stick header ends
*/


/*
// jquery tabs
$(function() { $( "#tabs" ).tabs(); });
// jquery tabs
// stop jerk on click # based links
$('#tabs a').click(function(event) {
event.preventDefault();
});
// stop jerk on click # based links ends

// ADD SLIDEDOWN ANIMATION TO DROPDOWN 
$('.dropdown').on('show.bs.dropdown', function(e){
  $(this).find('.dropdown-menu').first().stop(true, true).slideDown("slow");
});

// ADD SLIDEUP ANIMATION TO DROPDOWN //
$('.dropdown').on('hide.bs.dropdown', function(e){
  $(this).find('.dropdown-menu').first().stop(true, true).slideUp("fast");
});

*/

  /*Collapsable*/
  // $(".collapsable h3").on('click', function(event){
  //   event.preventDefault();
  //   $(this).closest('.collapsable').find('.collapse').stop().slideToggle('fast');
  //   $(this).closest('.collapsable').find('.h3 span').stop().toggleClass('fa-angle-down fa-angle-up');
  // });

  /*Categories Panel Collapsable*/
  // $(".collapsable a").on('click', function(event){
  //   event.preventDefault();
  //   $(this).closest('.collapsable').find('.nav-tab-line').stop().slideToggle('fast');
  //   $(this).closest('.collapsable').find('.check-circle span').stop().toggleClass('fa-angle-right fa-angle-down');
  // });






