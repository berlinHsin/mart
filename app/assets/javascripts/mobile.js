$(document).ready(function(){
	$('#bottom-nav li').click(function(){
		$('#bottom-nav li').attr('class','');
		$(this).attr('class','active');
	});
});
