import BiograhpyListItem from 'components/BiographyListItem/BiographyListItem';
import styles from './BiographyList.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import getUsers from 'utils/getUser';
import actions from 'redux/user-actions';

export default function BiograhpyList() {
  const bios = useSelector(store => store.bios);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!bios[0].pfp || !bios[0].pfp.startsWith('http')) {
      const updateUsers = async () => {
        const users = await getUsers(bios.map(bios => bios.vkId));
        dispatch(
          actions.updateUsers(
            users.map(user => {
              return {
                name: user.first_name + ' ' + user.last_name,
                pfp: user.photo_max,
              };
            })
          )
        );
      };
      updateUsers();
    }
  }, [bios, dispatch]);
  return (
    <div className={styles.container}>
      {bios.map(bio => (
        <BiograhpyListItem key={bio.vkId} bio={bio} />
      ))}
    </div>
  );
}
