import jsonpAdapter from 'axios-jsonp';
import axios from 'axios';

const vkToken =
  'vk1.a.uFf9O-72X1q1UftVKqiN1RXiWkRyk7grt8p8E55pBz5IhsuUE13lVDB8x7kTQnU9ZWwmP9oWXXhAeXeADGGiZCZgJl6JRW_iFp7xjuhuZzYXwDayu3n1X_bqrf-8v5iXtygP72XrkG8u4lCsefiIV8FEez9iDfVrrZ0LqckohrQ7JnbE8vJJT8DYz-z3n5QL42wRLgoVbvmmtt6Eer_mnQ';
export default async function getUsers(ids) {
  if (!ids) {
    return;
  }
  try {
    const response = await axios.get('https://api.vk.com/method/users.get', {
      adapter: jsonpAdapter,
      params: {
        user_ids: ids,
        fields: 'photo_max',
        access_token: vkToken,
        v: '5.131',
      },
      callbackParamName: 'callback',
    });
    return response.data.response;
  } catch (error) {
    console.log(error);
  }
}
