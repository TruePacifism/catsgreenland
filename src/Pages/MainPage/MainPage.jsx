import AdminList from 'components/AdminList/AdminList';
import ChatList from 'components/ChatList/ChatList';
import Hero from 'components/Hero/Hero';
import SponsorsList from 'components/SponsorsList/SponsorsList';

export default function MainPage() {
  return (
    <>
      <Hero />
      <AdminList />
      <ChatList />
      <SponsorsList />
      {/* <MinecraftServer /> */}
    </>
  );
}
