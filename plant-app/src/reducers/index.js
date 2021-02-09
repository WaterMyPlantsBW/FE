import {
	FETCH_DATA_START,
	FETCH_DATA_SUCCES,
	FETCH_DATA_ERROR,
	LOGIN_START,
	LOGIN_SUCCESS,
	LOGIN_ERROR,
	PLANT_REG_ERROR,
	PLANT_REG_SUCCESS,
	PLANT_REG_START,
	DELETE_ERROR,
	DELETE_START,
	DELETE_SUCCESS,
	LOGOUT_USER,
	EDIT_PLANT,
	EDIT_SUCCESS,
	SIGNUP_SUCCESS,
	SIGNUP_USER
} from '../actions';

const intialState = {
	isFetchingData: false,
	isFetchingUser: false,
	isUserLoggedIn: localStorage.getItem('userID') ? true : false,
	editPlant: false,
	plants: [],
	userId: localStorage.getItem('userID'),
	error: ''
};

const appReducer = (state = intialState, action) => {
	switch (action.type) {
		case SIGNUP_USER:
			return {
				...state,
				isFetchingData: true,
				
			}
		case SIGNUP_SUCCESS:
			return {
					...state,
					isFetchingData: false,
				}
		case FETCH_DATA_START:
			return {
				...state,
				isFetchingData: true
			};

		case FETCH_DATA_SUCCES:
			console.log('data success being called');
			return {
				...state,
				isFetchingData: false,
				error: '',
				plants: action.payload
			};

		case FETCH_DATA_ERROR:
			return {
				...state,
				isFetchingData: false,
				error: action.payload
			};

		case LOGIN_START:
			return {
				...state,
				isFetchingUser: true
			};

		case LOGIN_SUCCESS:
			console.log(state.isUserLoggedIn);
			return {
				...state,
				isFetchingUser: false,
				isUserLoggedIn: true,
				error: ''
				// user_id: action.payload
			};

		case LOGIN_ERROR:
			return {
				...state,
				isFetchingUser: false
			};
		case LOGOUT_USER: {
			return {
				...state,
				isUserLoggedIn: false
			};
		}

		case PLANT_REG_START:
			return {
				...state,
				isFetchingData: true
			};
		case PLANT_REG_SUCCESS:
			return {
				...state,
				plants: action.payload,
				isFetchingData: false
			};
		case PLANT_REG_ERROR:
			return {
				...state,
				isFetchingData: false
			};
		case DELETE_START:
			return {
				...state,
				isFetchingData: true
			};
		case DELETE_SUCCESS:
			return {
				...state,
				isFetchingData: false,
				editPlant: false,
				plants: action.payload
			};
		case DELETE_ERROR:
			return {
				...state,
				isFetchingData: false
			};

		case EDIT_PLANT: {
			return {
				...state,
				editPlant: true
			};
		}

		case EDIT_SUCCESS: {
			return {
				...state,
				editPlant: false
			};
		}

		default: {
			return state;
		}
	}
};

export default appReducer;
