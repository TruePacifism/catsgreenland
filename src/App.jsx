import Biographys from 'Pages/Biograhpys/Biographys';
import MainPage from 'Pages/MainPage/MainPage';
import Footer from 'components/Footer/Footer';
import Header from 'components/Header/Header';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import actions from 'redux/user-actions';
import Hobbies from 'Pages/Hobbies/Hobbies';
import getUsers from 'utils/getUser';
import { useSwipeable } from 'react-swipeable';
import LoginPage from 'Pages/LoginPage/LoginPage';
import getGroupMembers from 'utils/checkOnGroupMember';
import { auth } from 'redux/store';

export const App = () => {
  const bios = useSelector(store => store.bios);
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
    if (currentUser === null) {
      navigate('/login');
      return;
    }
    const checkUser = async () => {
      const groupMembers = await getGroupMembers();
      const isGroupMember = groupMembers.items
        .map(user => user.id)
        .includes(currentUser.uid);
      if (Object.keys(currentUser).length !== 0 && !isGroupMember) {
        dispatch(auth(null));
      }
    };
    checkUser();
  }, [currentUser, navigate, dispatch]);

  useEffect(() => {
    if (!bios[0].pfp || !bios[0].pfp.startsWith('http')) {
      const updateUsers = async () => {
        const users = await getUsers(bios.map(bios => bios.vkId));
        dispatch(
          actions.updateUsers(
            users.map(user => {
              return {
                name: user.first_name + ' ' + user.last_name,
                pfp: user.photo_max,
              };
            })
          )
        );
      };
      updateUsers();
    }
  }, [bios, dispatch]);
  return (
    <div {...handlers} className={isDarkThemed ? 'dark--theme' : ''}>
      {currentUser && <Header />}
      <Routes>
        <Route exact path="/" Component={MainPage} />
        <Route path="/biographys/*" Component={Biographys} />
        <Route path="/hobbies" Component={Hobbies} />
        <Route path="/login" Component={LoginPage} />
      </Routes>
      <Footer />
    </div>
  );
};
