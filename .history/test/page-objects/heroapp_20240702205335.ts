export class HeakoAppPage {
  async openTheWebsite() {
    // Navigate to the webpage
    await browser.url("https://the-internet.herokuapp.com/tables");
    await browser.pause(4000);

    // Select the table element
const table = document.getElementById('table1');

// Initialize an array to store column texts
let columnTexts = [];

// Loop through each row in the table (skipping the first row which is the header)
for (let i = 1; i < table.rows.length; i++) {
    // Get the row
    const row = table.rows[i];

    // Loop through each cell in the row (excluding the last cell which contains actions)
    for (let j = 0; j < row.cells.length - 1; j++) {
        // Get the text content of the cell and push it to the columnTexts array
        const cellText = row.cells[j].textContent.trim();
        columnTexts.push(cellText);
    }
}

// Output the column texts
console.log(columnTexts);

    
    
    // Optionally, wait for some time after logging the prices
    await browser.pause(4000);
  }

  
  
}
