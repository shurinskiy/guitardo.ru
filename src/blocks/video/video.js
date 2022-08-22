(() => {

	$('.video').on('click', '.video__play', function(e) {
		let $self = $(this);

		$self
			.prev('.video__frame')
			.attr('src', $self.data('youtubeSrc'))
			.end()
			.fadeOut();
	});

})();
