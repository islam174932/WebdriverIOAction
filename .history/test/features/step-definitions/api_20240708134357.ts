import axios from 'axios';
import { Given, Then } from '@wdio/cucumber-framework';
import { expect } from 'chai';

let response;

Given(/^I send a GET request to "(.*)"$/, async (url) => {
    response = await axios.get(`https://reqres.in${url}`);
});

Then(/^the response should be in JSON format$/, () => {
    expect(response.headers['content-type']).to.include('application/json');
});

Then(/^the response status should be (\d+)$/, (status) => {
    expect(response.status).to.equal(parseInt(status, 10));
});

Then(/^the response should contain a list of users$/, () => {
    expect(response.data).to.have.property('data');
    expect(response.data.data).to.be.an('array');
});

Then(/^the response should have a total of (\d+) users$/, (total) => {
    expect(response.data.total).to.equal(parseInt(total, 10));
});

Then(/^the page number should be (\d+)$/, (page) => {
    expect(response.data.page).to.equal(parseInt(page, 10));
});

Then(/^the support URL should be "(.*)"$/, (url) => {
    expect(response.data.support.url).to.equal(url);
});

Then(/^the support text should be "(.*)"$/, (text) => {
    expect(response.data.support.text).to.equal(text);
});

Then(/^I print all data to the console$/, () => {
    console.log('Response Data:', response.data);
});
