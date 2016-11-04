$(window).load(function(){
		    var $container = $('.items');
		    $container.isotope({
		        filter: '*',
		        animationOptions: {
		            duration: 750,
		            easing: 'linear',
		            queue: false
		        }
		    });
		 
		    $('.menuFilter a').click(function(){
		        $('.menuFilter .current').removeClass('current');
		        $(this).addClass('current');
		 
		        var selector = $(this).attr('data-filter');
		        $container.isotope({
		            filter: selector,
		            animationOptions: {
		                duration: 750,
		                easing: 'linear',
		                queue: false
		            }
		         });
		         return false;
		    }); 
		});