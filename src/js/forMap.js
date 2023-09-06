import { isInScope } from "./common/global"

document.addEventListener( 'DOMContentLoaded', () => {
	'use strict'

	showMap()
} )

const showMap = () => {

	const map = document.querySelector( '.iframe-map' )

	if( ! map ) return

	document.addEventListener( 'scroll', () => {
			if ( isInScope( '.footer', window.scrollY ) ) {
				if( ! map.classList.contains( 'loaded' ) ) {
					map.src= 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d427.58153633387076!2d98.30332927160832!3d7.888839028786534!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30503bc66618f64f%3A0xf425d6173444b34f!2sChang22%20pool%20bar%20and%20restaurant!5e0!3m2!1sen!2sth!4v1693964807741!5m2!1sen!2sth'
					map.classList.add( 'loaded' )
				}
			}
		}
	)
}