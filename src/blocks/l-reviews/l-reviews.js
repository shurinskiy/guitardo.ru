import Swiper, { Navigation, Pagination } from 'swiper';

(() => {

	new Swiper(".l-reviews__slider", {
		loop: true,
		modules: [Navigation, Pagination],
		navigation: {
			prevEl: '.l-reviews__prev',
			nextEl: '.l-reviews__next',
		},
		pagination: {
			el: '.l-reviews__navi',
			clickable: true,
			bulletClass: 'l-reviews__dot',
			bulletActiveClass: 'l-reviews__dot_active',
		},
		breakpoints: {
			480: { 
				slidesPerView: 1,
				spaceBetween: 20,
			},
			0: { 
				slidesPerView: 1.3,
				spaceBetween: 10,
			}
		}
	});
})();
