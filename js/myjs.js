$(document).ready(function(){


if ($('#back-to-top').length) {
    var scrollTrigger = 400, // px
        backToTop = function () {
            var scrollTop = $(window).scrollTop();
            if (scrollTop > scrollTrigger) {
                $('#back-to-top').addClass('show');
                $('#navigation').addClass('nav-scrolling');
				
				
				  
            } else {
                 $('#back-to-top').removeClass('show');
                 $('#navigation').removeClass('nav-scrolling');
				
				
				
            }
        };
    backToTop();
    $(window).on('scroll', function () {
        backToTop();
    });
    $('#back-to-top').on('click', function (e) {
        e.preventDefault();
        $('html,body').animate({
            scrollTop: 0
        }, 700);
    });

}


// Sliding Effect when Menu click
// handle links with @href started with '#' only
$(document).on('click', 'a[href^="#"]', function(e) {
    // target element id
    var id = $(this).attr('href');

    // target element
    var $id = $(id);
    if ($id.length === 0) {
        return;
    }

    // prevent standard hash navigation (avoid blinking in IE)
    e.preventDefault();

    // top position relative to the document
    var pos = $(id).offset().top;

    // animated top scrolling
    $('body, html').animate({scrollTop: pos});
	
	

});

	
	
	
});	

window.sr = ScrollReveal();
sr.reveal('body');
sr.reveal('.product', { duration: 1000 });
sr.reveal('.see-menu', { duration: 500 });
sr.reveal('.person', { duration: 1000 });
sr.reveal('.try-this', { duration: 1000 });
