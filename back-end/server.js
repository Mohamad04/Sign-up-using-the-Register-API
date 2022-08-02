const express = require('express')
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
require('dotenv/config')
const config = require('./src/api/config/config')
var cookieParser = require("cookie-parser");



app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true, //access-control-allow-credentials:true
    optionSuccessStatus: 200,
  })
);  
app.use(cookieParser());
app.use(bodyParser.json());




app.get('/', (req, res) => {
    res.send("We are on home")
});


const adminRoutes = require('./src/api/routes/route.admin');
app.use("/admin", adminRoutes);

const customerRoutes = require('./src/api/routes/route.customer');
app.use("/customers", customerRoutes);


//  we start listening to the server
const port = config.app.port ;
app.listen(port, () => {
  console.log(" 🔥 Server is up and running on port : " + port);
});