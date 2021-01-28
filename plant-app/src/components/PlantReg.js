import React, { useState, useEffect } from 'react'

import styled from 'styled-components'

import * as yup from 'yup'




//Schema for the shape of the form
const schema = yup.object().shape({
    username: yup.string().required('Name is Required').min(2, 'Needs at least 2 characters)'),
    password: yup.string().required('Please Enter Password').min(6, 'Needs'),
    

})


export default function PlantReg (){

    //State for plant
    const [plant, setPlant] = useState({
        id: '',
        nickname: '',
        species: '',
        H20Frequency: '',
        image: ''
        
    })

    // State for a completed plant (can be rendered if needed)
    const [plantDone, setPlantDone ] = useState([])

    //state to disable plant submit button 
    const [disabled, setDisabled] = useState(true)

    //state to set errors for plant 
    const [plantErrors, setPlantErrors] = useState({
        id: '',
        nickname: '',
        species: '',
        H20Frequency: '',
        image: ''
        
    })

    //function that validates errors based on the schema
    const validate = (name, value) => {

    yup.reach(schema, name)
      .validate(value)
      .then(() => setPlantErrors({...plantErrors, [name]: ''}))
      .catch(err => setPlantErrors({...plantErrors, [name]: err.plantErrors[0]}))
    }
 

    useEffect(() =>{
        schema.isValid(plant).then(valid =>  setDisabled(!valid))
    }, [plant])

    
    // Change function
    const onChange = e =>{
        
        const { name, value } = e.target
        setPlant({...plant, [name]: value})
        
        // setPlantErrors(validate(plant));

        
    }

    //Submit function - 
    const onSubmit = e => {
        console.log('Login form submitted')
        e.preventDefault();
        
        const plantComplete = { username: plant.username.trim(), password: plant.password}
        
        setPlantDone([...plantDone, plantComplete])
        
        setPlant({
            id: '',
            nickname: '',
            species: '',
            H20Frequency: '',
            image: ''
            
        })
    }

    return(
        <div>
            
                <form onSubmit={onSubmit}>
                    
                    <h2>Register Your Plant</h2>
                    <br/>
                    <label>Username
                        <input
                            name="username"
                            type='text'
                            placeholder='Enter Username'
                            value={plant.username}
                            onChange={onChange}
                            />
                    </label>
                    <br/>
                    <div>{plantErrors.username}</div>
                    <br/>
                    <label>Password
                        <input
                            name="password"
                            type="password"
                            placeholder='Enter Password'
                            value={plant.password}
                            onChange={onChange}
                            />
                    </label>
                    <br/>
                    <div>{plantErrors.password}</div>
                
                    <br/>
                    
                    <button disabled={disabled}>Register</button>
                </form>        
                
        </div>
    )
}