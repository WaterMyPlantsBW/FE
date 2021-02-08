import axios from 'axios';

const axiosWithAuth = () => {
	const token = localStorage.getItem('token');

	return axios.create({
		baseURL: 'https://water-my-plants-team-no132.herokuapp.com',
		headers: { Authorization: token, res: res.setHeader('Access-Control-Allow-Origin', '*') }
	});
};

export default axiosWithAuth;
