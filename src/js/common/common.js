import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock'
import { setTargetElement, getTargetElement } from './global'


document.addEventListener('DOMContentLoaded', () => {
	'use strict'
})

window.onload = function () {
	const loader = document.querySelector('.loader')
	setTargetElement(document.querySelector('#load-lock'))

	loader.classList.add('closed');
	disableBodyScroll(getTargetElement(), { reserveScrollBarGap: true })
	window.setTimeout(function () {
		loader.classList.add('opened');
		loader.classList.remove('closed');
		enableBodyScroll(getTargetElement())
	}, 500);
}