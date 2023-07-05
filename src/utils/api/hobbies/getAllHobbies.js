import axios from 'axios';
import vars from '../../vars';

const apiUrl = vars.apiUrl;
export default async function getAllHobbies() {
  try {
    const response = await axios.get(`${apiUrl}/hobbies`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}
