import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { auth } from 'redux/store';
import styles from './LoginPage.module.css';
import Section from 'components/Section/Section';
import Container from 'components/Container/Container';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Config, Connect } from '@vkontakte/superappkit';
import getGroupMembers from 'utils/api/auth/checkOnGroupMember';
import createUser from 'utils/api/auth/createUser';
import loginUser from 'utils/api/auth/loginUser';

export default function LoginPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const searchParams = useSearchParams();
  const loggedUser = localStorage.getItem('loggedUser');

  const logButtonHandler = () => {
    if (!loggedUser || loggedUser === 'undefined') {
      Config.init({
        appId: 51666098,
      });
      Connect.redirectAuth({
        url: 'https://truepacifism.github.io/catsgreenland/login',
      });
      return;
    }
  };

  useEffect(() => {
    const fetchUser = async () => {
      console.log(searchParams[0].get('payload'));
      const payload = JSON.parse(searchParams[0].get('payload'));
      if (payload) {
        const userId = payload.user.id;
        const hash = payload.hash;

        const groupMembers = await getGroupMembers();
        console.log(groupMembers);
        console.log(groupMembers.items.map(user => user.id));
        console.log(userId);
        console.log(groupMembers.items.map(user => user.id).includes(userId));
        if (groupMembers.items.map(user => user.id).includes(userId)) {
          const checkUser = await loginUser(userId);
          if (!checkUser || checkUser.code === 401) {
            const loggedUser = await createUser(hash, userId);
            console.log(loggedUser);
            dispatch(auth(loggedUser));
          } else {
            console.log(checkUser);
            dispatch(auth(checkUser));
          }
          navigate('/');
        }

        return;
      }
    };
    fetchUser();
  }, [searchParams, dispatch, navigate]);
  return (
    <Section>
      <Container
        heading={'Для доступа к сайту нужно авторизироваться через Вконтакте'}
      >
        <div>
          <p className={styles.notice}>
            Если после авторизации вы все равно не получили доступ к сайту -
            напишите{' '}
            <a
              target="_blank"
              rel="noreferrer"
              className={styles.link}
              href="https://vk.com/truepacifism"
            >
              мне
            </a>
          </p>
        </div>
        <button
          className={styles.button}
          onClick={logButtonHandler}
          type="button"
        >
          Войти через VK ID
        </button>
      </Container>
    </Section>
  );
}
