import { FETCH_DATA_START, FETCH_DATA_SUCCES, FETCH_DATA_ERROR, USER_ID } from '../actions';

const intialState = {
	id: 0,
	nickname: '',
	species: '',
	H2OFrequency: '',
	image: '',
	plants: [],
	user_id: '',
	water: ''
};

const appReducer = (state = intialState, action) => {
	switch (action.type) {
		case FETCH_DATA_START: {
			return {
				...state
			};
		}
		case FETCH_DATA_SUCCES: {
			return state;
		}
		case FETCH_DATA_ERROR: {
			return state;
		}
		default: {
			return state;
		}
	}
};

export default appReducer;
