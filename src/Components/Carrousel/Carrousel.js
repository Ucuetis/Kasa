import React, { useState } from 'react'
import './Carrousel.css'
import Arrow from '../../Assets/Img/CarrouselArrow.svg'

/**
 * The `function Carrousel({ images }) {` block is a functional component that takes in an object `images` as a parameter.
 * This component is responsible for rendering the carousel of images.
 *
 * @function
 * @name Carrousel
 * @kind function
 * @param {{ images: any }} { images }
 * @returns {React.JSX.Element}
 */
function Carrousel({ images }) {
	let [currentIndex, setCurrentIndex] = useState(0)

	const previousImage = () => {
		if (currentIndex === 0) {
			setCurrentIndex(images.length - 1)
		} else {
			setCurrentIndex(currentIndex - 1)
		}
	}

	const nextImage = () => {
		setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
	}

	return (
		<div className="carrousel">
			{images.length > 1 && (
				<img
					className="Arrow Arrow-left"
					src={Arrow}
					alt="Contenu précédent"
					onClick={previousImage}
				/>
			)}
			{images.map((image, index) => {
				return (
					<img
						key={index}
						className={
							index === currentIndex
								? 'carrousel-img active'
								: 'carrousel-img'
						}
						src={image}
						alt="Logement"
					/>
				)
			})}
			{images.length > 1 && (
				<img
					className="Arrow Arrow-right"
					src={Arrow}
					alt="Contenu suivant"
					onClick={nextImage}
				/>
			)}
			{images.length > 1 && (
				<div className="counter">{`${currentIndex + 1}/${
					images.length
				}`}</div>
			)}
		</div>
	)
}

export default Carrousel
