import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { fetchPlants } from '../actions';
import styled from 'styled-components';
import PlantReg from './PlantReg';

const Top = styled.div`
	width: 80%;
	margin: 1rem auto;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const Button = styled.button`
	background: rgba(160, 210, 218, 0.838);
	color: #fff;
	font-size: 2rem;
	width: 2.7rem;
	padding: 0.2rem;
	border: none;
	border-radius: 50%;
	outline: none;
	cursor: pointer;
	box-shadow: 0px 7px 28px -5px rgba(0, 0, 0, 0.52);
`;

const ButtonContainer = styled.div`
	height: 5rem;
	width: 10%;
	top: 4rem;
	right: 2rem;
	display: flex;
	justify-content: center;
	align-items: center;
	position: relative;
	background: rgba(255, 255, 255, 0.084);
	box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
	backdrop-filter: blur(3.5px);
	-webkit-backdrop-filter: blur(3.5px);
	border-radius: 10px;
	border: 1px solid rgba(255, 255, 255, 0.18);
	z-index: 1;
`;

const PlantsContainer = styled.div`
	width: 80%;
	margin: 1rem auto;
	height: 600px;
	background: rgba(255, 255, 255, 0.1);
	box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
	backdrop-filter: blur(3.5px);
	-webkit-backdrop-filter: blur(3.5px);
	border-radius: 10px;
	border: 0 solid rgba(255, 255, 255, 0.18);
	z-index: 1;
`;

const Circle1 = styled.div`
	position: absolute;
	background-color: rgb(38, 64, 139);
	box-shadow: inset -25px -15px 40px rgba(0, 0, 0, 0.2);
	background-image: linear-gradient(-45deg, rgba(255, 255, 220, 0.4) 0%, transparent 100%);
	border-radius: 50%;
	height: 200px;
	width: 200px;
	bottom: 2rem;
	left: 2rem;
`;
const Circle2 = styled.div`
	position: absolute;
	background-color: rgb(38, 64, 139);
	box-shadow: inset -25px -15px 40px rgba(0, 0, 0, 0.3);
	background-image: linear-gradient(-45deg, rgba(255, 255, 220, 0.4) 0%, transparent 100%);
	border-radius: 50%;
	height: 100px;
	width: 100px;
	top: 12rem;
	left: 18rem;
`;
const Circle3 = styled.div`
	position: absolute;
	background-color: rgb(38, 64, 139);
	box-shadow: inset -25px -15px 40px rgba(0, 0, 0, 0.3);
	background-image: linear-gradient(-45deg, rgba(255, 255, 255, 0.564) 0%, transparent 100%);
	border-radius: 50%;
	height: 350px;
	width: 350px;
	bottom: 2rem;
	right: 1rem;
`;

const Cover = styled.div`
	position: absolute;
	width: 100%;
	height: 90%;
	background: rgba(255, 255, 255, 0.1);
	box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
	backdrop-filter: blur(3.5px);
	-webkit-backdrop-filter: blur(3.5px);
	z-index: 2;
`;

function PlantList({ fetchPlants, plants }) {
	const [show, setShow] = useState(false);

	useEffect(() => {
		const id = JSON.parse(localStorage.getItem('userID'));
		fetchPlants(id);
	}, []);

	console.log(plants);

	return (
		<>
			{/* div cover transparent */}
			{show === true ? <Cover onClick={() => setShow(false)}></Cover> : null}
			{show === true ? (
				<PlantReg style={{ zIndex: '3', position: 'absolute', top: '30%', left: '35%' }} setShow={setShow} />
			) : null}

			{/* cirlces */}
			<Circle1></Circle1>
			<Circle2></Circle2>
			<Circle3></Circle3>

			<Top>
				<h1 style={{ color: '#fff' }}>My Plantz</h1>
				<ButtonContainer>
					<Button onClick={() => setShow(!show)}>+</Button>
				</ButtonContainer>
			</Top>
			<PlantsContainer>
				{plants.length > 0 && plants.map(plant => (
					<h1 key={plant.id} style={{ color: '#fff' }}>
						{plant.nickname}
					</h1>
				))}
			</PlantsContainer>
		</>
	);
}

const mapStateToProps = state => {
	return {
		plants: state.plants
	};
};

const mapDispatchToProps = { fetchPlants };

export default connect(mapStateToProps, mapDispatchToProps)(PlantList);
