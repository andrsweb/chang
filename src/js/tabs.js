document.addEventListener( 'DOMContentLoaded', () => {
	'use strict'

	changeTab()
} )

const changeTab = () => {
	const tabsHeaders	= document.querySelectorAll( '.button' ),
		tabsContents	= document.querySelectorAll( '.menu' )

	if( ! tabsHeaders.length || ! tabsContents.length ) return

	tabsHeaders.forEach( ( tab, i, tabs ) => {
		tab.addEventListener( 'click', () => {
			const id = tab.dataset.id

			if( ! id || tab.classList.contains( 'active' ) ) return

			tabs.forEach( tabsItem => tabsItem.classList.remove( 'active' ) )
			tab.classList.add( 'active' )
			tabsContents.forEach( content => content.classList.remove( 'active' ) )
			document.querySelector( `.menu[data-id="${ id }"]` ).classList.add( 'active' )
		} )
	} )
}