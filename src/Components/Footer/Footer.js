import React from 'react'
import './Footer.css'
import logoFooter from '../../Assets/Img/LogoFooter.svg'

/**
 * The `function Footer() {` block is defining the functional component `Footer`.
 * This component returns a JSX element that represents the footer section of the website.
 *
 * @function
 * @name Footer
 * @kind function
 * @returns {React.JSX.Element}
 */
function Footer() {
	return (
		<footer>
			<div id="footer-container">
				<img src={logoFooter} id="footer-logo" alt="Logo Kasa" />
				<p>&copy; 2020 Kasa. Tous droits réservés</p>
			</div>
		</footer>
	)
}

export default Footer
