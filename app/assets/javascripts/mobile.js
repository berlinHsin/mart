$(document).ready(function(){
    $('[hit=second]').hide();
    $('[hit=third]').hide();
	$('#bottom-nav li').click(function(){
		$('#bottom-nav li').attr('class','');
        $hit = $(this).attr('target');
		$(this).attr('class','active');
        $('[hit]').hide();
        $('[hit='+$hit+']').show();
	});
});
