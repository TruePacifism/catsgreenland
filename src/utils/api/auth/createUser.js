import axios from 'axios';
import vars from '../../vars';

const apiUrl = vars.apiUrl;
export default async function createUser(token, vkId) {
  try {
    const response = await axios.post(`${apiUrl}/login`, { token, vkId });
    return response.data;
  } catch (error) {
    localStorage.setItem('loggedUser', null);
    console.log(error);
  }
}
