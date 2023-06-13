import VK, { Auth } from 'react-vk';
import { useDispatch } from 'react-redux';
import { auth } from 'redux/store';
import styles from './LoginPage.module.css';
import getGroupMembers from 'utils/checkOnGroupMember';
import Section from 'components/Section/Section';
import Container from 'components/Container/Container';
import { useNavigate } from 'react-router-dom';

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
                    console.log(user);
                    const groupMembers = await getGroupMembers();
                    console.log(groupMembers);
                    if (groupMembers.items.includes(user.uid)) {
                      console.log('проверка пройдена');
                      dispatch(auth(user));
                      navigate('/');
                    }
                  },
                }}
              />
            </VK>
          </div>
        </div>
      </Container>
    </Section>
  );
}
