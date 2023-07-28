import React from 'react';
import styles from './Header.module.css';
import { ReactComponent as Icon } from '../../images/cat-logo.svg';
import VkAuth from 'components/VkAuth/VkAuth';
import { ReactComponent as BurgerIcon } from '../../images/burger-menu.svg';
import NavMenu from 'components/NavMenu/NavMenu';
import { useMediaQuery } from 'react-responsive';
import { CSSTransition } from 'react-transition-group';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import actions from 'redux/user-actions';

export default function Header() {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const dispatch = useDispatch();
  const setIsBurgerOpen = isOpen => {
    dispatch(actions.setOpenBurger(isOpen));
  };
  const isBurgerOpen = useSelector(store => store.isBurgerOpen);

  const openBurger = () => {
    setIsBurgerOpen(true);
  };
  const closeBurger = () => {
    setIsBurgerOpen(false);
  };
  return (
    <div className={styles.section}>
      <div className={styles.container}>
        <Link to={'/'}>
          <Icon className={styles.icon} />
        </Link>
        {!isMobile && (
          <>
            <NavMenu closeMenu={closeBurger} />
            <VkAuth onModalOpen={closeBurger} />
          </>
        )}
        {isMobile && (
          <BurgerIcon onClick={openBurger} className={styles.burgerIcon} />
        )}
        <CSSTransition
          in={isBurgerOpen}
          classNames={{
            enter: styles['slide-enter'],
            enterActive: styles['slide-enter-active'],
            enterDone: styles['slide-enter-done'],
            exitDone: styles['slide-exit-done'],
            exitActive: styles['slide-exit-active'],
          }}
          timeout={300}
        >
          <div className={styles.burgerMenu}>
            <VkAuth onModalOpen={closeBurger} />
            <NavMenu closeMenu={closeBurger} />
          </div>
        </CSSTransition>
        <CSSTransition
          in={isBurgerOpen}
          classNames={{
            enter: styles['opacity-enter'],
            enterActive: styles['opacity-enter-active'],
            enterDone: styles['opacity-enter-done'],
            exitDone: styles['opacity-exit-done'],
            exitActive: styles['opacity-exit-active'],
          }}
          timeout={300}
        >
          <div className={styles.burgerOverlay} onClick={closeBurger}></div>
        </CSSTransition>
      </div>
    </div>
  );
}
