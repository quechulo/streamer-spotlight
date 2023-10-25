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

