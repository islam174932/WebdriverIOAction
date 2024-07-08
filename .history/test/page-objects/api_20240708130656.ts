const request = require('supertest');
const express = require('express');

const app = express();

app.get('/hello', (req, res) => {
    res.status(200).send('Hello World!');
});

const runTests = async () => {
    try {
        const response = await request(app).get('/hello');
        console.log('Response status:', response.status);
        console.log('Response text:', response.text);

        if (response.status === 200 && response.text === 'Hello World!') {
            console.log('Test passed');
        } else {
            console.log('Test failed');
        }
    } catch (error) {
        console.error('Test failed', error);
    }
};

runTests();


