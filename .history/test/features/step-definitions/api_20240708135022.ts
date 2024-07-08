import { Given, Then } from 'cucumber';
import axios from 'axios';
import request from 'supertest';
import { expect } from 'chai';

let axiosResponse: any;
let supertestResponse: any;

Given('I make a GET request to the users API endpoint', async () => {
    const url = 'https://reqres.in/api/users?page=2';
    
    // Using axios to make the GET request
    axiosResponse = await axios.get(url);
    
    // Using supertest to simulate the same GET request
    supertestResponse = await request(url).get('');
});

Then('I receive a successful response with user data', () => {
    // Asserting axios response
    expect(axiosResponse.status).to.equal(200);
    expect(axiosResponse.data).to.have.property('data').that.is.an('array');

    // Asserting supertest response
    expect(supertestResponse.status).to.equal(200);
    expect(supertestResponse.body).to.have.property('data').that.is.an('array');
});
