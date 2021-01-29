import React, { useState, useEffect } from 'react';

import styled from 'styled-components';

import * as yup from 'yup';


//Styling

const SignUpContainer = styled.form`
    text-align: center;
    height: 100vh;
    padding: 3em;
    display: grid;
    
    
    
        
`
// const SignUpLeft = styled.div`
//     text-align: left;
//     align-self: center;
//     padding: 1em;
    

// `
// const SignUpRight = styled.div`
//     text-align: right;
//     align-self: center;
//     padding: 1em;
// `

const phoneRegExp = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

//Schema for the shape of the form
const schema = yup.object().shape({
    username: yup.string().required('Name is Required').min(2, 'Needs at least 2 characters'),
    password: yup.string().required('Please Enter Password').min(6, 'Needs at least 6 characters'),
    phoneNumber: yup.string().matches(phoneRegExp, 'not a valid number')

})


export default function SignUp (){

    //State for login
    const [signUp, setSignUp] = useState({
        username: '',
        password:'',
        phoneNumber:''
    })

    // State for a completed login (can be rendered if needed)
    const [signUpDone, setSignUpDone ] = useState([])

    //state to disable login submit button 
    const [disabled, setDisabled] = useState(true)

    //state to set errors for login 
    const [signUpErrors, setSignUpErrors] = useState({
        username: '',
        password:'',
        phoneNumber:''
    })

    //function that validates errors based on the schema
    const validate = e => {

    yup.reach(schema, e.target.name)
      .validate(e.target.value)
      .then(() => setSignUpErrors({...signUpErrors, [e.target.name]: ''}))
      .catch(err => setSignUpErrors({...signUpErrors, [e.target.name]: err.errors[0]}))
    }
 

    useEffect(() =>{
        schema.isValid(signUp).then(valid =>  setDisabled(!valid))
    }, [signUp])

    
    // Change function
    const onChange = e =>{
        
        // const { name, value } = e.target
        setSignUp({...signUp, [e.target.name]: e.target.value})
        
        validate(e);

        
    }

    //Submit function - 
    const onSubmit = e => {
        console.log('Login form submitted')
        e.preventDefault();
        
        const signUpComplete = { username: signUp.username.trim(), password: signUp.password, phone: signUp.phoneNumber}
        
        setSignUpDone([...signUpDone, signUpComplete])
        
        setSignUp({
            username: '',
            password:'',
            phoneNumber:''
        })
    }

    return(
            
            
                <SignUpContainer onSubmit={onSubmit}>

                    <div>
                        <div class="left">
                            <h2>Sign Up</h2>
                        </div>
                    
                        <br/>
                        <div class="right">
                        <label>Username
                        <input
                            name="username"
                            type='text'
                            placeholder='Enter Username'
                            value={signUp.username}
                            onChange={onChange}
                            />
                        </label>
                        <br/>
                        <div style={{color: 'red'}}>{signUpErrors.username}</div>
                        <br/>
                        <label>Password
                        <input
                            name="password"
                            type="password"
                            placeholder='Enter Password'
                            value={signUp.password}
                            onChange={onChange}
                            />
                        </label>
                        <br/>
                        <div style={{color: 'red'}}>{signUpErrors.password}</div>
                        <br/>
                        <label>Phone Number
                        <input 
                            type="tel" 
                            id='phone' 
                            name="phoneNumber"
                            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                            required
                            placeholder='Enter Phone Number'
                            value={signUp.phoneNumber}
                            onChange={onChange}
                            />    
                        </label>
                            <br/>
                            <div style={{color: 'red'}}>{signUpErrors.phoneNumber}</div>
                            <br/>
                            <button disabled={disabled}>Sign Up</button>
                        </div>
                    </div>
                </SignUpContainer>        
                
            
    )
}
