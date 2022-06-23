import { Route, Routes } from 'react-router-dom';
import AllMeetups from './pages/AllMeetups';
import NewMeetups from './pages/NewMeetups';
import Favorites from './pages/Favorites';
import Layout from './components/layout/Layout';
import './meetupIndex.module.css';

function Meetups() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<AllMeetups />} exact />
        <Route path="new-meetups" element={<NewMeetups />} />
        <Route path="favorites" element={<Favorites />} />
      </Routes>
    </Layout>
  );
}

export default Meetups;
