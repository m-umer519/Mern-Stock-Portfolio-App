const { MongoClient } = require('mongodb');

const uri = "mongodb+srv://islamabad:islamabad1122@cluster0.hxcwsuw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function testConnection() {
  try {
    await client.connect();
    console.log("Successfully connected to MongoDB!");
    // Optionally, you can list the databases to confirm it's working
    const databases = await client.db().admin().listDatabases();
    console.log("Databases:", databases.databases);
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  } finally {
    await client.close();
  }
}

testConnection();
