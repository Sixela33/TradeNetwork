const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./server/db/connect");

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

const port = process.env.PORT || 5000;

app.use("/auth", require("./server/routes/auth"));
app.use("/items", require("./server/routes/items"));
app.use("/users", require("./server/routes/users"));

// Starts the sv and connects to the database
const start = async () => {
  try {
    await connectDB(process.env.REACT_APP_MONGO_URI);
    app.listen(port, console.log(`Listening on port ${port}`));
  } catch (error) {
    console.log(error);
  }
};

start();
