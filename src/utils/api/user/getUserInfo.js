import axios from 'axios';
import vars from '../../vars';

const getUserInfo = async vkId => {
  try {
    const response = await axios.get(`${vars.apiUrl}/user/${vkId}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export default getUserInfo;
