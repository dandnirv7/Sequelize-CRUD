require("dotenv").config();
const express = require("express");
const cors = require("cors");
const databaseRoutes = require("./routes/BiodataRoutes");
const PORT = process.env.DB_PORT || 3000;

const app = express();

const corsOptions = {
  origin: `http://localhost:${PORT}`,
};

app.use(cors(corsOptions));

app.use(express.json());

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(databaseRoutes);

app.listen(PORT, () => {
  console.log(`server listening at port: ${PORT}`);
});
