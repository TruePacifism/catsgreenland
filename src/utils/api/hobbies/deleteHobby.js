import axios from 'axios';
import vars from '../../vars';

const apiUrl = vars.apiUrl;
export default async function deleteHobby(token, name) {
  try {
    const response = await axios.delete(`${apiUrl}/hobbies`, {
      data: { token, name },
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
}
