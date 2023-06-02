import BiograhpyList from 'components/BiographyList/BiographyList';
import BiograhpyListItem from 'components/BiographyListItem/BiographyListItem';
import Container from 'components/Container/Container';
import Section from 'components/Section/Section';

export default function Biographys() {
  return (
    <>
      <Section>
        <Container>
          <BiograhpyList />
        </Container>
      </Section>
    </>
  );
}
