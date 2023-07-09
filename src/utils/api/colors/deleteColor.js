import axios from 'axios';
import vars from '../../vars';

const apiUrl = vars.apiUrl;
export default async function deleteColor(token, name) {
  try {
    console.log('inWebAPI', token, name);
    const response = await axios.delete(`${apiUrl}/colors`, {
      data: { token, name },
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
}
