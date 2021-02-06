import React from 'react';
import './home.css';

function Home(props) {
	return (
		<div className="Home-Container">
			<section className="Header-container">
				<h1>Our Mission</h1>
				<p>
					With an easy to use interface for creating a plant watering schedule tailored to each individual
					plant, Water MyPlants will remind users when it's time to feed that foliage and quench your plants'
					thirst.
				</p>
				<button
					type="button"
					onClick={() => {
						props.history.push('login');
					}}
				>
					Let's Start
				</button>
			</section>
		</div>
	);
}

export default Home;
