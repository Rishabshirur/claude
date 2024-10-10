import clientPromise from '../../db/connect';
import Anthropic from '@anthropic-ai/sdk';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, topic } = req.body;

    if (!name || !topic) {
      return res.status(400).json({ message: 'Name and Topic are required' });
    }

    const anthropicApiKey = process.env.ANTHROPIC_API_KEY;
    if (!anthropicApiKey) {
      console.error('Anthropic API key is missing');
      return res.status(500).json({ message: 'Anthropic API key is missing' });
    }

    const anthropic = new Anthropic({ apiKey: anthropicApiKey });

    let responses = '';

      try {
        const msg = await anthropic.messages.stream({
          model: "claude-3-sonnet-20240229",
          max_tokens: 4096,
          messages: [{ role: "user", content: `Explain ${topic} to a 5-year-old. directly start with the explanation do not reiterate that you are explaning to a five year old` }],
        })

        msg.on('text', (chunk) => {
          console.log("Streaming chunk: ", chunk);
          responses+=chunk;
          res.write(chunk);  // Send data chunk
        });
  
        msg.on('end', async () => {
          res.end();  // Indicate end of stream
          try {
            console.log('here')
            const client = await clientPromise;
            const db = client.db('studyfetch');
            const collection = db.collection('explanations');
  
            await collection.insertOne({
              name,
              topic,
              explanation: responses,  // Insert the full explanation
              createdAt: new Date()
            });
  
            console.log('Explanation saved to MongoDB');
          } catch (dbError) {
            console.error('Error saving to MongoDB:', dbError);
          }
        });
  
        msg.on('error', (error) => {
          console.error("Stream error:", error);
          res.status(500).write('Internal server error.');
          res.end();
        });

      } catch (error) {

        console.error("Error fetching explanation:", error);
        res.status(500).json({ message: 'Internal server error.' });
      }

 
  } 
  else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}