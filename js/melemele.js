
//$("#outercontent").hide()
//$("#about").hide();
$("#resume").hide();
$("#portfolio").hide();
$("#twentytwenty").hide();
//$(".palm").hide();
//$(".palm").css({width:"0%"});
/*
function welcome(){
	$("#welcome-page").slideUp("slow");
}*/
//$("#about").mouseover(function(){
	//$(".palm").show();
//	$(".palm").animate({height:"100%"},1000);
	//$(".palm").animate({width:"20%"}, 1500, "easeInOutQuad");

function show_content(box){

	if($(".cont-page").is(":visible")){
			//$(".cont-page article").fadeOut("slow");
			$(".cont-page").slideUp("slow");
	}
	$(box).delay(550).slideDown("slow");
	
	var box_id = $(box)[0].id;
	if(box_id == "twentytwenty"){
			//var class = "container1"
		$("#outercontent").animate({backgroundColor:"#FF0066"},2200);
	}
	else if(box_id == "about"){
		$("#outercontent").animate({backgroundColor:"#00FFFF"},2200);
	}
	else if(box_id == "portfolio"){
		$("#outercontent").animate({backgroundColor:"#FF8855"},2200);
	}
	else{
		$("#outercontent").animate({backgroundColor:"#00FFAA"},2200);
	}	
}