import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchPlants } from '../actions';
// import decodedToken from '../utils/decodedToken';

import styled from 'styled-components'





function PlantList({ user_id, fetchPlants }) {
	useEffect(() => {
		fetchPlants(user_id);
	}, []);
	return (
        <div>
		    <div>
			    <h1 style={{ color: '#fff' }}>My Plants</h1>
            </div>

            <div>

            </div>



        </div>

       
	);
}
const mapStateToProps = state => {
	console.log('state: ', state);
	return {
		user_id: state.user_id
	};
};
const mapDispatchToProps = { fetchPlants };
export default connect(mapStateToProps, mapDispatchToProps)(PlantList);

