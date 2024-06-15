import axios from 'axios';

const baseURL = `${import.meta.env.REACT_APP_BASE_URL}/api`
//const baseURL = `http://localhost:3001/api`

export default axios.create({
	baseURL,
	headers: {
		ContentType: 'application/json',
	},
});
