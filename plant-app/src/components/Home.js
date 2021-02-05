import React from 'react'
import "./home.css"

// import styled from 'styled-components';

// const Header = styled.div`
// 	// display: flex;
// 	// flex-direction: row-reverse;
// 	width: 50%;
// 	margin: 0 auto;
// 	align-items: center;
	
// // `;
// const Title = styled.h1`
// 	align-items: center;
// 	text-align: center;
// 	color: #fff;
	
// `
// const P = styled.p`
// 	align-items: center;
// 	text-align: center;
// 	color: #fff;
// `;
// const Img = styled.img`
// width: 90%;
// margin-top: 50px

// // margin-left: 50px;

// `
// const Button = styled.button`
// align-items: center;
// text-align: center;
// `

function Home() {
	return (
		<div className="Home-Container">
			<section className = "Header-container">
			<h1>Our Mission</h1>
            <p>With an easy to use interface for creating a plant watering schedule tailored to each individual plant, Water MyPlants will remind users when it's time to feed that foliage and quench your plants' thirst.</p>
			<button type="button">Let's Start</button>
			</section>
			
			

		</div>
		
	);
}

export default Home;