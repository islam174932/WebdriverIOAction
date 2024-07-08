export class HeakoAppPage {
  async openTheWebsite() {
    // Navigate to the webpage
    await browser.url("https://the-internet.herokuapp.com/tables");

    // Wait for the table to be visible
    await $("#table1").waitForExist({ timeout: 5000 });

    // Initialize an array to store column texts
    let columnTexts = [];

    // Get the first row in the table (excluding the header row)
    const firstRow = await $("#table1 thead tr:nth-child(1)");

    // Get all cells in the first row
    const cells = await firstRow.$$("th");

    // Loop through each cell in the first row
    for (let j = 0; j < cells.length - 1; j++) {
      // Get the text content of the cell and push it to the columnTexts array
      const cellText = await cells[j].getText();
      columnTexts.push(cellText.trim());
    }

    // Output the column texts
    console.log(columnTexts);

    // Optionally, wait for some time after logging the column texts
    await browser.pause(4000);
  }
}
