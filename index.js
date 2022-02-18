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


const { PORT } = process.env;

server.use('/api', require('./api'));

server.use((req, res, next) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
})

server.use(({name, message}, req, res, next) => {
  res.send({name, message, success: false});
});

server.listen(PORT, () => {
    client.connect();
    console.log('The Client is connected and The Server is now up and listening on Port: ', PORT);
})
