const request = require('supertest');
const express = require('express');

const app = express();

app.get('/hello', (req, res) => {
    res.status(200).send('Hello World!');
});




