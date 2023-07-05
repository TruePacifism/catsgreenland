import axios from 'axios';
import vars from '../../vars';

const apiUrl = vars.apiUrl;
export default async function getGroupMembers() {
  try {
    const response = await axios.get(`${apiUrl}/groupMembers`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}
