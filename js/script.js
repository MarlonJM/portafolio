/*! Main */
jQuery(document).ready(function($) {
  
    // Fixa navbar ao ultrapassa-lo
    var navbar = $('#sidebar'),
    		distance = navbar.offset().top,
        $window = $(window);

    $window.scroll(function() {
        if ($window.scrollTop() >= distance) {
            
          	$("body").css("padding-top", "0px");
        } else {
            
            $("body").css("padding-top", "0px");
        }
    });
});