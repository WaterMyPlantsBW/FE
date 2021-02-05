import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import * as yup from 'yup';

import { Label, Input, Form, Button } from './SignUp';


function Settings () {
    //State used to store updated password, username and phone number
    const [ update, setUpdate ] = useState({
        newUserName: '',
        newPassword: '',

    })

    //state for disabled button until form has been completed
    const [ disabled, setDisabled ] = useState(true)

    //state for update form errors
    const [ updateErrors, setUpdateErrors ] = useState({
        newUserName: '',
        newPassword: '',
    })

    return (
		<Form style={style} onSubmit={onSubmit}>
			<div>
				<h2>Update Your Information</h2>
			</div>
			

			<div>
				<div>
					<Label>
						New User Name
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
						New Password
						<Input
							name="species"
							type="species"
							placeholder="Enter Species"
							value={plant.species}
							onChange={onChange}
						/>
					</Label>

				

				<Button disabled={disabled}>Register</Button>
			</div>
		</Form>
	);

}