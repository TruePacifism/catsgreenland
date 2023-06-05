import AdminList from 'components/AdminList/AdminList';
import ChatList from 'components/ChatList/ChatList';
import Hero from 'components/Hero/Hero';

export default function MainPage() {
  return (
    <>
      <Hero />
      <ChatList />
      <AdminList />
    </>
  );
}
