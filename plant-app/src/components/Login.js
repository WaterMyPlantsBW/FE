import React, { useState, useEffect } from 'react';
import * as yup from 'yup';
import { connect } from 'react-redux';

import { loginUser } from '../actions/index';

import { Container, Label, Input, Form, Button } from './SignUp';

//Schema for the shape of the form
const schema = yup.object().shape({
	username: yup.string().required('Name is Required').min(2, 'Needs at least 2 characters)'),
	password: yup.string().required('Please Enter Password').min(6, 'Needs at least 6 characters')
});

// Route passes history as props and loginUser passed as props through redux(connect);
function Login({ loginUser, history }) {
	//State for login
	const [login, setLogin] = useState({
		username: '',
		password: ''
	});

	// State for a completed login (can be rendered if needed)
	// const [user, setUser] = useState();

	//state to disable login submit button
	const [disabled, setDisabled] = useState(true);

	//state to set errors for login
	const [loginErrors, setLoginErrors] = useState({
		username: '',
		password: ''
	});

	//function that validates errors based on the schema
	const validate = e => {
		yup.reach(schema, e.target.name)
			.validate(e.target.value)
			.then(() => setLoginErrors({ ...loginErrors, [e.target.name]: '' }))
			.catch(err => setLoginErrors({ ...loginErrors, [e.target.name]: err.errors[0] }));
	};

	useEffect(() => {
		schema.isValid(login).then(valid => setDisabled(!valid));
	}, [login]);

	// Change function
	const onChange = e => {
		// const { name, value } = e.target;
		setLogin({ ...login, [e.target.name]: e.target.value });

		validate(e);
	};
	//Submit function -
	const onSubmit = e => {
		e.preventDefault();
		console.log('Login form submitted');

		loginUser(login, history);

		setLogin({
			username: '',
			password: ''
		});
	};

	return (
		<Container>
			<Form onSubmit={onSubmit}>
				<h2>Login</h2>

				<Label htmlFor="username">Username</Label>
				<Input
					id="username"
					name="username"
					type="text"
					placeholder="Enter Username"
					value={login.username}
					onChange={onChange}
				/>

				<div style={{ color: 'red' }}>{loginErrors.username}</div>

				<Label htmlFor="password">Password </Label>
				<Input
					id="passowrd"
					name="password"
					type="password"
					placeholder="Enter Password"
					value={login.password}
					onChange={onChange}
				/>

				<div style={{ color: 'red' }}>{loginErrors.password}</div>

				<Button disabled={disabled}>Login</Button>
			</Form>
		</Container>
	);
}

const mapStateToProps = state => {
	return {
		state
	};
};

const mapDispatchToProps = { loginUser };

export default connect(mapStateToProps, mapDispatchToProps)(Login);
