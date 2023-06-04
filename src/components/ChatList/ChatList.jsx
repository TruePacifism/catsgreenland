import ChatListItem from 'components/ChatListItem/ChatListItem';
import Container from 'components/Container/Container';
import Section from 'components/Section/Section';
import { useSelector } from 'react-redux';
import styles from './ChatList.module.css';

export default function ChatList() {
  const chats = useSelector(store => store.chats);
  return (
    <Section>
      <Container>
        <ul className={styles.list}>
          {chats.map((chat, idx) => (
            <ChatListItem key={idx} chat={chat} />
          ))}
        </ul>
      </Container>
    </Section>
  );
}
