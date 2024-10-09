import axios from 'axios';
const API = 'http://localhost:1111';

const RegisUser = (data) => axios.post(`${API}/user/register`, data);
const LoginUser = (data) => axios.post(`${API}/user/login`, data);

// city details api

const getCities = () => axios.get(`${API}/cities/all`);
const getCity = (cityname) => axios.get(`${API}/cities/get/${cityname}`);

export { RegisUser, LoginUser };
export { getCities, getCity };