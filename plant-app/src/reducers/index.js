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
} from '../actions';

const intialState = {
	isFetchingData: false,
	isFetchingUser: false,
	plants: [],
	user_id: JSON.parse(localStorage.getItem('userID')),
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
				//user_id: action.payload
			};

		case LOGIN_ERROR:
			return {
				...state,
				isFetchingUser: false
			};
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
			}
		case PLANT_REG_ERROR:
			return {
				...state,
				isFetchingData:false
			}
		case DELETE_START:
			return {
				...state,
				isFetchingData:true
			}
		case DELETE_SUCCESS:
			return {
				...state,
				isFetchingData:false,
				plants: state.plants.filter(plant => plant.id)
			}
		case DELETE_ERROR:
				return {
					...state,
					isFetchingData:false
				}
		default: {
			return state;
		}
	}
};

export default appReducer;
