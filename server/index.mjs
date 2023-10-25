import express from "express";
import cors from "cors";
import "./loadEnvironment.mjs";

import api from "./routes/api.mjs";

const PORT = process.env.PORT || 5050;

const corsOptions = {
  origin: (origin, callback) => {
    if (origin === "*") {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
};

const app = express();
app.use(cors());
app.use(express.json());


app.use("/api", api);

// Global error handling
app.use((err, _req, res, next) => {
  res.status(500).send("Uh oh! An unexpected error occured.")
})

// start the Express server
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});









// // Route to get the list of streamers
// app.get("/api/streamers", async (req, res) => {
//   let collection = await db.collection("streamers");
//   let results = await collection.find({}).limit(50).toArray();

//   res.send(results).status(200);
// });



// app.put("/api/streamers/:id/vote", (req, res) => {
//   const streamerId = parseInt(req.params.id);
//   const vote = req.body.vote;
//   const streamer = streamers.find((streamer) => streamer.id === streamerId);
//   if (vote === "upvote") {
//     streamer.upvotes++;
//   } else if (vote === "downvote") {
//     streamer.downvotes++;
//   }
//   res.json({ streamer, vote });
// });

// // Route to add a new streamer
// app.post("/api/streamers", (req, res) => {
//   const newStreamer = {
//     id: req.body.id,
//     photo: req.body.photo,
//     name: req.body.name,
//     surname: req.body.surname,
//   };
//   streamers.push(newStreamer);
//   res.json(newStreamer);
// });

// // Start the server
// const port = 5000;
// app.listen(port, () => {
//   console.log(`Server started on port ${port}`);
// });
