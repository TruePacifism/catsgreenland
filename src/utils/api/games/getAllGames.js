import axios from 'axios';
import vars from '../../vars';

const apiUrl = vars.apiUrl;
export default async function getAllGames() {
  try {
    const response = await axios.get(`${apiUrl}/games`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}
