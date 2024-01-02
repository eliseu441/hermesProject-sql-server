import axios from 'axios';

const baseURL = `${process.env.REACT_APP_BASE_URL}/api`

export default axios.create({
	baseURL,
	headers: {
		ContentType: 'application/json',
	},
});
