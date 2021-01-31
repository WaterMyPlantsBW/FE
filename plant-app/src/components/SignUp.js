import React, { useState, useEffect } from 'react';

import styled from 'styled-components';

import * as yup from 'yup';

//Styling

export const Container = styled.div`
	width: 300px;
	width: 100%;
	height: 50vh;
	display: flex;
	justify-content: center;
	align-items: center;
	margin-top: 2rem;
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
`;

const phoneRegExp = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

//Schema for the shape of the form
const schema = yup.object().shape({
	username: yup.string().required('Name is Required').min(2, 'Needs at least 2 characters)'),
	password: yup.string().required('Please Enter Password').min(6, 'Needs'),
	phoneNumber: yup.string().matches(phoneRegExp, 'is not valid').nullable()
});

export default function SignUp() {
	//State for login
	const [signUp, setSignUp] = useState({
		username: '',
		password: '',
		phoneNumber: ''
	});

	// State for a completed login (can be rendered if needed)
	const [signUpDone, setSignUpDone] = useState([]);

	//state to disable login submit button
	const [disabled, setDisabled] = useState(true);

	//state to set errors for login
	const [signUpErrors, setSignUpErrors] = useState({
		username: '',
		password: '',
		phoneNumber: ''
	});

	//function that validates errors based on the schema
	const validate = (name, value) => {
		yup.reach(schema, name)
			.validate(value)
			.then(() => signUpErrors({ ...signUpErrors, [name]: '' }))
			.catch(err => signUpErrors({ ...signUpErrors, [name]: err.errors[0] }));
	};

	useEffect(() => {
		schema.isValid(signUp).then(valid => setDisabled(!valid));
	}, [signUp]);

	// Change function
	const onChange = e => {
		const { name, value } = e.target;
		setSignUp({ ...signUp, [name]: value });

		// setLoginErrors(validate(login));
	};

	//Submit function -
	const onSubmit = e => {
		console.log('Login form submitted');
		e.preventDefault();

		const signUpComplete = {
			username: signUp.username.trim(),
			password: signUp.password,
			phone: signUp.phoneNumber
		};

		setSignUpDone([...signUpDone, signUpComplete]);

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

				<div>{signUpErrors.username}</div>

				<Label htmlFor="password">Password </Label>
				<Input
					id="password"
					name="password"
					type="password"
					placeholder="Enter Password"
					value={signUp.password}
					onChange={onChange}
				/>

				<div>{signUpErrors.password}</div>

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
