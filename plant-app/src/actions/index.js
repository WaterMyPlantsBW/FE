import axios from 'axios';

export const FETCH_DATA_START = 'FETCH_DATA_START';
export const FETCH_DATA_SUCCES = 'FETCH_DATA_SUCCESS';
export const FETCH_DATA_ERROR = 'FETCH_DATA_ERROR';

export const USER_ID = 'USER_ID';

const headers = {
	Accept: 'application/json'
};

export const fetchPlants = id => dispatch => {
	dispatch({ type: FETCH_DATA_START });

	axios
		.get(`https://water-my-plants-team-no132.herokuapp.com/users/${id}/plants`, { headers: headers })
		.then(res => console.log(res))
		.catch(err => console.log(err));
};

export const userId = id => dispatch => {
	dispatch({ type: USER_ID, payload: id });
};
