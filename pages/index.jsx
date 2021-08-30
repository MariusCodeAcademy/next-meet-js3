import { useEffect, useState } from 'react';
import MeetupList from '../components/meetups/MeetupList';

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
  const [meetupsArr, setMeetupsArr] = useState([]);
  useEffect(() => {
    setMeetupsArr(DUMMY_MEETUPS);
  }, []);
  return (
    <>
      <h1>Home meetup page</h1>
      <MeetupList meetups={meetupsArr} />
    </>
  );
};
const pass = 'asdasd';
// tam kad puslapis butu sugeneruotas duomenims pasikeitus yra naudojami 2 budai

// SSR server side rendering - duomenys sugeneruojami uzklausom metus, tinka labiau kai duomenys kinta kas sekunde ar greiciau
// SSG static site Generatingas = duomeny sugeneruojami aplikacijos sukurimo metu ir atnaujinami jei reikia tam tikru intervalu

export default HomePage;
