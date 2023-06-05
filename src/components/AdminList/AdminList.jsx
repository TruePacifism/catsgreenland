import { useEffect, useState } from 'react';
import styles from './AdminList.module.css';
import AdminListItem from 'components/AdminListItem/AdminListItem';
import getUsers from 'utils/getUser';
import Container from 'components/Container/Container';
import Section from 'components/Section/Section';

export default function AdminList() {
  const [admins, setAdmins] = useState([
    {
      vkId: 373718115,
      description: 'Создатель беседы',
    },
    {
      vkId: 301865955,
      description: 'Правая рука, создатель сайта',
    },
    {
      vkId: 178433478,
      description: 'Главная советчица в важных решениях',
    },
    {
      vkId: 591214241,
      description: 'Главный мемодел, забавные скрины переписки',
    },
    {
      vkId: 769263531,
      description: 'Следит за чатом, превносит хорошее настроение',
    },
  ]);

  useEffect(() => {
    console.log('useEffected');
    if (!admins.some(admin => admin.name && admin.pfp)) {
      const setUsersInfo = async adminsIds => {
        const users = await getUsers(adminsIds);
        setAdmins(
          users.map((user, idx) => ({
            ...admins[idx],
            name: user.first_name + ' ' + user.last_name,
            pfp: user.photo_max,
          }))
        );
      };
      setUsersInfo(admins.map(adminInfo => adminInfo.vkId));
    }
  }, [admins]);
  return (
    <Section>
      <Container heading={'Значимые люди'}>
        <ul className={styles.list}>
          {admins &&
            admins.map((admin, idx) => (
              <AdminListItem key={idx} admin={admin} />
            ))}
        </ul>
      </Container>
    </Section>
  );
}
