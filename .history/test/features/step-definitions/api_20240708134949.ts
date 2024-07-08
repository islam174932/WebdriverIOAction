import axios from 'axios';
import { Given, Then } from '@wdio/cucumber-framework';
import { expect } from 'chai';

let response;

Given(/^I send a GET request to "(.*)"$/, async (url) => {
    response = await axios.get(`https://reqres.in${url}`);
});

