import axios from 'axios';
import vars from '../../vars';

const apiUrl = vars.apiUrl;
export default async function addHobby(token, name, status) {
  try {
    const response = await axios.post(`${apiUrl}/hobbies`, {
      token,
      name,
      status,
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
}
