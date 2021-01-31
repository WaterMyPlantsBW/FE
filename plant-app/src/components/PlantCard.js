import React from 'react'



export default function PlantCard (props){

    //Slice of state that contians plant data from PlantReg.js
    const plantDone = props


    return(
        <div>
            <h1>{plantDone.nickname}</h1>
                
                <div>
                    <div>{plantDone.image}</div>
                </div>
                <div>{plantDone.species}</div>
                <div>{plantDone.H20Freqency}</div>
                <div>{plantDone.water}</div>
            
        </div>
        
    )
}