import BiograhpyListItem from 'components/BiographyListItem/BiographyListItem';
import { useSelector } from 'react-redux';
export default function BiograhpyList() {
  const bios = useSelector(store => store.bios);
  console.log(bios);
  return (
    <ul>
      {bios.map(bio => (
        <BiograhpyListItem key={bio.vkId} bio={bio} />
      ))}
    </ul>
  );
}
