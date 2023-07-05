import axios from 'axios';
import vars from '../../vars';

const apiUrl = vars.apiUrl;
export default async function addGame(token, game, status, rating) {
  try {
    const response = await axios.post(`${apiUrl}/games`, {
      token,
      game,
      status,
      rating,
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
}
