$(function() {
	$('.zfbmwj .top ul li').on('mouseover', function() {
		$(this).addClass("now").siblings().removeClass("now");
		$('.zfbmwj .bottom>div').eq($(this).index()).stop().fadeIn().siblings().stop().fadeOut();
	});
	// $('.zxxxgk .top ul li').on('mouseover', function() {
	// 	$(this).addClass("now").siblings().removeClass("now");
	// 	$('.zxxxgk .bottom>div').eq($(this).index()).stop().fadeIn().siblings().stop().fadeOut();
	// });
})