import axios from 'axios';
import vars from '../../vars';

const apiUrl = vars.apiUrl;
export default async function updateBio(token, newBio) {
  try {
    const response = await axios.patch(`${apiUrl}/bios/${token}`, newBio);
    console.log('newBio', newBio);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}
