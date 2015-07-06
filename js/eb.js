
$("#resume").hide();
$("#portfolio").hide();
$("#twentytwenty").hide();
$("#about").hide();
$('nav').hide();
$("#mobilnav").hide();
/*$(document).ready(function(){
    $("body").addClass("loaded");
});
*/
//CAROUSEL INTERVAL AND HEIGHT ANIMATION 
//NOT MY CODE AGAIN 
//SOURCE: https://github.com/twbs/bootstrap/issues/7812
    $('.carousel').carousel({
        interval: false
    }).on('slide.bs.carousel', function (e) {
        var nextH = $(e.relatedTarget).height();
        console.log(nextH)
        console.log( $(this).find('.active.item').parent() )
        $(this).find('.active.item').parent().animate({
            height: nextH
        }, 500);
    });
	
$(document).ready(function() {  
   $("#myCarousel").swiperight(function() {  
      $("#myCarousel").carousel('prev');  
    });  
   $("#myCarousel").swipeleft(function() {  
      $("#myCarousel").carousel('next');  
   });  
});  

function show_content(box){

	if($(".box").is(":visible")){
			//$(".cont-page article").fadeOut("slow");
			$(".box").slideUp("slow");
	}
	$(box).delay(550).slideDown("slow");
	var box_id = $(box)[0].id;
	$("body").removeClass();
	if(box_id == "portfolio"){
		$("body").addClass("loaded-portfolio");
    }
	else if(box_id == "about"){
		$("body").addClass("loaded-about");
	}
	else if(box_id == "resume"){
		$("body").addClass("loaded-resume");
	}
}

function wel_hover(element){
	// element.setAttribute('src','mimages/welcome-circle3.gif');
	$("#wel-circ").addClass(".loaded-wel");
}

function wel_out(element){
	// element.setAttribute('src','mimages/welcomehover.gif');
	$(element).removeClass(".loaded-wel");
}

function opening(element){
	// $('#wel-circ').addClass(".loaded-wel");
	$(element).fadeOut("fast",function(){
		$('nav').fadeIn("slow");
		 $("#mobilnav").fadeIn("slow");
		$("body").addClass("loaded-about");
		$("#about").delay(500).slideDown("slow");
	});
	// $("body").css('background-image','none');
	
}

