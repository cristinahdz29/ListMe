// Setting up main file in the backend
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const { errors } = require("celebrate");
const routes = require("./routes");
const port = process.env.PORT || 3001;


app.use(cors());
app.use(express.json());
app.use(routes());
app.use(errors());


app.listen(port, () => {
  console.log(`Server is running on ${port}...`);
});