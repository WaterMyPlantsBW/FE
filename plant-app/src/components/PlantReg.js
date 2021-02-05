import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import * as yup from 'yup';
import { connect } from 'react-redux';

import { Label, Input, Form, Button } from './SignUp';
import { addNewPlant } from '../actions/index';

const Close = styled.div`
	position: absolute;
	top: 15px;
	right: 30px;
	font-weight: bold;
	cursor: pointer;
`;

//Schema for the shape of the form
const schema = yup.object().shape({
	nickname: yup.string().required('Name is Required'),
	species: yup.string().required('Please Enter Species'),
	H20Frequency: yup.string().required('Please Enter H20 Frequency'),
	water: yup.string().required(),
	image: yup.string().nullable()
});

function PlantReg({ style, setShow, addNewPlant, user_id }) {
	//id

	//State for plant
	const [plant, setPlant] = useState({
		nickname: '',
		species: '',
		H20Frequency: '',
		image: '',
		user_id: user_id,
		water: ''
	});

	//state to disable plant submit button
	const [disabled, setDisabled] = useState(true);

	//state to set errors for plant
	const [plantErrors, setPlantErrors] = useState({
		nickname: '',
		species: '',
		H20Frequency: '',
		water: '',
		image: ''
	});

	//function that validates errors based on the schema
	const validate = e => {
		yup.reach(schema, e.target.name)
			.validate(e.target.value)
			.then(() => setPlantErrors({ ...plantErrors, [e.target.name]: '' }))
			.catch(err => setPlantErrors({ ...plantErrors, [e.target.name]: err.errors[0] }), console.log());
	};

	useEffect(() => {
		schema.isValid(plant).then(valid => setDisabled(!valid));
	}, [plant]);

	// Change function
	const onChange = e => {
		// const { name, value } = e.target
		setPlant({ ...plant, [e.target.name]: e.target.value });

		validate(e);
	};

	//Submit function -
	const onSubmit = e => {
		console.log('Plant Registration Complete');
		e.preventDefault();

		addNewPlant(plant, user_id);

		setPlant({
			id: '',
			nickname: '',
			species: '',
			H20Frequency: '',
			water: '',
			image: ''
		});
	};

	return (
		<Form style={style} onSubmit={onSubmit}>
			<div>
				<h2>Register Your Plant</h2>
			</div>
			<Close onClick={() => setShow(false)}>X</Close>

			<div>
				<div>
					<Label>
						Nickname
						<Input
							name="nickname"
							type="text"
							placeholder="Enter Nickname"
							value={plant.nickname}
							onChange={onChange}
						/>
					</Label>

					<div style={{ color: 'red' }}>
						{plantErrors.nickname.length > 0 ? <p>{plantErrors.nickname}</p> : null}
					</div>
				</div>
				<div>
					<Label>
						Species
						<Input
							name="species"
							type="text"
							placeholder="Enter Species"
							value={plant.species}
							onChange={onChange}
						/>
					</Label>

					<div style={{ color: 'red' }}>
						{plantErrors.species.length > 0 ? <p>{plantErrors.species}</p> : null}
					</div>
				</div>
				<div>
					<Label>
						H20 Frequency
						<Input
							name="H20Frequency"
							type="text"
							placeholder="Enter H20Frequency"
							value={plant.H20Frequency}
							onChange={onChange}
						/>
					</Label>

					<div style={{ color: 'red' }}>{plantErrors.H20Frequency}</div>
				</div>
				<div>
					<Label>
						Water On
						<Input
							name="water"
							type="text"
							placeholder="yyyy-mm-dd"
							value={plant.water}
							onChange={onChange}
						/>
					</Label>

					<div style={{ color: 'red' }}>{plantErrors.water}</div>
				</div>
				<div>
					<Label>
						Image
						<Input
							name="image"
							type="image"
							alt="userImage"
							placeholder="Enter imageUrl"
							value={plant.image}
							onChange={onChange}
						/>
					</Label>

					<div style={{ color: 'red' }}>{plantErrors.image}</div>
				</div>

				<Button disabled={disabled}>Register</Button>
			</div>
		</Form>
	);
}

const mapStateTopProps = state => {
	return {
		user_id: state.user_id
	};
};

const mapDispatchToProps = { addNewPlant };

export default connect(mapStateTopProps, mapDispatchToProps)(PlantReg);
