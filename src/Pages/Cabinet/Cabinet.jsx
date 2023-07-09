import { useEffect, useState } from 'react';
import Section from 'components/Section/Section';
import Container from 'components/Container/Container';
import getCabinetData from 'utils/api/user/getCabinetData';
import { useSelector } from 'react-redux';
import pfpPlaceholder from '../../images/image-placeholder.png';
import Biograhpy from 'components/Biography/Biography';
import HobbiesChart from 'components/HobbiesChart/HobbiesChart';
import ColorsChart from 'components/ColorsChart/ColorsChart';
import GamesTable from 'components/GamesTable/GamesTable';
import ColorAddForm from 'components/UserInfoEdit/AddingForms/ColorForm/ColorAddForm';
import HobbyAddForm from 'components/UserInfoEdit/AddingForms/HobbyForm/HobbyAddForm';
import GameAddForm from 'components/UserInfoEdit/AddingForms/GameForm/GameAddForm';

export default function Cabinet() {
  const user = useSelector(store => store.currentUser);
  const [profileData, setProfileData] = useState({
    pfp: user.pfp ? user.pfp : pfpPlaceholder,
    name: user.name ? user.name : 'Загрузка',
    games: [],
    hobbies: [],
    colors: [],
    bio: {},
  });
  const updateInfo = async () => {
    const data = await getCabinetData(user.vkId);
    setProfileData(data);
  };
  useEffect(() => {
    if (user.vkId) {
      const fetchInfo = async () => {
        const data = await getCabinetData(user.vkId);
        setProfileData(data);
      };
      fetchInfo();
    }
  }, [user]);
  return (
    <>
      <Section>
        <Container heading={'Личный кабинет'}>
          {/* <iframe
            src="//konstruktortestov.ru/test-42680?i=frame"
            frameborder="0"
            width={'100%'}
            height={'fit-content'}
          ></iframe> */}
          {profileData.bio.vkId && (
            <Biograhpy bio={profileData.bio}></Biograhpy>
          )}
          <GamesTable hideDescription editable games={profileData.games} />
          <GameAddForm onUpdate={updateInfo} />
          <HobbiesChart hideDescription hobbies={profileData.hobbies} />
          <HobbyAddForm onUpdate={updateInfo} />
          <ColorsChart hideDescription colors={profileData.colors} />
          <ColorAddForm onUpdate={updateInfo} />
        </Container>
      </Section>
    </>
  );
}
