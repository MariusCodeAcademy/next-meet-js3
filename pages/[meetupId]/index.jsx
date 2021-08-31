import MeetupDetail from '../../components/meetups/MeetupDetail';
import { MongoClient } from 'mongodb';
import { getColletion } from '../../utils/mongo-data';

const MeetupDetails = (props) => {
  return (
    <>
      <MeetupDetail
        title={props.meetupData.title}
        image={props.meetupData.image}
        address={props.meetupData.address}
        description={props.meetupData.description}
      />
    </>
  );
};

export async function getStaticPaths() {
  // nurodo pagal kokia dinamine informacija sugeneruoti statinius puslapius
  const client = await MongoClient.connect(process.env.MONGO_CONN);
  const db = client.db();
  // sukurti arba nusitiaikyti i esama
  const meetupCollecion = db.collection('meetups');
  // aprasyti prisijungimo logika ir gauti reikiamas reiksmes kad musu funkcija (getStaticPaths) veiktu taip pat
  getColletion();
  const allMeets = await meetupCollecion.find({}).toArray();
  client.close();
  console.log('All meeets getStaticPaths ============');
  const pathsArrOfCurrentMeets = allMeets.map((dbObj) => {
    return {
      params: {
        meetupId: dbObj._id.toString(),
      },
    };
  });
  console.log(pathsArrOfCurrentMeets);

  return {
    fallback: false,
    // TRUE: jei einam i psl kurio nera aprasyta paths tai tas psl sugeneruojamas uzklausom metu
    // FALSE: jei einam i psl kurio nera aprasyta paths tai gaunam 404
    paths: pathsArrOfCurrentMeets,
  };
}

export function getStaticProps(context) {
  console.log(context.params.meetupId);
  return {
    props: {
      meetupData: {
        id: context.params.meetupId,
        title: 'The first meetup',
        image: 'https://picsum.photos/id/1016/1000/800',
        address: 'Some street 5, 2328282, Rome, Italy',
        description: 'This is our first meet in Italy',
      },
      revalidate: 5,
    },
  };
}

export default MeetupDetails;
