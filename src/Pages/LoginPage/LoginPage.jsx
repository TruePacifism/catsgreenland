import VK, { Auth } from 'react-vk';
import { useDispatch } from 'react-redux';
import { auth } from 'redux/store';
import styles from './LoginPage.module.css';
import getGroupMembers from 'utils/api/auth/checkOnGroupMember';
import Section from 'components/Section/Section';
import Container from 'components/Container/Container';
import { useNavigate } from 'react-router-dom';
import createUser from 'utils/api/auth/createUser';
import loginUser from 'utils/api/auth/loginUser';

export default function LoginPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <Section>
      <Container
        heading={
          'Для доступа к сайту нужно авторизироваться через Вконтакте по виджету ниже'
        }
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
          <div className={styles.widgetContainer}>
            <VK apiId={51666098}>
              <Auth
                options={{
                  onAuth: async user => {
                    const groupMembers = await getGroupMembers();
                    console.log(groupMembers);
                    console.log(groupMembers.items.map(user => user.id));
                    console.log(user.uid);
                    console.log(
                      groupMembers.items.map(user => user.id).includes(user.uid)
                    );
                    if (
                      groupMembers.items.map(user => user.id).includes(user.uid)
                    ) {
                      const checkUser = await loginUser(user.hash);
                      if (!checkUser) {
                        const loggedUser = await createUser(
                          user.hash,
                          user.uid
                        );
                        console.log(loggedUser);
                        dispatch(auth(loggedUser));
                      } else {
                        console.log(checkUser);
                        dispatch(auth(checkUser));
                      }
                      navigate('/');
                    }
                  },
                }}
              />
            </VK>
          </div>
          {/* <button
            type="button"
            onClick={async () => {
              const user = {
                hash: `testhash`,
                uid: 301865955,
              };
              const checkUser = await loginUser(
                user.hash.includes('/') ? 'error' : user.hash
              );
              if (!checkUser) {
                const loggedUser = await createUser(user.hash, user.uid);
                console.log(loggedUser);
                dispatch(auth(loggedUser));
              } else {
                console.log(checkUser);
                dispatch(auth(checkUser));
              }
              navigate('/');
            }}
          >
            test auth
          </button> */}
        </div>
      </Container>
    </Section>
  );
}
