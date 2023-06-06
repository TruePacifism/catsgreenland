import Biographys from 'Pages/Biograhpys/Biographys';
import MainPage from 'Pages/MainPage/MainPage';
import Footer from 'components/Footer/Footer';
import Header from 'components/Header/Header';
import { Routes, Route } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import actions from 'redux/user-actions';
import Hobbies from 'Pages/Hobbies/Hobbies';
import getUsers from 'utils/getUser';

export const App = () => {
  const bios = useSelector(store => store.bios);
  const dispatch = useDispatch();
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
    <>
      <Header />
      <Routes>
        <Route exact path="/" Component={MainPage} />
        <Route path="/biographys/*" Component={Biographys} />
        <Route path="/hobbies" Component={Hobbies} />
      </Routes>
      <Footer />
    </>
  );
};
