var ready = function(){
    $('[hit=second]').hide();
    $('[hit=third]').hide();
	$('#bottom-nav li').click(function(){
		$('#bottom-nav li').attr('class','');
        $hit = $(this).attr('target');
		$(this).attr('class','active');
        $('[hit]').hide();
        $('[hit='+$hit+']').show();
	});
	$('#product-page .more div').hide();
	$('[target]').click(function(){
		$('#product-page .more div').hide();
		$hit = $(this).attr('target')
		$('.'+$hit).show();
	});
};

$(document).ready(ready);
$(document).on('page:load',ready);
