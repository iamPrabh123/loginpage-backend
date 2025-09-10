require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectToDb = require("./database/db");
const authRoutes = require("./routes/auth-routes");

connectToDb();

const app = express();
const PORT = process.env.PORT || 3000;

//Middlewares
app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);

// connecting to the port
app.listen(PORT, () => {
  console.log(`Server is now listening to port ${PORT}`);
});
