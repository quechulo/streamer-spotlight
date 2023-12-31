import express from "express";
import db from "../db/conn.mjs";
import { ObjectId } from "mongodb";

const router = express.Router();

router.get("/streamers", async (req, res) => {
  try {
    let collection = await db.collection("streamers");
    let results = await collection.find({}).limit(50).toArray();
    
    res.send(results).status(200);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

router.get("/streamer/:id", async (req, res) => {
  try {
    let collection = await db.collection("streamers");
    let query = { _id: new ObjectId(req.params.id) };
    let result = await collection.findOne(query);
    
    if (!result) res.send("Not found").status(404);
    else res.send(result).status(200);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

router.post("/streamers", async (req, res) => {
  try {
    let collection = await db.collection("streamers"); 
    let newDocument = req.body;
    newDocument.date = new Date();
    let result = await collection.insertOne(newDocument);
    res.send(result).status(204);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

router.put("/streamers/:id/vote", async (req, res) => {
  try {
    let collection = await db.collection("streamers");
    let query = { _id: new ObjectId(req.params.id) };
    let update = { $inc: { upvotes: 1 } };
    
    collection.updateOne(query, update, (err, result) => {
      if (err) {
        console.error("Error updating document", err);
        res.send(err).status(500);
      }
      console.log("Document updated successfully");
      console.log(result);
      res.send(result).status(204);
    });
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

router.put("/streamers/:id/downvote", async (req, res) => {
  try {

    let collection = await db.collection("streamers");
    let query = { _id: new ObjectId(req.params.id) };
    let update = { $inc: { downvotes: 1 } };
    
    collection.updateOne(query, update, (err, result) => {
      if (err) {
        console.error("Error updating document", err);
        res.send(err).status(500);
      }
      console.log("Document updated successfully");
      console.log(result);
      res.send(result).status(204);
    });
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
  });

export default router;
