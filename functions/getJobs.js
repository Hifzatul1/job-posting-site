const { MongoClient } = require('mongodb');

const uri = process.env.MONGO_URI; // Store this in Netlify environment variables
const client = new MongoClient(uri);

exports.handler = async (event, context) => {
    try {
        await client.connect();
        const database = client.db('test');
        const collection = database.collection('jobs');

        const jobs = await collection.find({}).toArray();

        return {
            statusCode: 200,
            body: JSON.stringify(jobs),
        };
    } catch (error) {
        console.error(error);
        return {
            statusCode: 500,
            body: 'Error fetching jobs',
        };
    } finally {
        await client.close();
    }
};
