import React, { useState, useEffect } from 'react';

import * as yup from 'yup';
import { connect } from 'react-redux';

import { Container, Label, Input, Form, Button } from './SignUp';
import { updateUserInfo } from '../actions/index';

const phoneRegExp = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

//Schema for the shape of the form
const schema = yup.object().shape({
	newPassword: yup.string().required('Please update your password'),
	newPhoneNumber: yup.string().matches(phoneRegExp, 'is not valid').nullable()
});

// component
function Settings({ user_id, updateUserInfo }) {
	//State used to store updated password, username and phone number
	const [update, setUpdate] = useState({
		newPassword: '',
		newPhoneNumber: ''
	});

	//state for disabled button until form has been completed
	const [disabled, setDisabled] = useState(true);

	//state for update form errors
	const [updateErrors, setUpdateErrors] = useState({
		newPassword: '',
		newPhoneNumber: ''
	});

	//function that validates errors based on the schema
	const validate = e => {
		yup.reach(schema, e.target.name)
			.validate(e.target.value)
			.then(() => setUpdateErrors({ ...updateErrors, [e.target.name]: '' }))
			.catch(err => setUpdateErrors({ ...updateErrors, [e.target.name]: err.errors[0] }), console.log());
	};

	useEffect(() => {
		schema.isValid(update).then(valid => setDisabled(!valid));
	}, [update]);

	// Change function
	const onChange = e => {
		// const { name, value } = e.target
		setUpdate({ ...update, [e.target.name]: e.target.value });

		validate(e);
	};

	const onSubmit = e => {
		console.log('Information Updated');
		e.preventDefault();

		updateUserInfo(update, user_id);

		setUpdate({
			newPassword: '',
			newPhoneNumber: ''
		});
	};

	return (
		<Container>
			<Form onSubmit={onSubmit}>
				<div>
					<h2>Update Your Information</h2>
				</div>

				<Label htmlFor="newPassword">New Password</Label>
				<Input
					id="newPassword"
					name="newPassword"
					type="text"
					placeholder="Enter New Password"
					value={update.newPassword}
					onChange={onChange}
				/>

				<div style={{ color: 'red' }}></div>

				<Label htmlFor="newPhoneNumber">New Phone Number</Label>
				<Input
					id="newPhoneNumber"
					name="newPhoneNumber"
					type="text"
					placeholder="Enter New Phone Number"
					value={update.newPhoneNumber}
					onChange={onChange}
				/>

				<Button disabled={disabled}>Update</Button>
			</Form>
		</Container>
	);
}

const mapStateToProps = state => {
	return {
		user_id: state.user_id
	};
};

const mapDispatchToProps = {
	updateUserInfo
};

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
