import axios from 'axios';
import vars from '../../vars';

const apiUrl = vars.apiUrl;
export default async function editHobby(token, name, status) {
  try {
    const response = await axios.patch(`${apiUrl}/hobbies`, {
      token,
      name,
      status,
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
}
