$(document).ready(function(){if($("#accordion_vertical").length){var a=1;$(".cont").wrap('<div class="av_slide" />'),$(window).width()<767?$(".av_slide").eq(a-1).animate({width:"80%"},700).addClass("active").prev(".title").addClass("active"):$(".av_slide").eq(a-1).animate({width:"50%"},700).addClass("active").prev(".title").addClass("active"),$(".av_slide.active .overlay").delay(400).animate({opacity:"0"},750),$(".av_slide.active p").css({display:"block"}),$(".label_title").click(function(){$(this).addClass("active").siblings().removeClass("active"),$(".av_slide").stop().animate({width:"0"},700),$(window).width()<767?$(this).next(".av_slide").stop().animate({width:"80%"},700).addClass("active"):$(this).next(".av_slide").stop().animate({width:"50%"},700).addClass("active"),$(".overlay").animate({opacity:"1"},500),$(".av_slide p").css({display:"none"}),$(".av_slide.active .overlay").delay(100).animate({opacity:"0"},500),$(".av_slide.active p").css({display:"block"})})}});