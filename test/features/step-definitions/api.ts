import { Given, Then } from "@wdio/cucumber-framework";
import { expect } from 'chai';
import request from 'supertest';

let supertestResponse: any;

Given('I make a GET request to the users API endpoint', async () => {
    const url = 'https://reqres.in/api/users?page=2';
    
    // Using supertest to make the GET request
    supertestResponse = await request(url).get('');
});

Then('I receive a successful response with user data', () => {
    // Asserting supertest response
    expect(supertestResponse.status).to.equal(200);
    expect(supertestResponse.body).to.have.property('data').that.is.an('array');
    
    // Print data array to console
    console.log('User Data:');
    console.log(supertestResponse.body.data);
});
