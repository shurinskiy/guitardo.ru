import Masonry from 'masonry-layout';

(() => {

	let items = document.querySelector('.l-detail__items');
	let masr = {};

	window.onload = () => {
		if(items) {
				masr = new Masonry(items, {
				itemSelector: '.l-detail__item',
				columnWidth: '.l-detail__sizer',
				horizontalOrder: true,
				percentPosition: true
			});
		}
	}

})();
