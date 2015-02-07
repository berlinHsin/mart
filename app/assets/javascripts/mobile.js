var ready = function(){

	window.fbAsyncInit = function() {
		FB.init({
			appId      : '778661275557856',
		xfbml      : true,
		version    : 'v2.2'
		});
	};

	(function(d, s, id){
		var js, fjs = d.getElementsByTagName(s)[0];
		if (d.getElementById(id)) {return;}
		js = d.createElement(s); js.id = id;
		js.src = "//connect.facebook.net/en_US/sdk.js";
		fjs.parentNode.insertBefore(js, fjs);
	}(document, 'script', 'facebook-jssdk'));

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
