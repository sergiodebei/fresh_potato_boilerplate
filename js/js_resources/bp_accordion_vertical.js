$( document ).ready(function() {

	//accordion vertical
	if($('#accordion_vertical').length){

	  var curr = 1;   // set desired opened tab
	                            
	  // var contW = $('.cont').outerWidth(true);
	  $('.cont').wrap('<div class="av_slide" />');
	  if ($(window).width() < 767) {
	    $('.av_slide').eq(curr-1).animate({width:'80%'},700).addClass('active').prev('.title').addClass('active');
	  }
	  else{
	    $('.av_slide').eq(curr-1).animate({width:'50%'},700).addClass('active').prev('.title').addClass('active');
	  }
	  $('.av_slide.active .overlay').delay(400).animate({opacity:'0'},750);
	  $('.av_slide.active p').css({display:'block'});
	  $('.label_title').click(function(){
	      $(this).addClass('active').siblings().removeClass('active');
	      $('.av_slide').stop().animate({width:'0'},700);
	      if ($(window).width() < 767) {
	        $(this).next('.av_slide').stop().animate({width:'80%'},700).addClass('active');
	      }
	      else{
	        $(this).next('.av_slide').stop().animate({width:'50%'},700).addClass('active');
	      }
	      $('.overlay').animate({opacity:'1'},500);
	      $('.av_slide p').css({display:'none'});
	      $('.av_slide.active .overlay').delay(100).animate({opacity:'0'},500);
	      $('.av_slide.active p').css({display:'block'});
	  });
	}


});
