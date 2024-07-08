// api.ts

import { Given, When, Then } from "@wdio/cucumber-framework";
import { expect } from 'chai';
import request from 'supertest';

let supertestResponse: any;
let postData = {
    email: 'islam.ibrahiml@reqres.in',
    first_name: 'Islam',
    last_name: 'Gamal',
    avatar: 'https://reqres.in/img/faces/12-image.jpg'
};

Given('I have the user data to create', () => {
    // Nothing to implement here as data is already defined
});

When('I make a POST request to create a user', async () => {
    const url = 'https://reqres.in/api/users';

    // Using supertest to make the POST request
    supertestResponse = await request(url)
        .post('')
        .send(postData);
});

Then('I receive a successful response with user creation details', () => {
    // Asserting supertest response
    expect(supertestResponse.status).to.equal(201); // Assuming 201 Created is expected
    expect(supertestResponse.body).to.deep.include(postData);
});
