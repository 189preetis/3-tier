const tasks = require("./routes/tasks");
const connection = require("./db");
const cors = require("cors");
const express = require("express");
const app = express();


require("dotenv").config();

connection();

app.use(express.json());
app.use(cors());

//app.get('/ok', (req, res) => {
  //  res.status(200).send('ok')
 // })
//
//
app.get('/', (req, res) => {
	  res.send('Backend is working!');
});

app.use("/api/tasks", tasks);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening on port ${port}...`));



// Start server
// app.listen(port, '0.0.0.0', () => {
  // console.log(`Server running on port ${port}`);
// });
