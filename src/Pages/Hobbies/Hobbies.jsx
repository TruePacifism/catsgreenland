import ColorsChart from 'components/ColorsChart/ColorsChart';
import GamesTable from 'components/GamesTable/GamesTable';
import { GenderChart } from 'components/GenderChart/GenderChart';

export default function Hobbies() {
  return (
    <div>
      <ColorsChart />
      <GamesTable />
      <GenderChart />
    </div>
  );
}
