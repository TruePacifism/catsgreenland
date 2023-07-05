import axios from 'axios';
import vars from '../../vars';

const apiUrl = vars.apiUrl;
export default async function getStats() {
  try {
    const response = await axios.get(`${apiUrl}/stats`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}
