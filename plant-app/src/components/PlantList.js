import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchPlants } from '../actions';
import decodedToken from '../utils/decodedToken';
function PlantList({ user_id, fetchPlants }) {
	useEffect(() => {
		fetchPlants(user_id);
	}, []);

	return (
		<div>
			<h1 style={{ color: '#fff' }}>My Plants</h1>
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
