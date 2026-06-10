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
// scroll position, adjusted for sticky hero image
(function($) {
    function getAnchorOffset() {
	var heroHeight = $('.page-hero').outerHeight() || 0;
	var navHeight = 0;

	// On desktop, #sideNav is a fixed left sidebar, so it does not take vertical space.
	// On tablet/phone, #sideNav is a fixed top navbar.
	if ($(window).width() < 992) {
	    navHeight = $('#sideNav').outerHeight() || $('.fixed-top').outerHeight() || 0;
	}

	// Small buffer so the heading is not tight against the sticky hero.
	return heroHeight + navHeight + 16;
    }

    $("a[href*=\\#]:not([href=\\#])").click(function(e) {
	if (
	    location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') &&
	    location.hostname == this.hostname
	) {
	    var target = $(this.hash);
	    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');

	    if (target.length) {
		e.preventDefault();

		$('html, body').animate({
		    scrollTop: target.offset().top - getAnchorOffset()
		}, 0);

		// Update URL hash without causing the browser to jump again.
		if (history.pushState) {
		    history.pushState(null, null, this.hash);
		} else {
		    location.hash = this.hash;
		}

		return false;
	    }
	}
    });

    // Also handle direct page load, e.g. keynotes.html#banks
    $(window).on('load', function() {
	if (window.location.hash) {
	    var target = $(window.location.hash);

	    if (target.length) {
		setTimeout(function() {
		    $('html, body').animate({
			scrollTop: target.offset().top - getAnchorOffset()
		    }, 0);
		}, 100);
	    }
	}
    });
})(jQuery);


// (function($) {
//     $("a[href*=\\#]:not([href=\\#])").click(function() {
// 	if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname)
// 	{
// 	    var navShow = $("#navbarSupportedContent").is(":visible");
// 	    var target = $(this.hash)
// 	    var headerHeight = 0;
// 	    headerHeight = navShow ? headerHeight : $(".fixed-top").height() + 20; // Get fixed header height

// 	    target = target.length ? target : $('[name=' + this.hash.slice(1) +']');

// 	    if (target.length)
// 	    {
// 		$('html,body').animate({
// 		    scrollTop: target.offset().top - headerHeight
// 		}, 0);
// 		return false;
// 	    }
// 	}
//     });
// })(jQuery);


// change the form upon ness member options
$('input[name="ness"]').bind('change', function(event) {

    var i= $('input[name="ness"]:checked').val();
    var val = '';
    $("#member_type").val(val);
    $("#member_type").trigger("change");
    if(i!=1) {
	$('#member_register').hide(400);
	$('#member_register2').hide(400);
	document.getElementById("member_type").required = false;
	document.getElementById("pwd").required = false;
	document.getElementById("pwdConfirm").required = false;
    } else {
	$('#member_register').show(400);
	$('#member_register2').show(400);
	document.getElementById("member_type").required = true;
	document.getElementById("pwd").required = true;
	document.getElementById("pwdConfirm").required = true;
    }
});


$('#member_type').bind('change', function(event) {
    var i= $('#member_type').val();
    var j= $('input[name="ness"]:checked').val();
    if(i=="Student" && j==1) {
	$('#gradyear').show(400);
	document.getElementById("graduationYear").required = true;
    } else {
	$('#gradyear').hide(400);
	document.getElementById("graduationYear").required = false;
    }
});

$('#registerType').bind('change', function(event) {
    var i= $('#registerType').val();
    if(i=="student") {
	$('#std_degree').show(400);
	$('#std_degree2').show(400);
	document.getElementById("degree").required = true;
    } else {
	$('#std_degree').hide(400);
	$('#std_degree2').hide(400);
	$('#degree').val('');
	document.getElementById("degree").required = false;
    }
});

// check whether the passwords match
$('#pwd, #pwdConfirm').bind('change keyup', function(event) {

    var check = document.getElementById("pwdCheck");
    if($('#pwd').val() != $('#pwdConfirm').val()) {
	check.innerHTML = "password doesn't match entered";
	check.style.color = "red";
    } else if ($('#pwd').val() == "") {
	check.innerHTML = "";
    } else {
	check.innerHTML = "password match entered";
	check.style.color = "green";
    }
});
