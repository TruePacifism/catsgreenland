import ColorsChart from 'components/ColorsChart/ColorsChart';
import GamesTable from 'components/GamesTable/GamesTable';
import { GenderChart } from 'components/GenderChart/GenderChart';
import HobbiesChart from 'components/HobbiesChart/HobbiesChart';
import { useEffect, useState } from 'react';
import getAllColors from 'utils/api/colors/getAllColors';
import getAllGames from 'utils/api/games/getAllGames';
import getAllHobbies from 'utils/api/hobbies/getAllHobbies';
import getStats from 'utils/api/stats/getStats';

export default function Hobbies() {
  const [hobbies, setHobbies] = useState();
  useEffect(() => {
    const initHobbies = async () => {
      const allHobbies = await getAllHobbies();
      setHobbies(allHobbies);
    };
    initHobbies();
  }, []);

  const [colors, setColors] = useState();
  useEffect(() => {
    const fetchColors = async () => {
      const colorsWithUsers = await getAllColors();
      setColors(colorsWithUsers);
    };
    fetchColors();
  }, []);
  const [games, setGames] = useState();
  useEffect(() => {
    const initData = async () => {
      const gamesWithUsers = await getAllGames();
      setGames(gamesWithUsers);
    };
    initData();
  }, []);
  const [genderStats, setGenderStats] = useState();
  useEffect(() => {
    const fetchGenderStats = async () => {
      const stats = await getStats();
      setGenderStats(stats);
    };
    fetchGenderStats();
  }, []);

  return (
    <div>
      <HobbiesChart hobbies={hobbies} />
      <ColorsChart colors={colors} />
      <GamesTable games={games} />
      <GenderChart stats={genderStats} />
    </div>
  );
}
