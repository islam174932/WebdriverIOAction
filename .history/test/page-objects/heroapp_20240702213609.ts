export class HeakoAppPage {
  async openTheWebsite() {
    try {
      // Navigate to the webpage
      await browser.url("https://the-internet.herokuapp.com/tables");

      // Wait for the table to be visible
      await $("#table1").waitForExist({ timeout: 5000 });

      // Initialize an array to store column texts
      let columnTexts = [];

      // Get all rows in the table body
      const rows = await $$("#table1 tbody tr");

      // Loop through each row
      for (let i = 0; i < rows.length; i++) {
        // Get all cells in the current row
        const cells = await rows[i].$$("td");

        // Initialize an array to store cell texts for the current row
        let rowTexts = [];

        // Loop through each cell in the current row
        for (let j = 0; j < cells.length; j++) {
          // Get the text content of the cell and push it to the rowTexts array
          const cellText = await cells[j].getText();
          rowTexts.push(cellText.trim());
        }

        // Push the row texts array into the main columnTexts array
        columnTexts.push(rowTexts);
      }

      // Output the column texts
      console.log("Column Texts:", columnTexts);

    } catch (error) {
      console.error("Error occurred:", error);
    }
  }
}
