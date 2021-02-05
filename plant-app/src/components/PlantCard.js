import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';

const CardContainer = styled.div`
	text-align: center;
	width: 65%;
	border-radius: 1rem;
	background: #fff;
	color: black;
	box-shadow: 0px 7px 28px -5px rgba(0, 0, 0, 0.52);
	padding: 1.5rem;
	margin: 0 auto;
`;

const CardH1 = styled.div`
	padding: 1em;
	margin: 0 auto;
	font-size: 1.4rem;
`;

const CardImage = styled.img`
	width: 60%;
	height: 60%;
`;
const CardItem = styled.div`
	font-size: 1rem;
`;

const Button = styled.button`
	background: rgba(174, 174, 174, 0.2);
	padding: 0.6rem 1rem;
	border-radius: 2px;
	margin: 0.9rem;
	border-radius: 10px;
	border: none;
	transition: all 0.2s ease-in-out;
	font-weight: bold;
	position: relative;

	&:hover {
		color: #0f084b;
		background: rgb(160, 210, 218);
		box-shadow: 0px 7px 28px -5px rgba(0, 0, 0, 0.52);
		bottom: 0.5%;
	}
`;
function PlantCard({ plants }) {
	//Slice of state that contians plant data from PlantReg.js

	const params = useParams();

	const plant = plants.find(plant => plant.id === Number(params.id));

	return (
		<CardContainer>
			<div>
				<CardImage src={plant.image} alt={plant.species} />
			</div>
			<div>
				<CardH1>{plant.nickname}</CardH1>
				<CardItem>Species: {plant.species}</CardItem>
				<CardItem>Watering Frequency: {plant.H20Frequency}</CardItem>
				<CardItem>Watering Begins On: {plant.water}</CardItem>
				<Button>Edit</Button>
				<Button>Delete</Button>
			</div>
		</CardContainer>
	);
}

const mapStateToProps = state => {
	return {
		plants: state.plants
	};
};

export default connect(mapStateToProps)(PlantCard);
