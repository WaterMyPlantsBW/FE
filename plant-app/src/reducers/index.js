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
		case 'fetch_plants': {
			return {
				...state
			};
		}
		case '': {
			return state;
		}
		default: {
			return state;
		}
	}
};

export default appReducer;
