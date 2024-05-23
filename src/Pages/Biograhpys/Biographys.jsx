import Biograhpy from 'components/Biography/Biography';
import BiograhpyList from 'components/BiographyList/BiographyList';
import Container from 'components/Container/Container';
import Section from 'components/Section/Section';
import { useEffect, useMemo, useRef, useState } from 'react';
import styles from './Biographys.module.css';
import { useSelector } from 'react-redux';
import { Link, useSearchParams } from 'react-router-dom';
import getBios from 'utils/api/bios/getBios';
import getFullBio from 'utils/api/bios/getFullBio';
import LoadingSpinner from 'components/LoadingSpinner/LoadingSpinner';
import { ReactComponent as EditIcon } from '../../images/edit-icon.svg';

export default function Biographys() {
  const user = useSelector(state => state.currentUser);
  const isAdmin = useMemo(() => {
    console.log('user', user);
    return user.vkId === 301865955 || user.vkId === 373718115;
  }, [user]);
  const [searchParams] = useSearchParams();
  const bioRef = useRef(null);
  const PSRef = useRef(null);
  useEffect(() => {
    setTimeout(() => {
      if (bioRef.current) {
        // bioRef.current.scrollIntoView({
        //   behavior: 'smooth',
        //   block: 'start',
        //   inline: 'nearest',
        //   offset: { top: '-80px' },
        // });
      }
    }, 100);
  }, [searchParams]);
  const [bios, setBios] = useState();
  useEffect(() => {
    const fetchBios = async () => {
      const allBios = await getBios();
      setBios(allBios);
    };
    fetchBios();
  }, []);
  const [showingBio, setShowingBio] = useState();
  useEffect(() => {
    async function fetchShowingBio() {
      if (!searchParams.get('id')) {
        return;
      }
      try {
        const vkId = searchParams.get('id');
        const bio = await getFullBio(vkId);
        setShowingBio(bio);
        console.log(bioRef);
        // if (!bioRef || !bioRef.current) {
        //   return;
        // }
        const headerOffset = 80;
        const elementPosition = bioRef.current.getBoundingClientRect().top;
        const offsetPosition =
          elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
        });
      } catch (error) {
        console.error(error);
      }
    }
    fetchShowingBio();
  }, [searchParams, bioRef]);

  return (
    <>
      <Section>
        <Container>
          <h1 className={styles.heading}>
            Познакомься с нами!
            {isAdmin && (
              <Link className={styles.editIconContainer} to={'/admin'}>
                <EditIcon className={styles.editIcon} />
              </Link>
            )}
          </h1>
          <p className={styles.description}>
            Приветствую, дорогой участник нашей беседы. Здесь ты можешь
            прочитать автобиографии о большинстве наших участников (остальных
            тоже ждем). Эти статейки помогли нам узнать друг друга, обнаружить
            что-то общее. Надеемся, она тоже станет тебе в этом помощником.
          </p>
          <div className={styles.introducingBlock}>
            <p className={styles.introducing}>
              Каждый рассказ написан от лица того, о ком речь. В каждом из них
              можно перейти на профиль автора, нажав на его имя, а так же
              поставить лайк. Порядок рассказов определяется количеством
              сообщений в топе за всё время, кроме тех, кто выбрал себе место.
              ДОЛИСТАЙТЕ СТРАНИЦУ ДО{' '}
              <span
                onClick={() => {
                  PSRef.current.scrollIntoView({
                    behavior: 'smooth',
                  });
                }}
                className={styles.toPSLink}
              >
                КОНЦА (тыкните чтобы перейти)
              </span>
              , ТАМ ТОЖЕ ЕСТЬ ПОЛЕЗНАЯ ИНФОРМАЦИЯ. При желании изменить что-то в
              своем рассказе или добавить, если его нет - писать{' '}
              <a
                className={styles.link}
                target="_blank"
                rel="noreferrer"
                href="https://vk.com/truepacifism"
              >
                Жене
              </a>{' '}
              .
            </p>
          </div>
          {bios ? <BiograhpyList bios={bios} /> : <LoadingSpinner />}
          <div ref={bioRef}>
            {showingBio &&
              (showingBio.pfp ? (
                <Biograhpy bioRef={bioRef} bio={showingBio} />
              ) : (
                <LoadingSpinner />
              ))}
          </div>
          <h2 className={styles.PSHeading}>P.S.</h2>
          <p ref={PSRef} className={styles.PS}>
            • Рассказ о себе - штука необязательная и писать вы его можете так,
            как вам угодно, с какой угодно информацией о себе. Если же идей нет,
            просто составьте свой рассказ на основе наших, используя пожелания.{' '}
          </p>
          <p className={styles.PS}>
            {' '}
            • Вы можете добавить любой анекдот, картинки, ссылки, песни и вообще
            что угодно. Единственное, из пожеланий - не забудьте в конце
            дописать <b>свои любимые цвета</b>. Это как фишка. А также{' '}
            <b>город вашего проживания и часовой пояс</b>, так как участники
            любят искать тех, кто поближе находится. В последнее время также
            многим захотелось видеть от всех <b>3 любимых трека</b>. Или даже
            больше. И еще ваш <b>рост</b>.
          </p>
        </Container>
      </Section>
    </>
  );
}
