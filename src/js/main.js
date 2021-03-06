$(function() {

	/*********************************************************/
						/* START CURRENCIES DROP-DOWN LIST  */
	/********************************************************/
			$(".js--currencies,.nav__link--curr").click(function(event) {
			  event.preventDefault();
			  $(this).next('ul').slideToggle("fast");
			});
	/*********************************************************/
						/* END CURRENCIES DROP-DOWN LIST  */
	/********************************************************/


	/*********************************************************/
						/* START SEARCH FORM  */
	/********************************************************/
			$(".js--search").click(function(event) {
			  $(".js--searchForm").show("slow");
			});
	/*********************************************************/
						/* END SEARCH FORM  */
	/********************************************************/



	/*********************************************************/
						/* START ADAPTIVE HEADER  */
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
            	$(".languages,.currencies").prependTo('.header__col3');
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
						/* END ADAPTIVE HEADER  */
	/********************************************************/  


	/*********************************************************/
						/* Start CUSTOM SELECT  */
	/********************************************************/
    	$(".chosen-select").select2(); 
    	$(".classic-select").select2({
		   theme: "classic"
		});

		$(".nosearch-select").select2(
		{
			theme: "nosearch",
			minimumResultsForSearch: Infinity
		});

		$(".nosearchFull-select").select2(
		{
			theme: "nosearchFull",
			minimumResultsForSearch: Infinity
		});

    /*********************************************************/
						/* End CUSTOM SELECT  */
	/********************************************************/ 


	/*********************************************************/
						/* Start CUSTOM SELECT  */
	/********************************************************/
		$('#search').tipuedrop();
	/*********************************************************/
						/* End CUSTOM SELECT  */
	/********************************************************/ 


	/*********************************************************/
						/* START EXPLANATIONS  */
	/********************************************************/
			$(".js-explanations").mouseenter(function() {
			  $(this).next('div.explanations').fadeIn("fast");
			});

			$(".countList__text").mouseleave(function() {
			  $(this).find('div.explanations').fadeOut("fast");
			});

			if(!device.desktop()) {
				$('div.explanations').addClass("withCloze");
				$('div.explanations').append('<i class="ex-cloze">');
				$(".ex-cloze").click(function() {
				  $(this).parent('div.explanations').fadeOut("fast");
				});
			}
	/*********************************************************/
						/* END EXPLANATIONS  */
	/********************************************************/

	/*********************************************************/
						/* START FOUND RESULT  */
	/********************************************************/
			$(".settingsList input").click(function() {
			  if ($(this).prop("checked")) {
			  	$(this).parent('.checkboxWrap').nextAll(".settingsList__popap").fadeIn("fast");
			  }
			   else {
				$(this).parent('.checkboxWrap').nextAll(".settingsList__popap").fadeOut("fast");
			  }
			});
	/*********************************************************/
						/* END FOUND RESULT  */
	/********************************************************/

	/*********************************************************/
						/* START CALENDAR  */
	/********************************************************/
		$("#datepicker,#datepicker-1").datepicker();
	/*********************************************************/
						/* END CALENDAR  */
	/********************************************************/


			




	

	


});