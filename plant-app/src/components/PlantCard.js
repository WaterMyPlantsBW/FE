import React from 'react'

import styled from 'styled-components'

const CardContainer = styled.div`
    text-align: center;
    width: 50%;
    border-radius: 1rem;
    margin: 0 auto;
	background: #fff;
	padding: 1em;
    align-items: center;
    color: black;
    box-shadow: 0px 7px 28px -5px rgba(0, 0, 0, 0.52);
`
const CardH1 = styled.div`
   padding: 1em;
   margin: 0 auto;
   font-size: 40px;
  

`

const CardImage = styled.img`
    width: 60%;
    height: 60%;
    

`
const CardItem = styled.div`
    padding; 4rem;
    margin; 1em;
    font-size: 30px;
`
export default function PlantCard (props){

    //Slice of state that contians plant data from PlantReg.js
    const { plant } = props


    return(
        <CardContainer>
            <CardH1>{plant.nickname}</CardH1>
                
                <div>
                    <CardImage src={plant.image} alt={plant.species} />
                </div>
                <CardItem>Species:{plant.species}</CardItem>
                <CardItem>Watering Frequency:{plant.H20Frequency}</CardItem>
                <CardItem>Watering Begins On:{plant.water}</CardItem>
            
        </CardContainer>
        
    )
}