import axios from 'axios';
import vars from '../../vars';

const apiUrl = vars.apiUrl;
export default async function addColor(token, color) {
  try {
    const response = await axios.post(`${apiUrl}/colors`, { token, color });
    return response.data;
  } catch (error) {
    console.log(error);
  }
}
