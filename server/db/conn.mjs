import { MongoClient } from "mongodb";
import "../../server/loadEnvironment.mjs";

const connectionString = process.env.DB_URL || "";

const client = new MongoClient(connectionString);

let conn;
try {
  conn = await client.connect();
} catch(e) {
  console.error(e);
}

let db = conn.db("streamer-app");

export default db;