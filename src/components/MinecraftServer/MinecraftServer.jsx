import getUserInfo from 'utils/api/user/getUserInfo';
import styles from './MinecraftServer.module.css';
import { useEffect, useState } from 'react';
import Section from 'components/Section/Section';
import Container from 'components/Container/Container';
import { ReactComponent as VipIcon } from '../../images/star-icon.svg';
import { useMediaQuery } from 'react-responsive';

const serverIP = 'catsgreenland.aternos.me:62527';
const playersBasicInfo = [
  {
    vkId: 301865955,
    isVip: true,
    nickname: 'TruePacifism',
  },
  {
    vkId: 529988459,
    isVip: true,
    nickname: 'Andreew_Sergei',
  },
  {
    vkId: 712497882,
    isVip: true,
    nickname: 'Rossbone',
  },
  {
    vkId: 403229636,
    isVip: true,
    nickname: 'DeHunX',
  },
  {
    vkId: 731437792,
    isVip: true,
    nickname: 'pgtdrs',
  },
  {
    vkId: 649859412,
    isVip: false,
    nickname: 'Remeyker_',
  },
  {
    vkId: 644064237,
    isVip: false,
    nickname: 'sateer69russ',
  },
];

export default function MinecraftServer() {
  const isMobile = useMediaQuery({ maxWidth: 479 });
  const [playersList, setPlayersList] = useState();
  useEffect(() => {
    const fetchPlayersList = async () => {
      const response = await Promise.all(
        playersBasicInfo.map(player => getUserInfo(player.vkId))
      );
      console.log(response);
      console.log(
        response.map((player, idx) => ({
          ...player,
          ...playersBasicInfo[idx],
        }))
      );
      setPlayersList(
        response.map((player, idx) => ({
          ...player,
          ...playersBasicInfo[idx],
        }))
      );
    };
    fetchPlayersList();
  }, []);
  return (
    <>
      <Section>
        <Container heading={'Minecraft Сервер'}>
          <p className={styles.description}>
            У беседы есть свой живой ванильный сервер Minecraft на последней
            версии игры. Сервер находится на Aternos, а значит его нужно
            запускать перед игрой. У некоторых людей есть право делать это
            самостоятельно, так что обращаться за этим следует к ним. А если вы
            сами регулярно играете, то такое право я могу дать и вам, дабы
            облегчить игру.
          </p>
          <h3 className={styles.IP}>IP: {serverIP}</h3>
          <p className={styles.description}>
            Ниже представлены люди, которые заходят на сервер поиграть.
            Звездочкой отмечены те, кто может запускать сервер самостоятельно{' '}
          </p>
          {playersList && (
            <ul className={styles.playersList}>
              {playersList.map(player => (
                <li className={styles.playersListItem}>
                  <img className={styles.playerPfp} src={player.pfp} alt="" />
                  {!isMobile && (
                    <span className={styles.playerName}>{player.name}</span>
                  )}
                  <span className={styles.playerNickname}>
                    {player.nickname}
                  </span>
                  <VipIcon
                    className={
                      player.isVip ? styles.vipIcon : styles.notVipIcon
                    }
                  />
                </li>
              ))}
            </ul>
          )}
        </Container>
      </Section>
    </>
  );
}
