import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { deletePlant, edit } from '../actions/index';
import { useDispatch } from 'react-redux';
import axiosWithAuth from '../utils/axiosWithAuth';
import { EDIT_PLANT } from '../actions/index';

const CardContainer = styled.div`
	text-align: center;
	width: 65%;
	border-radius: 1rem;
	background: #fff;
	color: black;
	box-shadow: 0px 7px 28px -5px rgba(0, 0, 0, 0.52);
	padding: 1.5rem;
	margin: 0 auto;
	margin-top: 2rem;
	display: flex;
	flex-direction: column;
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
function PlantCard({ history, deletePlant, editPlant, edit }) {
	//Slice of state that contians plant data from PlantReg.js
	const dispatch = useDispatch();
	const params = useParams();

	const [plant, setPlant] = useState({
		H2OFrequency: '',
		user_id: '',
		id: '',
		image: '',
		nickname: '',
		species: '',
		water: ''
	});

	useEffect(() => {
		axiosWithAuth()
			.get(`/plants/${params.id}`)
			.then(res => {
				console.log(res.data);
				setPlant({
					H2OFrequency: res.data.H2OFrequency,
					user_id: res.data.UserID,
					id: res.data.id,
					image: res.data.image,
					nickname: res.data.nickname,
					species: res.data.species,
					water: res.data.water
				});
			})
			.catch(err => console.log(err));
	}, []);

	console.log(plant);

	const handleChange = e => {
		setPlant({ ...plant, [e.target.name]: e.target.value });
	};

	return (
		<CardContainer>
			<div>{plant.image ? <CardImage src={plant.image} alt={plant.species} /> : <p>No Picture yet</p>}</div>
			<div>
				<CardH1>
					Nickname:{' '}
					{editPlant ? (
						<input
							name="nickname"
							type="text"
							placeholder="Enter Nickname"
							value={plant.nickname}
							onChange={handleChange}
						/>
					) : (
						plant.nickname
					)}
				</CardH1>
				<CardItem>
					Species:{' '}
					{editPlant ? (
						<input name="species" text="text" value={plant.species} onChange={handleChange} />
					) : (
						plant.species
					)}
				</CardItem>
				<CardItem>
					Watering Frequency:{' '}
					{editPlant ? (
						<input name="H2OFrequency" text="text" value={plant.H2OFrequency} onChange={handleChange} />
					) : (
						plant.H2OFrequency
					)}
				</CardItem>
				<CardItem>
					Watering Begins On:{' '}
					{editPlant ? (
						<input
							name="water"
							type="date"
							placeholder="yyyy-mm-dd"
							value={plant.water}
							onChange={handleChange}
						/>
					) : (
						plant.water
					)}
				</CardItem>
				<CardItem>
					{editPlant ? (
						<>
							<CardItem>Image:</CardItem>
							<input
								name="image"
								type="text"
								placeholder="Enter image"
								value={plant.image}
								onChange={handleChange}
							/>
						</>
					) : null}
				</CardItem>
				{editPlant ? (
					<Button onClick={() => edit(plant, plant.id, history)}>Save</Button>
				) : (
					<Button onClick={() => dispatch({ type: EDIT_PLANT })}>Edit</Button>
				)}
				<Button onClick={() => deletePlant(params.id, history)}>Delete</Button>
			</div>
		</CardContainer>
	);
}

const mapStateToProps = state => {
	console.log('state.plants: ', state.plants);
	return {
		plants: state.plants,
		editPlant: state.editPlant
	};
};
const mapDispatchToProps = { deletePlant, edit };

export default connect(mapStateToProps, mapDispatchToProps)(PlantCard);
