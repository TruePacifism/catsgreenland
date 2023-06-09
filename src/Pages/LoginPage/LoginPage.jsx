import VK, { Auth } from 'react-vk';
import { useDispatch } from 'react-redux';
import { auth } from 'redux/store';
import styles from './LoginPage.module.css';
import checkOnGroupMember from 'utils/checkOnGroupMember';

export default function LoginPage() {
  const dispatch = useDispatch();
  return (
    <div>
      <h1>
        Для доступа к сайту нужно авторизироваться через Вконтакте по виджету
        ниже
      </h1>
      <div className={styles.widgetContainer}>
        <VK apiId={51666098}>
          <Auth
            options={{
              onAuth: async user => {
                console.log(user);
                const groupMembers = await checkOnGroupMember();
                console.log(groupMembers);
                if (groupMembers.items.includes(user.uid)) {
                  console.log('проверка пройдена');
                }
                dispatch(auth(user));
              },
            }}
          />
        </VK>
      </div>
    </div>
  );
}
