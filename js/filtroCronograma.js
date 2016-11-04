$(window).load(function(){
		    var $container = $('.itemsCronograma');
		    $container.isotope({
		        filter: '.semana4',
		        animationOptions: {
		            duration: 750,
		            easing: 'linear',
		            queue: false
		        }
		    }, function(){
		         	$('.semana').css("display","none");
		         });
		 
		    $('.menuFilterCronograma a').click(function(){
		        $('.menuFilterCronograma .current').removeClass('current');
		        $(this).addClass('current');
		 
		        var selector = $(this).attr('data-filter');
		        $container.isotope({
		            filter: selector,
		            animationOptions: {
		                duration: 750,
		                easing: 'linear',
		                queue: false
		            }
		         }, function(){
		         	$('.semana').css("position","absolute");
		         	$('.semana').css("display","block");
		         });
		         return false;
		    }); 
		});