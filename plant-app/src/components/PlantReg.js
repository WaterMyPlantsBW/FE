import React, { useState, useEffect } from 'react'

import styled from 'styled-components'

import * as yup from 'yup'




//Schema for the shape of the form
const schema = yup.object().shape({
    nickname: yup.string().required('Name is Required'),
    species: yup.string().required('Please Enter Species'),
    H20Frequency: yup.string().required('Please Enter H20 Frequency'),
    water: yup.string().required(),
    image: yup.string().nullable(),

})


export default function PlantReg (){

    //State for plant
    const [plant, setPlant] = useState({
        id: '',
        nickname: '',
        species: '',
        H20Frequency: '',
        water: '',
        image: '',
        
    })

    // State for a completed plant (can be rendered if needed)
    const [plantDone, setPlantDone ] = useState([])

    //state to disable plant submit button 
    const [disabled, setDisabled] = useState(true)

    //state to set errors for plant 
    const [plantErrors, setPlantErrors] = useState({
       
        nickname: '',
        species: '',
        H20Frequency: '',
        water: '',
        image: '',
        
    })

    //function that validates errors based on the schema
    const validate = e => {

    yup.reach(schema, e.target.name)
      .validate(e.target.value)
      .then(() => setPlantErrors({...plantErrors, [e.target.name]: ''}))
      .catch(err => 
        setPlantErrors({...plantErrors, [e.target.name]: err.errors[0]}),
        console.log()
      )
        
    }
    
    

    useEffect(() =>{
        schema.isValid(plant).then(valid =>  setDisabled(!valid))
    }, [plant])

    
    // Change function
    const onChange = e =>{
        
        // const { name, value } = e.target
        setPlant({...plant, [e.target.name]: e.target.value})
        
        validate(e);

        
    }

    //Submit function - 
    const onSubmit = e => {
        console.log('Login form submitted')
        e.preventDefault();
        
        const plantComplete = { username: plant.nickname.trim(), species: plant.species, H20Frequency: plant.H20Frequency, water: plant.water, image: plant.image}
        
        setPlantDone([...plantDone, plantComplete])
        
        setPlant({
            id: '',
            nickname: '',
            species: '',
            H20Frequency: '',
            water: '',
            image: ''
            
        })
    }

    return(
        <div>
            
                <form onSubmit={onSubmit}>
                    
                    <h2>Register Your Plant</h2>
                    <br/>
                    <label>Nickname
                        <input
                            name="nickname"
                            type='text'
                            placeholder='Enter Nickname'
                            value={plant.nickname}
                            onChange={onChange}
                            />
                    </label>
                    <br/>
                    < div style={{color:'red'}}>
                    {plantErrors.nickname.length > 0 ? <p>{plantErrors.nickname}</p> : null }
                    </div>
                    <br/>
                    <label>Species
                        <input
                            name="species"
                            type="species"
                            placeholder='Enter Species'
                            value={plant.species}
                            onChange={onChange}
                            />
                    </label>
                    <br/>
                    <div style={{color: 'red'}}>
                    {plantErrors.species.length > 0 ? <p>{plantErrors.species}</p> : null }
                    </div>
                    <br/>
                    <label>H20 Frequency
                        <input
                            name="H20Frequency"
                            type="H20Frequency"
                            placeholder='Enter H20Frequency'
                            value={plant.H20Frequency}
                            onChange={onChange}
                            />
                    </label>
                    <br/>
                    <div style={{color: 'red'}}>{plantErrors.H20Frequency}</div>
                    <label>Water On
                        <input
                            name="water"
                            type="water"
                            placeholder='mm/dd/yyyy'
                            value={plant.water}
                            onChange={onChange}
                            />
                    </label>
                    <br/>
                    <div style={{color: 'red'}}>{plantErrors.water}</div>
                    <label>Image
                        <input
                            name="image"
                            type="image"
                            alt="userImage"
                            placeholder='Enter imageUrl'
                            value={plant.image}
                            onChange={onChange}
                            />
                    </label>
                    <br/>
                    <div style={{color : 'red'}}>{plantErrors.image}</div>
                <button disabled={disabled}>Register</button>
                </form>        
                
        </div>
    )
}