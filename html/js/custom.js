(function($) {
  "use strict"; // Start of use strict

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

})(jQuery); // End of use strict

$(window).on('resize', function(){
    $('.resume-section').css('min-height', $(window).height());
});

// scroll position
(function($) {
    $("a[href*=\\#]:not([href=\\#])").click(function() {
	if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname)
	{
	    var navShow = $("#navbarSupportedContent").is(":visible");
	    var target = $(this.hash)
	    var headerHeight = 0;
	    headerHeight = navShow ? headerHeight : $(".fixed-top").height() + 20; // Get fixed header height

	    target = target.length ? target : $('[name=' + this.hash.slice(1) +']');

	    if (target.length)
	    {
		$('html,body').animate({
		    scrollTop: target.offset().top - headerHeight
		}, 0);
		return false;
	    }
	}
    });
})(jQuery);
