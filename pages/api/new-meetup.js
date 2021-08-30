import { MongoClient } from 'mongodb';

// localhost:3000/api/new-meetup
// cia aprasyt galima prisijungimo slaptazodzius ir kita susijusia info
// cia aprasytas kodas nekeliauja i client narykle

async function handler(req, res) {
  console.log(req.method);
  if (req.method === 'POST') {
    const data = req.body;
    console.log('got data in api/new-meetup', data);
    let client;
    try {
      client = await MongoClient.connect(process.env.MONGO_CONN);
      const db = client.db();
      // sukurti arba nusitiaikyti i esama
      const meetupCollecion = db.collection('meetups');
      const insertResult = await meetupCollecion.insertOne(data);
      res.status(201).json({ msg: 'success', insertResult });
    } catch (error) {
      res.status(500).json({ error: error });
    } finally {
      client && client.close();
    }
  }
}

export default handler;
