import styles from './VkAuth.module.css';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { auth } from 'redux/store';
import { Link } from 'react-router-dom';
import ThemeToggle from 'components/ThemeToggle/ThemeToggle';
import loginUser from 'utils/api/auth/loginUser';
import placeholderPfp from '../../images/image-placeholder.png';

export default function VkAuth() {
  const dispatch = useDispatch();
  const loggedUser = useSelector(store => store.currentUser);
  useEffect(() => {
    const fetchUser = async () => {
      const user = await loginUser(localStorage.getItem('loggedUser'));
      dispatch(auth(user));
    };
    fetchUser();
  }, [dispatch]);

  return (
    <div className={styles.container}>
      <ThemeToggle />
      <Link
        to={loggedUser.vkId ? '/cabinet' : '/login'}
        className={styles.authButton}
      >
        <img
          className={styles.authPhoto}
          src={loggedUser.pfp ? loggedUser.pfp : placeholderPfp}
          alt=""
        />
      </Link>
    </div>
  );
}
