import axios from 'axios';
import axiosWithAuth from '../utils/axiosWithAuth';

//plant data
export const FETCH_DATA_START = 'FETCH_DATA_START';
export const FETCH_DATA_SUCCES = 'FETCH_DATA_SUCCESS';
export const FETCH_DATA_ERROR = 'FETCH_DATA_ERROR';
export const FETCH_DATA_SIGNUP = 'FETCH_DATA_SIGNUP';

//LOGIN
export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_ERROR = 'LOGIN_ERROR';

//plant registration
export const PLANT_REG_START = 'PLANT_REG_START';
export const PLANT_REG_SUCCESS = 'PLANT_REG_SUCCESS';
export const PLANT_REG_ERROR = 'PLANT_REG_ERROR';

//user signup
export const SIGNUP_USER = 'SIGNUP_USER';

//user update
export const USER_UPDATE_START = 'USER_UPTATE_START';
export const USER_UPDATE_SUCCESS = 'USER_UPTATE_SUCCESS';
export const USER_UPDATE_ERROR = 'USER_UPTATE_ERROR';

//delete plant
export const DELETE_ERROR = 'DELETE_PLANT_ERROR';
export const DELETE_START = 'DELETE_PLANT_START';
export const DELETE_SUCCESS = 'DELETE_PLANT_SUCCESS';

//log out user
export const LOGOUT_USER = 'LOGOUT_USER';

// fetch plants once user is logged in
export const fetchPlants = id => dispatch => {
	dispatch({ type: FETCH_DATA_START });
	axiosWithAuth()
		.get(`/users/${id}/plants`)
		.then(res => dispatch({ type: FETCH_DATA_SUCCES, payload: res.data }))
		.catch(err => console.log(err));
};

//login user
export const loginUser = (login, history) => dispatch => {
	dispatch({ type: LOGIN_START });

	axios
		.post('https://water-my-plants-team-no132.herokuapp.com/auth/login', login)
		.then(res => {
			console.log(res);
			localStorage.setItem('token', res.data.token);
			localStorage.setItem('userID', res.data.userID);
			dispatch({ type: LOGIN_SUCCESS, payload: JSON.parse(localStorage.getItem('userID')) });

			history.push('plants');
		})
		.catch(err => dispatch({ type: LOGIN_ERROR }));
};

// user log out
export const logoutUser = () => dispatch => {
	dispatch({ type: LOGOUT_USER });
	localStorage.removeItem('userID');
	localStorage.removeItem('token');
};

//add new plant
export const addNewPlant = (newPlant, id) => dispatch => {
	dispatch({ type: PLANT_REG_START });

	// return console.log(newPlant, id);
	axiosWithAuth()
		.post(`https://water-my-plants-team-no132.herokuapp.com/users/${id}/plants`, newPlant)
		.then(res => {
			console.log(res);
			dispatch({ type: PLANT_REG_SUCCESS, payload: res.data });
		})
		.catch(err => {
			console.log(err);
			dispatch({ type: PLANT_REG_ERROR });
		});
};

//sign up user
export const signUpUser = signUp => dispatch => {
	dispatch({ type: SIGNUP_USER });

	axios
		.post('https://water-my-plants-team-no132.herokuapp.com/auth/register', signUp)
		.then(res => {
			console.log(res);
		})
		.catch(err => console.log(err));
};

//update user info
export const updateUserInfo = (user, id) => dispatch => {
	dispatch({ type: USER_UPDATE_START });
	axiosWithAuth()
		.put(`/users/${id}`, user)
		.then(res => console.log(res))
		.catch(err => console.log(err));
};

//delete plant
export const deletePlant = (id, history) => dispatch => {
	dispatch({ type: DELETE_START });

	axiosWithAuth()
		.delete(`plants/${id}`)
		.then(res => {
			console.log(res);
			history.push('/plants');
			dispatch({ type: DELETE_SUCCESS, payload: res.data });
		})
		.catch(err => dispatch({ type: DELETE_ERROR }));
};
