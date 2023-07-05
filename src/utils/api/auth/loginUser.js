import axios from 'axios';
import vars from '../../vars';

const apiUrl = vars.apiUrl;
export default async function loginUser(token) {
  try {
    const response = await axios.get(`${apiUrl}/login/${token}`);
    return response.data;
  } catch (error) {
    localStorage.removeItem('loggedUser');
    console.log(error);
    return null;
  }
}
