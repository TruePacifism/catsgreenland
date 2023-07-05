import axios from 'axios';
import vars from '../../vars';

const { apiUrl } = vars;
export default async function getCabinetData(vkId) {
  try {
    const response = await axios.get(`${apiUrl}/cabinet/${vkId}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}
