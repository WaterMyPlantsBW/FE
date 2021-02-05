import {
	FETCH_DATA_START,
	FETCH_DATA_SUCCES,
	FETCH_DATA_ERROR,
	LOGIN_START,
	LOGIN_SUCCESS,
	LOGIN_ERROR,
} from '../actions';

const intialState = {
	isFetchingData: false,
	isFetchingUser: false,
	plants: [],
	user_id: '',
	error: ''
};

const appReducer = (state = intialState, action) => {
	switch (action.type) {
		case FETCH_DATA_START:
			return {
				...state,
				isFetchingData: true
			};

		case FETCH_DATA_SUCCES:
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
			return {
				...state,
				isFetchingUser: false,
				error: '',
				user_id: action.payload
			};

		case LOGIN_ERROR:
			return {
				...state,
				isFethingUser: false
			};
		

		default: {
			return state;
		}
	}
};

export default appReducer;
