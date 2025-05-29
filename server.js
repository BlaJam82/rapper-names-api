const express = require("express");
const app = express();
const cors = require("cors");
const PORT = 8000;

app.use(cors());

const rappers = {
  "21 savage": {
    "age": 32,
    "birthName": "Shéyaa Bin Abraham-Joseph",
    "birthLocation": "London, England",
  },
  "chance the rapper": {
    "age": 32,
    "birthName": "Chancelor Bennett",
    "birthLocation": "Chicago, Illinois",
  },
  "dr. dre": {
    "age": 60,
    "birthName": "Andre Romell Young",
    "birthLocation": "Compton, California",
  },
  "unknown": {
    "age": 0,
    "birthName": "unknown",
    "birthLocation": "unknown",
  },
};

app.get("/", (request, response) => {
  response.sendFile(__dirname + "/index.html");
});

app.get("/api/:name", (request, response) => {
  const rapperName = request.params.name.toLowerCase();
  if (rappers[rapperName]) {
    response.json(rappers[rapperName]);
  } else {
    response.json(rappers["unknown"]);
  }
});

app.listen(process.env.PORT || PORT, () => {
  console.log(`The server is now running on port ${PORT}! Betta Go Catch It!`);
});
