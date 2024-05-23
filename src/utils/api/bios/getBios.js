import axios from 'axios';
import vars from '../../vars';

const apiUrl = vars.apiUrl;
export default async function getBios() {
  try {
    const response = await axios.get(`${apiUrl}/bios`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}
