$(function() {

	/*********************************************************/
						/* START CURRENCIES DROP-DOWN LIST  */
	/********************************************************/
			$(".js--currencies,.nav__link--curr").click(function(event) {
			  event.preventDefault();
			  $(this).next('ul').slideToggle("slow");
			});
	/*********************************************************/
						/* END CURRENCIES DROP-DOWN LIST  */
	/********************************************************/

	/*********************************************************/
						/* START CURRENCIES DROP-DOWN LIST  */
	/********************************************************/
			$(".js--search").click(function(event) {
			  $(".js--searchForm").show("slow");
			});
	/*********************************************************/
						/* END CURRENCIES DROP-DOWN LIST  */
	/********************************************************/


	/*********************************************************/
						/* START CURRENCIES DROP-DOWN LIST  */
	/********************************************************/
        $('.header').append('<div class="hidMenu">');
        var hidM = $(".hidMenu");
        $('.hidMenu').append('<div class="hidFirstChild">');
        var hidMFirst = $(".hidFirstChild");
        
        $(".js-roll").click(function() {
          $(this).toggleClass("activ");
          hidM.slideToggle("slow"); 
		});
        
        
        function onResize() {
            var wiw = window.innerWidth;
            if(wiw > 1358) {
            	$(".js-link,.js-sub").prependTo('.nav__item--hasSub');
            	$(".languages,.currencies").appendTo('.header__col3');
            	hidM.hide();  
            	$(".js-roll").removeClass("activ");
            }
            else {
            	$(".js-link,.js-sub").appendTo(hidMFirst);
                $(".languages,.currencies").appendTo(hidM);

            }
        }
        onResize();
        $(window).resize(onResize);

        

    /*********************************************************/
						/* END CURRENCIES DROP-DOWN LIST  */
	/********************************************************/    
	


});