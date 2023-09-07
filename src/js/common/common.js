document.addEventListener('DOMContentLoaded', () => {
	'use strict'
})

window.onload = function () {
	const loader = document.querySelector('.loader')
	loader.classList.add('loaded_hiding');
	window.setTimeout(function () {
		loader.classList.add('loaded');
		loader.classList.remove('loaded_hiding');
	}, 500);
}