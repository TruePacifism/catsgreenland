import axios from 'axios';
import vars from '../../vars';

const apiUrl = vars.apiUrl;
export default async function getFullColorInfo(name) {
  try {
    const response = await axios.get(`${apiUrl}/colors/${name}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}
