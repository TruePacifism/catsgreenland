import { useEffect, useState } from 'react';
import styles from './AdminList.module.css';
import AdminListItem from 'components/AdminListItem/AdminListItem';
import Container from 'components/Container/Container';
import Section from 'components/Section/Section';
import getUserInfo from 'utils/api/user/getUserInfo';
import LoadingSpinner from 'components/LoadingSpinner/LoadingSpinner';

export default function AdminList() {
  const [admins, setAdmins] = useState([
    {
      vkId: 373718115,
      description: 'Создатель беседы. Всё благодаря её усилиям',
    },
    {
      vkId: 301865955,
      description: 'Правая рука, создатель сайта, участие в отборе',
    },
    {
      vkId: 178433478,
      description: 'Главная советчица в важных решениях, главный олд',
    },
    {
      vkId: 48806562,
      description: 'Важный советчик в главных решениях',
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
    if (!admins[0].pfp) {
      const setUsersInfo = async adminsIds => {
        const users = await getUserInfo(adminsIds);
        setAdmins(users);
      };
      setUsersInfo(admins.map(adminInfo => adminInfo.vkId));
    }
  }, [admins]);
  return (
    <Section>
      <Container heading={'Значимые люди'}>
        <ul className={styles.list}>
          {admins[0].pfp ? (
            admins.map((admin, idx) => (
              <AdminListItem key={idx} admin={admin} />
            ))
          ) : (
            <LoadingSpinner />
          )}
        </ul>
      </Container>
    </Section>
  );
}
