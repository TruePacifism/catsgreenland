import jsonpAdapter from 'axios-jsonp';
import axios from 'axios';
import placeholder from '../images/image-placeholder.png';

const vkToken =
  'vk1.a.KApbhgVtf9XmrO1auTa2gwdCXkaQX6tELizt4wm2Gxh6prqcqaNUnP-nHxQcerPiulaFi8bnveAesTBl7I9_5L6nrhWYQUjl06AWWGxvJx6mjAZFKrAyHAaR10eWMHJkl8PRY2ZDgEGJPOOF8cdElvI4ykxgo8MpSHQsMaOdYySkD_GPJbueK6HKf95-hMY7USTdYLdZqfo32jF7K8MrBg';

export default function getPfp(id, setter) {
  if (!id) {
    setter(placeholder);
    return;
  }
  axios
    .get('https://api.vk.com/method/users.get', {
      adapter: jsonpAdapter,
      params: {
        user_ids: id,
        fields: 'photo_max',
        access_token: vkToken,
        v: '5.131',
      },
      callbackParamName: 'callback',
    })
    .then(response => {
      setter(response.data.response[0].photo_max);
    })
    .catch(error => {
      console.log(error);
    });
}
