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
						/* END ADAPTIVE HEADER  */
	/********************************************************/  


	/*********************************************************/
						/* Start CUSTOM SELECT  */
	/********************************************************/
        $(".chosen-select").chosen();
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
			$(".js-explanations").click(function(event) {
			  event.preventDefault();
			  $(this).next('div.explanations').slideToggle("fast");
			});
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


	

	


});