export class HeakoAppPage {
  async openTheWebsite() {
    try {
      // Navigate to the webpage
      await browser.url("https://the-internet.herokuapp.com/tables");

      // Wait for the table to be visible
      await $("#table1").waitForExist({ timeout: 5000 });

      // Find all table rows in the table body
      const rows = await $$("#table1 tbody tr");

      // Flag to check if the text is found
      let found = false;

      // Loop through each row
      for (let i = 0; i < rows.length; i++) {
        // Find all cells in the current row
        const cells = await rows[i].$$("td");

        // Loop through each cell in the current row
        for (let j = 0; j < cells.length; j++) {
          // Get the text content of the cell
          const cellText = await cells[j].getText();

          // Check if the cell text matches "Due $51.00"
          if (cellText.trim() === "Due $51.00") {
            console.log("Found the text 'Due $51.00' in the table row:", i + 1);
            found = true; // Set flag to true if text is found
            break; // Exit the inner loop since we found the text
          }
        }

        if (found) {
          break; // Exit the outer loop if text is found
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
