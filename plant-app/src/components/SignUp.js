import React, { useState, useEffect } from 'react';

import styled from 'styled-components';
import { connect } from 'react-redux';
import { signUpUser } from '../actions';
import * as yup from 'yup';

//Styling

export const Container = styled.div`
	width: 100%;
	height: 90vh;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const Form = styled.form`
	background: #fff;
	padding: 2rem;
	width: 30%;
	border-radius: 1rem;
	box-shadow: 0px 7px 28px -5px rgba(0, 0, 0, 0.52);
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
`;

export const Label = styled.label``;

export const Input = styled.input`
	width: 50%;
	padding: 0.8rem;
	margin-bottom: 0.7rem;
	outline: none;
	border: none;
	background: #f3f3f3;
`;

export const Button = styled.button`
	color: #fff;
	background: #26408b;
	border: none;
	padding: 0.6rem 0;
	width: 30%;
	border-radius: 5px;
	margin-top: 2rem;
	cursor: pointer;
`;

const phoneRegExp = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

//Schema for the shape of the form
const schema = yup.object().shape({
	username: yup.string().required('Name is Required').min(2, 'Needs at least 2 characters)'),
	password: yup.string().required('Please Enter Password').min(6, 'Needs at least 6 characters'),
	phoneNumber: yup.string().matches(phoneRegExp, 'is not valid').nullable()
});

function SignUp({ signUpUser, history }) {
	//State for login
	const [signUp, setSignUp] = useState({
		username: '',
		password: '',
		phoneNumber: ''
	});

	//state to disable login submit button
	const [disabled, setDisabled] = useState(true);

	//state to set errors for login
	const [signUpErrors, setSignUpErrors] = useState({
		username: '',
		password: '',
		phoneNumber: ''
	});

	//function that validates errors based on the schema
	const validate = e => {
		yup.reach(schema, e.target.name)
			.validate(e.target.value)
			.then(() => setSignUpErrors({ ...signUpErrors, [e.target.name]: '' }))
			.catch(err => setSignUpErrors({ ...signUpErrors, [e.target.name]: err.errors[0] }));
	};

	useEffect(() => {
		schema.isValid(signUp).then(valid => setDisabled(!valid));
	}, [signUp]);

	// Change function
	const onChange = e => {
		// const { name, value } = e.target;
		setSignUp({ ...signUp, [e.target.name]: e.target.value });

		validate(e);
	};

	//Submit function -
	const onSubmit = e => {
		e.preventDefault();
		console.log('Login form submitted');
		signUpUser(signUp, history);

		setSignUp({
			username: '',
			password: '',
			phoneNumber: ''
		});
	};

	return (
		<Container>
			<Form onSubmit={onSubmit}>
				<h2>Sign Up</h2>

				<Label htmlFor="username">Username </Label>
				<Input
					id="username"
					name="username"
					type="text"
					placeholder="Enter Username"
					value={signUp.username}
					onChange={onChange}
				/>

				<div style={{ color: 'red' }}>{signUpErrors.username}</div>

				<Label htmlFor="password">Password </Label>
				<Input
					id="password"
					name="password"
					type="password"
					placeholder="Enter Password"
					value={signUp.password}
					onChange={onChange}
				/>

				<div style={{ color: 'red' }}>{signUpErrors.password}</div>

				<Label htmlFor="phone">Phone Number </Label>
				<Input
					type="tel"
					id="phone"
					name="phoneNumber"
					pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
					required
					placeholder="Enter Phone Number"
					value={signUp.phoneNumber}
					onChange={onChange}
				/>
				<Button disabled={disabled}>Sign Up</Button>
			</Form>
		</Container>
	);
}

const mapStateToProps = state => {
	return {
		state
	};
};
const mapDispatchToProps = { signUpUser };
export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
