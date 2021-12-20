const express = require("express");
const cookieParser = require("cookie-parser");
const bodyParser= require('body-parser');
const cors = require('cors');
const { fork } = require('child_process');
const PORT = 3001;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }))

// Routes
app.post("/bmi", async (request, response) => {
  try {
      const { data } = request.body;
        if (!data && !data.length) {
          return response
            .status(400)
            .send({ status: "Error", error: "Data is required" });
        }
      const child = fork('./task.js');
      child.send({message: 'start', data });
      child.on('message', (result)=> {
        response.status(200).send({status: 'Success', result})
      })
    } catch (error) {
      return response.status(500).send(error);
    }
});

app.use("/", (request, response) => {
    return response.send("Hello");
});

app.listen(PORT, () => {
  console.log(`Listening to port ${PORT}`);
});

module.exports = app;