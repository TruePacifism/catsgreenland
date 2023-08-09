import { useEffect, useState } from 'react';
import styles from './SponsorsList.module.css';
import Container from 'components/Container/Container';
import Section from 'components/Section/Section';
import getUserInfo from 'utils/api/user/getUserInfo';
import LoadingSpinner from 'components/LoadingSpinner/LoadingSpinner';
import SponsorsListItem from 'components/SponsorsListItem/SponsorsListItem';

export default function SponsorsList() {
  const [sponsors, setSponsors] = useState([
    {
      vkId: 178433478,
    },
    {
      vkId: 601128888,
    },
    {
      vkId: 591214241,
    },
    {
      vkId: 48806562,
    },
    {
      vkId: 644064237,
    },
  ]);

  useEffect(() => {
    if (!sponsors[0].pfp) {
      const setUsersInfo = async adminsIds => {
        const users = await getUserInfo(adminsIds);
        setSponsors(users);
      };
      setUsersInfo(sponsors.map(adminInfo => adminInfo.vkId));
    }
  }, [sponsors]);
  return (
    <Section>
      <Container heading={'Спонсоры чата'}>
        <ul className={styles.list}>
          {sponsors[0].pfp ? (
            sponsors.map((sponsor, idx) => (
              <SponsorsListItem key={idx} sponsor={sponsor} />
            ))
          ) : (
            <LoadingSpinner />
          )}
        </ul>
      </Container>
    </Section>
  );
}
