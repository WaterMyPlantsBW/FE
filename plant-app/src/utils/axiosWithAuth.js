import axios from 'axios';

export const axiosWithAuth = () => {
	const token = localStorage.getItem('token');

	axios.create({
		baseURL: 'https://water-my-plants-team-no132.herokuapp.com/',
		headers: { Authorization: token }
	});
};
