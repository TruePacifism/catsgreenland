import Biographys from 'Pages/Biograhpys/Biographys';
import MainPage from 'Pages/MainPage/MainPage';
import Footer from 'components/Footer/Footer';
import Header from 'components/Header/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from 'redux/store';

export const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter basename="/catsgreenland">
        <Header />
        <Routes>
          <Route exact path="/" Component={MainPage} />
          <Route path="/biographys" Component={Biographys} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </Provider>
  );
};
