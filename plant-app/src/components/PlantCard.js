import React from 'react';

import styled from 'styled-components';

const CardContainer = styled.div`
	text-align: center;
	width: 33%;
	border-radius: 1rem;
	background: #fff;

	align-items: center;
	color: black;
	box-shadow: 0px 7px 28px -5px rgba(0, 0, 0, 0.52);
`;
const CardH1 = styled.div`
	padding: 1em;
	margin: 0 auto;
	font-size: 1.5rem;
`;

const CardImage = styled.img`
	width: 60%;
	height: 60%;
`;
const CardItem = styled.div`
	font-size: 1.2rem;
`;

export default function PlantCard(props) {
	//Slice of state that contians plant data from PlantReg.js
	const { plant } = props;

	return (
		<CardContainer>
			<CardH1>{plant.nickname}</CardH1>

			<div>
				<CardImage src={plant.image} alt={plant.species} />
			</div>
			<CardItem>Species:{plant.species}</CardItem>
			<CardItem>Watering Frequency:{plant.H20Frequency}</CardItem>
			<CardItem>Watering Begins On:{plant.water}</CardItem>
		</CardContainer>
	);
}
