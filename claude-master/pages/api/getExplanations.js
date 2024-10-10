import clientPromise from '../../db/connect';

export default async function handler(req, res) {
  const client = await clientPromise;
  const db = client.db('studyfetch');
  const collection = db.collection('explanations');

  // Retrieve all explanations from the database
  const explanations = await collection.find({}).toArray();
  res.status(200).json(explanations);
}
