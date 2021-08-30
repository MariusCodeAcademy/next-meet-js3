import MeetupList from '../components/meetups/MeetupList';
import Layout from '../components/layout/Layout';

const DUMMY_MEETUPS = [
  {
    id: 'm1',
    title: 'The first meetup',
    image: 'https://picsum.photos/id/1016/1000/800',
    address: 'Some street 5, 2328282, Rome, Italy',
    description: 'This is our first meet in Italy',
  },
  {
    id: 'm2',
    title: 'The Engalnd meetup',
    image: 'https://picsum.photos/id/1018/1000/800',
    address: 'Highbury road 5, 2328282, London, England',
    description: 'This is our first meet in UK',
  },
];

const HomePage = () => {
  return (
    <Layout>
      <h1>Home meetup page</h1>
      <MeetupList meetups={DUMMY_MEETUPS} />
    </Layout>
  );
};

export default HomePage;
