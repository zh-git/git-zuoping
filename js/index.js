$(function(){

	$('.nav li').mouseover(function(){
		$(this).parent().next().show();
	}).mouseout(function(){
		$(this).parent().next().hide();
	});

	$(".scanner_direc .direc_right").click(function(){
		$(".scanner").css(" background","url(../images/scanner1.gif) no-repeat 50% 50%");
	});

});