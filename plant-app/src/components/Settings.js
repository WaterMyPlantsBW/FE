import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import * as yup from 'yup';

import { Container, Label, Input, Form, Button } from './SignUp';



const phoneRegExp = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

//Schema for the shape of the form
const schema = yup.object().shape({
    newPassword: yup.string().required('Please update your password'),
    newPhoneNumber: yup.string().matches(phoneRegExp, 'is not valid').nullable()

})

export default function Settings () {
    //State used to store updated password, username and phone number
    const [ update, setUpdate ] = useState({

        newPassword: '',
        newPhoneNumber: '',
    })

    //state for disabled button until form has been completed
    const [ disabled, setDisabled ] = useState(true)

    // State for a completed update (can be rendered if needed)
	const [updateDone, setUpdateDone] = useState([]);

    //state for update form errors
    const [ updateErrors, setUpdateErrors ] = useState({
        newPassword: '',
        newPhoneNumber: '',
    })

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

		const updateComplete = {
			newPassword: update.newPassword,
            newPhoneNumber: update.newPhoneNumber,
		};
		
		setUpdateDone([...updateDone, updateComplete]);

		setUpdate({
			newPassword: '',
            newPhoneNumber: '',
		});
	};


    return (
        <Container>
		<Form onSubmit={onSubmit}>
			<div>
				<h2>Update Your Information</h2>
			</div>
			

			
				
					<Label htmlFor="newPassword">
						New Password
						<Input
							name="newPassword"
							type="text"
							placeholder="Enter New User Name"
							value={update.newPassword}
							onChange={onChange}
						/>
					</Label>

					<div style={{ color: 'red' }}>
						
					</div>
				
				
					<Label htmlFor="newPhoneNumber">
						New Phone Number
						<Input
							name="newPhoneNumber"
							type="text"
							placeholder="Enter New Phone Number"
							value={update.newPhoneNumber}
							onChange={onChange}
						/>
					</Label>
               
				

				<Button disabled={disabled}>Register</Button>
			
		</Form>
        </Container>
    
	);

}