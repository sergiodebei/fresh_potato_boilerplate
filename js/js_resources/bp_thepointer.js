$( document ).ready(function() {

	//to set up the about tabs and the arrow on top of the section
	if($( "#thepointer" ).length ){
	 
	    
	    $(".thumb").click(function() {
	        $('.thumb').not(this).removeClass('thumb-active');
	        $(this).toggleClass('thumb-active');
	        var offset = $(this).offset();
	        // console.log(offset.left);
	        var id = $(this).attr("data-id");
	        $('.tabsthumbs_single').removeClass('tab-active');
	        $('.tabsthumbs_single[data-tab-id="'+ id + '"]').toggleClass('tab-active');

	        var halfimage = $(this).outerWidth() / 2;
	        var offset_new = offset.left - $('.tabsthumbs').offset().left + halfimage - 10;
	        var color = $('.tabsthumbs_single[data-tab-id="'+ id + '"]').css( "border-top-color" );
	        // console.log(offset);

	        var style = document.createElement("style");
	        document.head.appendChild(style);
	        style.sheet.insertRule(".tabsthumbs:before{ left:" + offset_new + "px; border-bottom: 10px solid " + color + "}", 0);

	    });

	    $(window).on('load resize', function () {
	        var offset_new = ($('.thumb-active').offset().left - $('.tabsthumbs').offset().left + $('.thumb-active').outerWidth() / 2 - 10);
	        var newcolor = $('.tab-active').css( "border-top-color" );

	        var style = document.createElement("style");
	        document.head.appendChild(style);
	        style.sheet.insertRule(".tabsthumbs:before{ left:" + offset_new + "px; border-bottom: 10px solid " + newcolor + "}", 0);
	    });
	 
	}

});
