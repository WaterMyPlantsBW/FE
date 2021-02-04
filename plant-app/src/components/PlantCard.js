import React from 'react'

import styled from 'styled components'


export default function PlantCard (props){

    //Slice of state that contians plant data from PlantReg.js
    const plant = props


    return(
        <div>
            <h1>{plant.nickname}</h1>
                
                <div>
                    <div>{plant.image}</div>
                </div>
                <div>{plant.species}</div>
                <div>{plant.H20Freqency}</div>
                <div>{plant.water}</div>
            
        </div>
        
    )
}