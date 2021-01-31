import React from 'react'

import PlantCard from './PlantCard'

export default function PlantList (props) {

    const plantDone = props
    <div>
        <h1>My Plants</h1>

        {plantDone.map( plant => {
            
              <PlantCard plant={plant}/>
        })}
    </div>
}