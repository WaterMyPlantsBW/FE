import axios from 'axios';

import axiosWithAuth from '../utils/axiosWithAuth';
// import { history } from '../index';
export const FETCH_DATA_START = 'FETCH_DATA_START';
export const FETCH_DATA_SUCCES = 'FETCH_DATA_SUCCESS';
export const FETCH_DATA_ERROR = 'FETCH_DATA_ERROR';

export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_ERROR = 'LOGIN_ERROR';

export const USER_ID = 'USER_ID';

export const fetchPlants = id => dispatch => {
	// console.log(id);
	dispatch({ type: FETCH_DATA_START });
	// console.log(axiosWithAuth());
	axiosWithAuth()
		.get(`/users/${id}/plants`)
		.then(res => console.log(res))
		.catch(err => console.log(err));
};

export const loginUser = (login, history) => dispatch => {
	dispatch({ type: LOGIN_START });

	axios
		.post('https://water-my-plants-team-no132.herokuapp.com/auth/login', login)
		.then(res => {
			console.log(res);
			localStorage.setItem('token', res.data.token);
			history.push('plants');
			dispatch({ type: LOGIN_SUCCESS, payload: res.data.userID });
		})
		.catch(err => dispatch({ type: LOGIN_ERROR }));
};

// export const userId = id => dispatch => {
// 	console.log(id);
// 	dispatch({ type: USER_ID, payload: id });
// };
