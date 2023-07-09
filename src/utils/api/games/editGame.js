import axios from 'axios';
import vars from '../../vars';

const apiUrl = vars.apiUrl;
export default async function editGame(token, game, status, rating) {
  try {
    const response = await axios.patch(`${apiUrl}/games`, {
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
