// import React, { useState, useEffect } from 'react';

// import styled from 'styled-components';

// import * as yup from 'yup';

// const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

// //Schema for the shape of the form
// const schema = yup.object().shape({
// 	username: yup.string().required('Name is Required').min(2, 'Needs at least 2 characters)'),
// 	password: yup.string().required('Please Enter Password').min(6, 'Needs'),
// 	phoneNumber: yup.string().matches(phoneRegExp, 'is not valid').nullable()
// });

// export default function SignUp() {
// 	//State for login
// 	const [signUp, setSignUp] = useState({
// 		username: '',
// 		password: '',
// 		phoneNumber: ''
// 	});

// 	// State for a completed login (can be rendered if needed)
// 	const [signUpDone, setSignUpDone] = useState([]);

// 	//state to disable login submit button
// 	const [disabled, setDisabled] = useState(true);

// 	//state to set errors for login
// 	const [signUpErrors, setSignUpErrors] = useState({
// 		username: '',
// 		password: '',
// 		phoneNumber: ''
// 	});

// 	//function that validates errors based on the schema
// 	const validate = (name, value) => {
// 		yup.reach(schema, name)
// 			.validate(value)
// 			.then(() => signUpErrors({ ...signUpErrors, [name]: '' }))
// 			.catch(err => signUpErrors({ ...signUpErrors, [name]: err.signUpErrors[0] }));
// 	};

// 	useEffect(() => {
// 		schema.isValid(signUp).then(valid => setDisabled(!valid));
// 	}, [signUp]);

// 	// Change function
// 	const onChange = e => {
// 		const { name, value } = e.target;
// 		setSignUp({ ...signUp, [name]: value });

// 		// setLoginErrors(validate(login));
// 	};

// 	//Submit function -
// 	const onSubmit = e => {
// 		console.log('Login form submitted');
// 		e.preventDefault();

// 		const signUpComplete = {
// 			username: signUp.username.trim(),
// 			password: signUp.password,
// 			phone: signUp.phoneNumber
// 		};

// 		setSignUpDone([...signUpDone, signUpComplete]);

// 		setSignUp({
// 			username: '',
// 			password: '',
// 			phoneNumber: ''
// 		});
// 	};

// 	return (
// 		<div>
// 			<form onSubmit={onSubmit}>
// 				<h2>Login</h2>
// 				<br />
// 				<label>
// 					Username
// 					<input
// 						name="username"
// 						type="text"
// 						placeholder="Enter Username"
// 						value={signUp.username}
// 						onChange={onChange}
// 					/>
// 				</label>
// 				<br />
// 				<div>{signUpErrors.username}</div>
// 				<br />
// 				<label>
// 					Password
// 					<input
// 						name="password"
// 						type="password"
// 						placeholder="Enter Password"
// 						value={signUp.password}
// 						onChange={onChange}
// 					/>
// 				</label>
// 				<br />
// 				<div>{signUpErrors.password}</div>
// 				<br />
// 				<label>
// 					Phone Number
// 					<input
// 						type="tel"
// 						id="phone"
// 						name="phoneNumber"
// 						pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
// 						required
// 						placeholder="Enter Phone Number"
// 						value={signUp.phoneNumber}
// 						onChange={onChange}
// 					/>
// 				</label>
// 				<br />
// 				<div>{signUp.phoneNumber}</div>
// 				<br />
// 				<button disabled={disabled}>Login</button>
// 			</form>
// 		</div>
// 	);
// }
