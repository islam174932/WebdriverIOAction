export class HeakoAppPage {
  async openTheWebsite() {
    // Navigate to the webpage
    await browser.url("https://the-internet.herokuapp.com/tables");

    // Wait for the table to be visible
    await $('#table1').waitForExist({ timeout: 5000 });

    // Initialize an array to store column texts
    let columnTexts = [];

    // Get all rows in the table (excluding the header row)
    const rows = await $$('#table1 tbody tr');

    // Loop through each row

    // Output the column texts
    console.log(columnTexts);

    // Optionally, wait for some time after logging the column texts
    await browser.pause(4000);
  }
}
