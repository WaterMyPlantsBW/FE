import React, { useState, useEffect } from 'react'

import styled from 'styled-components'

import * as yup from 'yup'




//Schema for the shape of the form
const schema = yup.object().shape({
    username: yup.string().required('Name is Required').min(2, 'Needs at least 2 characters)'),
    password: yup.string().required('Please Enter Password').min(6, 'Needs'),
    

})


export default function Login (){

    //State for login
    const [login, setLogin] = useState({
        username: '',
        password:'',
        
    })

    // State for a completed login (can be rendered if needed)
    const [loginDone, setLoginDone ] = useState([])

    //state to disable login submit button 
    const [disabled, setDisabled] = useState(true)

    //state to set errors for login 
    const [loginErrors, setLoginErrors] = useState({
        username: '',
        password:'',
        
    })

    //function that validates errors based on the schema
    const validate = (name, value) => {

    yup.reach(schema, name)
      .validate(value)
      .then(() => setLoginErrors({...loginErrors, [name]: ''}))
      .catch(err => setLoginErrors({...loginErrors, [name]: err.loginErrors[0]}))
    }
 

    useEffect(() =>{
        schema.isValid(login).then(valid =>  setDisabled(!valid))
    }, [login])

    
    // Change function
    const onChange = e =>{
        
        const { name, value } = e.target
        setLogin({...login, [name]: value})
        
        // setLoginErrors(validate(login));

        
    }

    //Submit function - 
    const onSubmit = e => {
        console.log('Login form submitted')
        e.preventDefault();
        
        const loginComplete = { username: login.username.trim(), password: login.password}
        
        setLoginDone([...loginDone, loginComplete])
        
        setLogin({
            username: '',
            password:'',
            
        })
    }

    return(
        <div>
            <h1>Plantz?</h1>
                <form onSubmit={onSubmit}>
                    
                    <h2>Login</h2>
                    <br/>
                    <label>Username
                        <input
                            name="username"
                            type='text'
                            placeholder='Enter Username'
                            value={login.username}
                            onChange={onChange}
                            />
                    </label>
                    <br/>
                    <div>{loginErrors.username}</div>
                    <br/>
                    <label>Password
                        <input
                            name="password"
                            type="password"
                            placeholder='Enter Password'
                            value={login.password}
                            onChange={onChange}
                            />
                    </label>
                    <br/>
                    <div>{loginErrors.password}</div>
                    <br/>
            
                    <button disabled={disabled}>Login</button>
                </form>        
                
        </div>
    )
}