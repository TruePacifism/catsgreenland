import axios from 'axios';
import vars from '../../vars';

const apiUrl = vars.apiUrl;
export default async function getFullBio(vkId) {
  try {
    const response = await axios.get(`${apiUrl}/bios/${vkId}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}
