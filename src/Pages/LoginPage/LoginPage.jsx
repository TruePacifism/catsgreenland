import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { auth } from 'redux/store';
import styles from './LoginPage.module.css';
import getGroupMembers from 'utils/api/auth/checkOnGroupMember';
import Section from 'components/Section/Section';
import Container from 'components/Container/Container';
import { useNavigate } from 'react-router-dom';
import createUser from 'utils/api/auth/createUser';
import loginUser from 'utils/api/auth/loginUser';
import { Connect } from '@vkontakte/superappkit';

export default function LoginPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // eslint-disable-next-line
  const [authButton, setAuthButton] = useState(
    Connect.buttonOneTapAuth({
      callback: async e => {
        const user = e.payload.uuid;
        console.log(e.payload);
        const groupMembers = await getGroupMembers();
        console.log(groupMembers);
        console.log(groupMembers.items.map(user => user.id));
        console.log(user.id);
        console.log(groupMembers.items.map(user => user.id).includes(user.id));
        if (groupMembers.items.map(user => user.id).includes(user.id)) {
          const checkUser = await loginUser(user.id);
          if (!checkUser || checkUser.code === 401) {
            const loggedUser = await createUser(user.id, user.id);
            console.log(loggedUser);
            dispatch(auth(loggedUser));
          } else {
            console.log(checkUser);
            dispatch(auth(checkUser));
          }
          navigate('/');
        }
      },
    })
  );
  useEffect(() => {
    const fetchButton = async () => {
      console.log('authButton:', authButton);
      console.dir(authButton.getFrame());
    };
    fetchButton();
  }, [authButton]);

  // useEffect(() => {
  //   const init = async () => {
  //     try {
  //       await Connect.init({
  //         apiVersion: '5.131',
  //         appId: 51666098,
  //       });
  //       const user = await VKConnect.sendPromise('VKWebAppGetUserInfo');
  //       const groupMembers = await getGroupMembers();
  //       console.log(groupMembers);
  //       console.log(groupMembers.items.map(user => user.id));
  //       console.log(user.id);
  //       console.log(groupMembers.items.map(user => user.id).includes(user.id));
  //       if (groupMembers.items.map(user => user.id).includes(user.id)) {
  //         const checkUser = await loginUser(user.id);
  //         if (!checkUser || checkUser.code === 401) {
  //           const loggedUser = await createUser(user.id, user.id);
  //           console.log(loggedUser);
  //           dispatch(auth(loggedUser));
  //         } else {
  //           console.log(checkUser);
  //           dispatch(auth(checkUser));
  //         }
  //         navigate('/');
  //       }
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };
  //   init();
  // }, [dispatch, navigate]);

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
        <div
          dangerouslySetInnerHTML={{ __html: authButton.getFrame().outerHTML }}
        ></div>
      </Container>
    </Section>
  );
}
