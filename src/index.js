const express = require("express");
const webroutes = require("./routes/web");
const bodyParser = require("body-parser");
const app = express();
const configViewEngine = require("./config/viewEngine");
require("dotenv").config();
const port = process.env.PORT || 8888;
const hostname = process.env.HOST_NAME;
//config requet.body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//config template engine
configViewEngine(app);
// khai báo routes app
app.use("/", webroutes);

app.listen(port, hostname, () => {
  console.log(`Example router listening on port ${port}`);
});
