import Biograhpy from 'components/Biography/Biography';
import BiograhpyList from 'components/BiographyList/BiographyList';
import Container from 'components/Container/Container';
import Section from 'components/Section/Section';
import { useEffect, useRef } from 'react';
import styles from './Biographys.module.css';
import { useSearchParams } from 'react-router-dom';

export default function Biographys() {
  const [searchParams] = useSearchParams();
  const bioRef = useRef(null);
  const PSRef = useRef(null);
  useEffect(() => {
    setTimeout(() => {
      if (bioRef.current) {
        const headerOffset = 80;
        const elementPosition = bioRef.current.getBoundingClientRect().top;
        const offsetPosition =
          elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
        });

        // bioRef.current.scrollIntoView({
        //   behavior: 'smooth',
        //   block: 'start',
        //   inline: 'nearest',
        //   offset: { top: '-80px' },
        // });
      }
    }, 100);
  }, [searchParams]);
  return (
    <>
      <Section>
        <Container>
          <h1 className={styles.heading}>Познакомься с нами!</h1>
          <p className={styles.description}>
            Приветствую, дорогой участник нашей беседы. Мы представляем тебе
            рассказы о половине наших участников,{' '}
            <span className={styles.overlined}>
              остальные писать не захотели
            </span>
            . Эти статейки помогли нам узнать друг друга, обнаружить что-то
            общее. Надеемся, она тоже станет тебе в этом помощником.
          </p>
          <div className={styles.introducingBlock}>
            <p className={styles.introducing}>
              Маленькое пояснение. В каждой карточке идёт рассказ от лица того
              человека, который там указан. В каждом рассказе на автора рассказа
              есть ссылка. Порядок ваших рассказов определяется количеством
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
              , ТАМ ТОЖЕ ЕСТЬ ПОЛЕЗНАЯ ИНФОРМАЦИЯ. Если что-то вас не устраивает
              и вы хотели бы подправить — дайте знать.
            </p>
          </div>
          <BiograhpyList />
          {searchParams.get('id') && (
            <Biograhpy bioRef={bioRef} vkId={searchParams.get('id')} />
          )}
          <h2 className={styles.PSHeading}>P.S.</h2>
          <p ref={PSRef} className={styles.PS}>
            • Рассказ о себе - штука необязательная. Но если вы все же хотите,
            то чтобы сюда попасть нужно просто иметь желание и написать{' '}
            <a
              className={styles.link}
              target="_blank"
              rel="noreferrer"
              href="https://vk.com/kulebyaaka"
            >
              Камилле
            </a>{' '}
            рассказ о себе в любом виде с любой информацией. Если же идей нет,
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
