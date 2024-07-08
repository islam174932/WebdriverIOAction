import { Given, When } from "@wdio/cucumber-framework";
import request from 'supertest';
import { expect } from 'chai';

const baseUrl = 'https://reqres.in';
let response: request.Response;

Given('I send a GET request to {string}', async function (path: string) {
  response = await request(baseUrl).get(path).query({ page: 2 });
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

Then('the response should have a total of {int} users', function (total: number) {
  expect(response.body).to.have.property('total');
  expect(response.body.total).to.equal(total);
});

Then('the page number should be {int}', function (page: number) {
  expect(response.body).to.have.property('page');
  expect(response.body.page).to.equal(page);
});

Then('the support URL should be {string}', function (supportUrl: string) {
  expect(response.body).to.have.property('support');
  expect(response.body.support.url).to.equal(supportUrl);
});

Then('the support text should be {string}', function (supportText: string) {
  expect(response.body).to.have.property('support');
  expect(response.body.support.text).to.equal(supportText);
});



