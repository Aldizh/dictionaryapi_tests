const axios = require('axios')
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
require('dotenv').config()

// bodyParser, parses the request body to be a readable json format
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const baseURl = 'https://dictionary.iachieved.it/dictionary'
const config = {
  headers: {
    'Content-Type': 'application/json',
    Authorization: process.env.AUTH_KEY
  }
}

// get value for passed in key
app.get('/api/dictionary/:id/key', async (req, res) => {
  const dictionary = await axios
    .get(`${baseURl}/${req.params.id}/keys/${req.query.key}`,
      config
    ).catch((err) => {
      return res.status(err.response.status).json(err.response.data)
    })
  return res.status(dictionary.status).json(dictionary.data);
});

// create a new dictionary
app.post('/api/dictionary', async (req, res) => {
  const dictionary = await axios.post(baseURl,
    req.body,
    config
  )
  return res.status(dictionary.status).json(dictionary.data);
});

// create/update an entry in the dictionary
app.post('/api/dictionary/:id', async (req, res) => {
  const dictionary = await axios.post(`${baseURl}/${req.params.id}/keys/${req.query.key}`,
    req.body,
    config
  )
  return res.status(dictionary.status).json(dictionary.data);
});

// delete a dictionary
app.delete('/api/dictionary/:id', async (req, res) => {
  const dictionary = await axios.delete(`${baseURl}/${req.params.id}`,
    config
  )
  return res.status(dictionary.status).json(dictionary.data);
});

module.exports = app;
