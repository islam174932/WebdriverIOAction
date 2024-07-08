import { expect } from "chai";
import * as cheerio from 'cheerio';
import * as fs from 'fs';

export class HeakoAppPage {
  async openTheWebsite() {
    // Navigate to the webpage

    await browser.url("https://www.saucedemo.com/inventory.html");
    await browser.pause(4000);

    // Locate the file upload element
// Select all elements with the class 'inventory_item_price'
const prices = $('.inventory_item_price');

// Convert the selected elements into an array of prices
const pricesArray = prices.toArray().map(element => $(element).text());

// Print the array of prices
console.log(pricesArray);
    
    // Print the array of prices
    console.log(pricesArray);
    // Optionally, wait for some time after clicking the upload button
    await browser.pause(4000);
  }
}
