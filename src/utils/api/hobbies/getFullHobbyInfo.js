import axios from 'axios';
import vars from '../../vars';

const apiUrl = vars.apiUrl;
export default async function getFullHobbyInfo(name) {
  try {
    const response = await axios.get(`${apiUrl}/hobbies/${name}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}
