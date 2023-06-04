import Biograhpy from 'components/Biography/Biography';
import BiograhpyList from 'components/BiographyList/BiographyList';
import Container from 'components/Container/Container';
import Section from 'components/Section/Section';
import { useEffect, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';

export default function Biographys() {
  const [searchParams] = useSearchParams();
  const bioRef = useRef(null);
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
          <BiograhpyList />
          {searchParams.get('id') && (
            <Biograhpy bioRef={bioRef} vkId={searchParams.get('id')} />
          )}
        </Container>
      </Section>
    </>
  );
}
