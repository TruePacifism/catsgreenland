import axios from 'axios';
import vars from '../../vars';

const apiUrl = vars.apiUrl;
export default async function getFullGameInfo(title) {
  try {
    const response = await axios.get(`${apiUrl}/games/${title}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}
