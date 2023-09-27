import Biographys from 'Pages/Biograhpys/Biographys';
import MainPage from 'Pages/MainPage/MainPage';
import Header from 'components/Header/Header';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import actions from 'redux/user-actions';
import Hobbies from 'Pages/Hobbies/Hobbies';
import { useSwipeable } from 'react-swipeable';
import LoginPage from 'Pages/LoginPage/LoginPage';
import { auth } from 'redux/store';
import Cabinet from 'Pages/Cabinet/Cabinet';
import loginUser from 'utils/api/auth/loginUser';
import getUserInfo from 'utils/api/user/getUserInfo';
import Player, { PlayerInterface, Track } from 'react-material-music-player';
import musicPlaceholder from './images/music-placeholder.jpg';

import { ThemeProvider, createTheme } from '@mui/material/styles';
import { green } from '@mui/material/colors';
import DevAccess from 'Pages/DevAccess/DevAccess';

const darkTheme = createTheme({
  palette: {
    primary: {
      main: green[500],
    },
    secondary: {
      main: green[500],
    },
    background: {
      paper: '#0A1929',
    },
    action: {
      active: green[500],
      hover: 'rgba(255, 255, 255, 0.08)',
      hoverOpacity: 0.08,
      selected: 'rgba(255, 255, 255, 0.16)',
      selectedOpacity: 0.16,
    },
    text: {
      disabled: 'rgba(255, 255, 255, 0.5)',
      icon: 'rgba(255, 255, 255, 0.5)',
      primary: '#fff',
      secondary: '#AAB4BE',
    },
  },
});

const lightTheme = createTheme({
  palette: {
    primary: {
      main: green[500],
    },
    secondary: {
      main: green[500],
    },
    background: {
      paper: '#4c6839',
    },
    action: {
      active: green[500],
      hover: 'rgba(0, 0, 0, 0.04)',
      hoverOpacity: 0.04,
      selected: 'rgba(0, 0, 0, 0.08)',
      selectedOpacity: 0.08,
    },
    text: {
      disabled: 'rgba(0, 0, 0, 0.38)',
      icon: 'rgba(0, 0, 0, 0.54)',
      primary: 'rgba(0, 0, 0, 0.87)',
      secondary: 'rgba(0, 0, 0, 0.54)',
    },
  },
});

export const App = () => {
  const dispatch = useDispatch();
  const isDarkThemed = useSelector(store => store.isDarkTheme);
  useEffect(() => {
    const htmlRef = document.querySelector('html');
    if (isDarkThemed) {
      htmlRef.classList.add('dark--theme');
    } else {
      htmlRef.classList.remove('dark--theme');
    }
  }, [isDarkThemed]);
  const handlers = useSwipeable({
    onSwipedLeft: eventData => {
      dispatch(actions.setOpenBurger(true));
    },
    onSwipedRight: eventData => {
      dispatch(actions.setOpenBurger(false));
    },
  });
  const currentUser = useSelector(store => store.currentUser);
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem('loggedUser') === 'undefined') {
      localStorage.removeItem('loggedUser');
      navigate('/login');
      return;
    }
    const checkUser = async () => {
      if (currentUser.token.includes('/')) {
        navigate('/login');
        dispatch(auth(null));
      }
      const user = await loginUser(currentUser.token);
      if (user.error) {
        navigate('/login');
        dispatch(auth(null));
      }
      if (user.vkId) {
        const [fullUser] = await getUserInfo(user.vkId);
        dispatch(
          auth({
            token: currentUser.token,
            ...fullUser,
          })
        );
      }
    };
    checkUser();
  }, [currentUser.token, dispatch, navigate]);
  useEffect(() => {
    if (!currentUser || !currentUser.token) {
      navigate('/login', { replace: true });
    }
  }, [navigate, currentUser]);
  const { pathname } = useLocation();

  // Automatically scrolls to top whenever pathname changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    PlayerInterface.play([new Track('', musicPlaceholder, '', '', '')]);
  }, []);
  return (
    <div {...handlers} className={isDarkThemed ? 'dark--theme' : ''}>
      {localStorage.getItem('loggedUser') && <Header />}
      <Routes>
        <Route exact path="/" Component={MainPage} />
        <Route path="/biographys/*" Component={Biographys} />
        <Route path="/hobbies" Component={Hobbies} />
        <Route path="/login" Component={LoginPage} />
        <Route path="/cabinet" Component={Cabinet} />
        <Route path="/dev" Component={DevAccess} />
      </Routes>
      <ThemeProvider theme={isDarkThemed ? darkTheme : lightTheme}>
        <Player />
      </ThemeProvider>
    </div>
  );
};
