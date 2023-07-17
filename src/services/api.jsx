import axios from "axios";

axios.defaults.baseURL = 'https://64b4ffe1f3dbab5a95c67747.mockapi.io';

export const addMaterial = async (values) => {
    const response = await axios.post('/materials', values);
    return response.data;
}