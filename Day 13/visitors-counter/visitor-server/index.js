const express = require("express");
const { createClient } = require("redis");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

const client = createClient({
  url: 'redis://redis-server:6379'
});


(async () => {
  try {
    await client.connect();
    console.log("Connected to Redis");

    const visits = await client.get("visits");
    if (visits === null) {
      await client.set("visits", 0);
    }

    app.get("/", async (req, res) => {
      const visits = await client.get("visits");
      await client.set("visits", parseInt(visits) + 1);
      res.send("Number of visits is " + visits);
    });

    app.get("/error1", (req, res) => {
      process.exit(1);
    });

    app.listen(8081, () => {
      console.log("Listening on port 8081");
    });

  } catch (err) {
    console.error("Redis connection error:", err);
  }
})();
