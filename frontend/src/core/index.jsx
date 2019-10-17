import axios from 'axios'

export const api = axios.create({
	baseURL: process.env.REACT_APP_API_HOST + 'api/',
	headers: {
		Accept: 'application/json',
		Authorization: `Bearer ${localStorage.getItem('_token')}`,
	},
})
