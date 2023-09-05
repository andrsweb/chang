import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

document.addEventListener('DOMContentLoaded', () => {
	'use strict'

	swiperInit('.chang__slider')
})

const swiperInit = (selector) => {
	const swiper = new Swiper(selector, {
		slidesPerView: 1,
		spaceBetween: 0,
		initialSlide: 2,
		modules: [Navigation, Pagination],

		navigation: {
			nextEl: '.chang__next',
			prevEl: '.chang__prev',
		},

		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},

		speed: 2000
	})

	if(!swiper) return
}