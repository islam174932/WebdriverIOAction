export class HeakoAppPage {
  async openTheWebsite() {
    try {
      // Navigate to the webpage
      await browser.url("https://the-internet.herokuapp.com/tables");

      // Wait for the table to be visible
      await $("#table1").waitForExist({ timeout: 5000 });

      // Find all rows in the table body
      const rows = await $$("#table1 tbody tr");

      // Flag to check if the text is found
      let found = false;

      // Loop through each row
      for (let i = 0; i < rows.length; i++) {
        // Find the cell in the "Due" column for the current row
        const dueCell = await rows[i].$("td:nth-child(4)");

        // Get the text content of the "Due" cell
        const dueText = await dueCell.getText();

        // Check if the cell text contains "Due $51.00"
        if (dueText.includes("Due $51.00")) {
          console.log(`Found 'Due $51.00' in row ${i + 1}`);
          found = true; // Set flag to true if text is found
          break; // Exit the loop since we found the text
        }
      }

      // Print message if text is not found
      if (!found) {
        console.log("Text 'Due $51.00' not found in the table.");
      }

    } catch (error) {
      console.error("Error occurred:", error);
    }
  }
}
