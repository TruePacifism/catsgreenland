import Biographys from 'Pages/Biograhpys/Biographys';
import MainPage from 'Pages/MainPage/MainPage';
import Footer from 'components/Footer/Footer';
import Header from 'components/Header/Header';
import { Routes, Route } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import actions from 'redux/user-actions';
import placeholder from './images/image-placeholder.png';

export const App = () => {
  const bios = useSelector(store => store.bios);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!bios[0].pfp) {
      dispatch(
        actions.updateUsers(
          bios.map(bio => {
            return { ...bio, pfp: placeholder };
          })
        )
      );
    }
  }, [bios, dispatch]);
  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/" Component={MainPage} />
        <Route path="/biographys/*" Component={Biographys} />
      </Routes>
      <Footer />
    </>
  );
};
