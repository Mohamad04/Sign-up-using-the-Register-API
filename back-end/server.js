const express = require('express')
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
require('dotenv/config')
// Now have the ability to create ROUTES


app.use(bodyParser.json());
app.use(
  cors({
    origin: "*"
  })
);  




app.get('/', (req, res) => {
    res.send("We are on home")
});


const adminRoute = require('./src/api/routes/route');
app.use('/admin', adminRoute)


//  we start listening to the server
const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(" 🔥 Server is up and running on port : " + port);
});