import styles from './VkAuth.module.css';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { auth } from 'redux/store';
import placeholder from '../../images/image-placeholder.png';
import getPfp from 'utils/api/user/getPfp';
import { Link } from 'react-router-dom';
import ThemeToggle from 'components/ThemeToggle/ThemeToggle';
import loginUser from 'utils/api/auth/loginUser';

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
      <Link to={'/cabinet'} className={styles.authButton}>
        <img className={styles.authPhoto} src={loggedUser.pfp} alt="" />
      </Link>
    </div>
  );
}
