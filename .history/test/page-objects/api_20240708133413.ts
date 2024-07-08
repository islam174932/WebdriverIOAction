import { Given, Then } from 'cucumber';
import request from 'supertest';
import { expect } from 'chai';

const baseUrl = 'https://reqres.in';
let response: request.Response;

Given('I send a GET request to {string}', async function (path: string) {
  response = await request(baseUrl)
    .get(path)
    .query({ page: 2 });
});

Then('the response should be in JSON format', function () {
  expect(response.header['content-type']).to.include('application/json');
});

Then('the response status should be {int}', function (statusCode: number) {
  expect(response.status).to.equal(statusCode);
});

Then('the response should contain a list of users', function () {
  expect(response.body).to.have.property('data');
  expect(response.body.data).to.be.an('array');
});





