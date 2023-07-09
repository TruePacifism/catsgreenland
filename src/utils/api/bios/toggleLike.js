import axios from 'axios';
import vars from '../../vars';

const apiUrl = vars.apiUrl;
export default async function toggleLike(token, vkId) {
  try {
    const response = await axios.patch(`${apiUrl}/bios/like`, { token, vkId });
    return response.data;
  } catch (error) {
    console.log(error);
  }
}
