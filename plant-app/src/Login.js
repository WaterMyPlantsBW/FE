import React, { useState } from 'react'

import styled from 'styled-components'


export default function Login (){

    //State for login
    const [login, setLogin] = useState({
        username: '',
        password:'',
        phone:''
    })

    
    const [loginDone, setLoginDone ] = useState([])
    
    // Change function
    const onChange = e =>{

        const { name, value } = e.target
        setLogin({...login, [name]: value})
        
    }

    //Submit function - 
    const onSubmit = e => {
        console.log('Login form submitted')
        e.preventDefault();
        
        const loginComplete = { username: login.username.trim(), password: login.password, phone: login.phone}
        
        setLoginDone([...loginDone, loginComplete])
        
        setLogin({
            username: '',
            password:'',
            phone:''
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
                            onChange={onChange}/>
                    </label>
                    <br/>
                    <label>Password
                        <input
                            name="password"
                            type="password"
                            placeholder='Enter Password'
                            value={login.password}
                            onChange={onChange}/>
                    </label>
                    <br/>
                    <label>Phone Number
                        <input 
                            type="tel" 
                            id='phone' 
                            name="phone"
                            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                            required
                            placeholder='Enter Phone Number'
                            value={login.phone}
                            onChange={onChange}/>    
                    </label>
                    <br/>
                    <button>Login</button>
                </form>        
                
        </div>
    )
}