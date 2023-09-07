import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock'
import { setTargetElement, getTargetElement } from './global'


document.addEventListener('DOMContentLoaded', () => {
	'use strict'
})

window.onload = function () {
	const loader = document.querySelector('.loader')
	setTargetElement(document.querySelector('#load-lock'))

	loader.classList.add('opened');
	disableBodyScroll(getTargetElement(), { reserveScrollBarGap: true })
	window.setTimeout(function () {
		loader.classList.add('closed');
		loader.classList.remove('opened');
		enableBodyScroll(getTargetElement())
	}, 500);
}