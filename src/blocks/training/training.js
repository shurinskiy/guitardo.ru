(() => {

	let $toggle = $('.training__head-title');
	let $block = $('.training__items');

	$toggle.on('click', function(e) {
		if (window.getComputedStyle(e.target).clear === 'both') {
			$(this)
				.toggleClass('opened')
				.parent('.training__head')
				.next($block)
				.slideToggle();
		}
	});

	$(window).on('resize', () => {
		let width = $(window).width();

		if (window.startWidth == undefined)
			window.startWidth = width;

		if (Math.abs(width - window.startWidth) > 20) {
			$toggle.removeClass('opened');
			$block.removeAttr('style');
		}
	});

})();