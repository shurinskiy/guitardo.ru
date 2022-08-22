(() => {

	let $toggle = $('.c-answers__head');
	let $block = $('.c-answers__block');

	$toggle.on('click', function(e) {
		$(this)
			.toggleClass('opened')
			.next($block)
			.slideToggle();
	});

})();
