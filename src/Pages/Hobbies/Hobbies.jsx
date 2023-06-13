import ColorsChart from 'components/ColorsChart/ColorsChart';
import GamesTable from 'components/GamesTable/GamesTable';
import { GenderChart } from 'components/GenderChart/GenderChart';
import HobbiesChart from 'components/HobbiesChart/HobbiesChart';

export default function Hobbies() {
  return (
    <div>
      <HobbiesChart />
      <ColorsChart />
      <GamesTable />
      <GenderChart />
    </div>
  );
}
