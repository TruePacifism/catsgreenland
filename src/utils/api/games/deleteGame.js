import axios from 'axios';
import vars from '../../vars';

const apiUrl = vars.apiUrl;
export default async function deleteGame(token, title) {
  try {
    const response = await axios.delete(`${apiUrl}/games`, {
      data: {
        token,
        title,
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
}
