import Biographys from 'Pages/Biograhpys/Biographys';
import MainPage from 'Pages/MainPage/MainPage';
import Footer from 'components/Footer/Footer';
import Header from 'components/Header/Header';
import { Routes, Route, useNavigate } from 'react-router-dom';
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
      const user = await loginUser(currentUser.token);
      if (user.error) {
        navigate('/login');
        dispatch(auth(null));
      }
      if (user.vkId) {
        const fullUser = await getUserInfo(user.vkId);
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
    console.log('currentUser', currentUser);
    if (!currentUser) {
      navigate('/login', { replace: true });
    }
  }, [useNavigate, currentUser]);
  return (
    <div {...handlers} className={isDarkThemed ? 'dark--theme' : ''}>
      {localStorage.getItem('loggedUser') && <Header />}
      <Routes>
        <Route exact path="/" Component={MainPage} />
        <Route path="/biographys/*" Component={Biographys} />
        <Route path="/hobbies" Component={Hobbies} />
        <Route path="/login" Component={LoginPage} />
        <Route path="/cabinet" Component={Cabinet} />
      </Routes>
      <Footer />
    </div>
  );
};
