import axios from 'axios';
import NewMeetupForm from '../../components/meetups/NewMeetupForm';
import { useRouter } from 'next/router';

const NewMeetup = () => {
  // objektas kuris turi ivairia routing informacija ir metodus
  const router = useRouter();
  async function addMeetupHandler(enteredMeetupData) {
    console.log(enteredMeetupData);
    // send data to api
    const result = await axios.post('/api/new-meetup', enteredMeetupData);
    console.log(result.data);
    // redirect turetu buti cia
    // tik jei irasem sekmingai redirectinam
    result.data && router.push('/');
  }

  return (
    <>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </>
  );
};

export default NewMeetup;
