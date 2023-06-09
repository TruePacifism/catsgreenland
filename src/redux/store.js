import { configureStore, createAction, createReducer } from '@reduxjs/toolkit';
import discordPfp from '../images/discord-pfp.jpg';
import botPfp from '../images/bot-pfp.jpg';
import telegramPfp from '../images/telegram-pfp.jpg';
import actions from './user-actions';

function importMusic() {
  const context = require.context('../music/', true, /\.mp3$/);
  const musicFiles = context.keys().reduce((files, filePath) => {
    const pathParts = filePath.split('/');
    const vkId = pathParts[1];
    const fileNameFull = pathParts[pathParts.length - 1];
    const fileName = fileNameFull.substring(0, fileNameFull.length - 4);
    const musicFile = context(filePath);
    const fileObject = {
      title: fileName.split(' - ')[1],
      artist: fileName.split(' - ')[0],
      path: filePath,
      music: musicFile,
    };
    if (!files[vkId]) {
      files[vkId] = [fileObject];
    } else {
      if (!filePath.startsWith('music')) {
        files[vkId].push(fileObject);
      }
    }
    return files;
  }, {});

  return musicFiles;
}

const musicFiles = importMusic();

let scrollPosition = 0;

const disableScroll = () => {
  // Сохраняем текущую позицию прокрутки
  scrollPosition = window.pageYOffset;

  // Добавляем стили для блокировки прокрутки
  document.body.style.overflow = 'hidden';
  // document.body.style.position = 'fixed';
  document.body.style.top = `-${scrollPosition}px`;
};

const enableScroll = () => {
  // Удаляем стили для блокировки прокрутки
  document.body.style.overflow = '';
  // document.body.style.position = '';
  document.body.style.top = '';
  // Возвращаем страницу на сохраненную позицию прокрутки
  window.scrollTo(0, scrollPosition);
};

const initialState = {
  currentUser: {
    token: localStorage.getItem('loggedUser'),
  },
  chats: [
    {
      name: 'Беседа ботов',
      link: 'https://vk.me/join/Ok_fO1yDQe9HhtMcKuSd7CQgxgIJ2DBpjqE=',
      image: botPfp,
      serviceName: 'ВК',
      text: 'Беседа ботов для игр и их дрюка без спама в основной беседе',
    },
    {
      name: 'Дискорд сервер',
      link: '',
      image: discordPfp,
      serviceName: 'Discord',
      text: 'Сервер для посиделок в войсе и совместных игр',
    },
    {
      name: 'Телеграм чат',
      link: 'https://t.me/+PCMV87p-lbJhYzgy',
      image: telegramPfp,
      serviceName: 'Телеграм',
      text: 'Чат для времен, когда вк нестабилен и вот-вот развалится на части',
    },
  ],
  bioMusic: musicFiles,
  isBurgerOpen: false,
  isDarkTheme: JSON.parse(localStorage.getItem('isDarkTheme')),
};
const authAction = createAction('AUTH');
const reducer = createReducer(initialState, builder => {
  builder
    .addCase(authAction, (state, action) => {
      localStorage.setItem('loggedUser', action.payload.token);
      return {
        ...state,
        currentUser: action.payload,
      };
    })
    .addCase(actions.updateUsers, (state, action) => {
      return {
        ...state,
        bios: state.bios.map((bio, idx) => {
          return {
            ...bio,
            ...action.payload[idx],
          };
        }),
      };
    })
    .addCase(actions.toggleTheme, state => {
      localStorage.setItem('isDarkTheme', !state.isDarkTheme);
      return {
        ...state,
        isDarkTheme: !state.isDarkTheme,
      };
    })
    .addCase(actions.setOpenBurger, (state, action) => {
      if (action.payload === true) {
        disableScroll();
      } else {
        enableScroll();
      }
      return {
        ...state,
        isBurgerOpen: action.payload,
      };
    });
});

const store = configureStore({
  reducer,
});

export default store;

export const auth = authAction;
