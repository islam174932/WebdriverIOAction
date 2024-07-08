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
    for (let i = 0; i < rows.length; i++) {
        // Get all cells in the current row
        const cells = await rows[i].$$('td');

        // Loop through each cell in the row (excluding the last cell which contains actions)
        for (let j = 0; j < cells.length - 1; j++) {
            // Get the text content of the cell and push it to the columnTexts array
            const cellText = await cells[j].getText();
            columnTexts.push(cellText.trim());
        }
    }

    // Output the column texts
    console.log(columnTexts);

    // Optionally, wait for some time after logging the column texts
    await browser.pause(4000);
  }
}
