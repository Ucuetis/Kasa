import React from 'react'
import './Home.css'
import Banner from '../../Components/Banner/Banner'
import WelcomeBanner from '../../Assets/Img/WelcomeBanner.png'
import { NavLink } from 'react-router-dom'
import Card from '../../Components/Card/Card'
import AccommodationsList from '../../Assets/Data/accommodation.json'

/**
 * The `function Home() {` block is defining the functional component `Home`.
 * This component returns a JSX element that represents the home page of the website.
 *
 * @function
 * @name Home
 * @kind function
 * @returns {React.JSX.Element}
 */
function Home() {
	return (
		<div className="Welcome">
			<Banner
				image={WelcomeBanner}
				texte="Chez vous, partout et ailleurs"
			/>
			<div className="accommodations-list">
				{AccommodationsList.map((logement) => (
					<NavLink
						key={logement.id}
						to={'/logement/' + logement.id + '/#'}
					>
						<Card
							key={logement.id}
							id={logement.id}
							image={logement.cover}
							titre={logement.title}
						/>
					</NavLink>
				))}
			</div>
		</div>
	)
}

export default Home
