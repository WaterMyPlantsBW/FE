import React, { useState } from 'react'

import styled from 'styled-components'


export default function Login (){
    return(
        <div>
            <h1>Plantz?</h1>
                
                <h2>Login</h2>
                <br/>
                <label>Username
                    <input
                        name="username"
                        type='text'
                        placeholder='Enter Username'
                        />
                </label>
                <br/>
                <label>Password
                    <input
                        name="password"
                        type="password"
                        placeholder='Enter Password'

                    />
                </label>
                <br/>
                <label>Phone Number
                    <input 
                        type="tel" 
                        id="phone" 
                        name="phone"
                        pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                        required/>    
                </label>
                    
                

        </div>
    )
}