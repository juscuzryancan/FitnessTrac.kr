require('dotenv').config();
const express = require('express');
const server = express();

const client = require('./db/client');

const cors = require('cors');
server.use(cors());

const morgan = require('morgan');
server.use(morgan('dev'));

server.use(express.json());
server.use(express.urlencoded({
  extended: true
}));

const path = require("path");


const { PORT = 8080 } = process.env;

server.use('/api', require('./api'));

server.use(express.static(path.join(__dirname, "..", "client", "dist")))
server.use((req, res, next) => {
  res.sendFile(path.join(__dirname, "..", "client", "dist"));
})

server.use(({name, message}, req, res, next) => {
  console.error(name)
  console.error(message)
  res.status(500).send({name, message, success: false});
});

server.listen(PORT, () => {
  client.connect();
  console.log(`The Server is now up and listening on Port: ${PORT}`);
})
