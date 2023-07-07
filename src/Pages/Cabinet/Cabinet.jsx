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
import ColorAddForm from 'components/AddingForms/ColorForm/ColorAddForm';
import HobbyAddForm from 'components/AddingForms/HobbyForm/HobbyAddForm';
import GameAddForm from 'components/AddingForms/GameForm/GameAddForm';
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
  const [updateMarker, setUpdateMarker] = useState(true);
  const updateInfo = async () => {
    setUpdateMarker(!updateMarker);
  };
  useEffect(() => {
    if (user.vkId) {
      const fetchData = async () => {
        const data = await getCabinetData(user.vkId);
        setProfileData(data);
      };
      fetchData();
    }
  }, [user, updateMarker]);
  return (
    <>
      <Section>
        <Container heading={'Личный кабинет'}>
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
