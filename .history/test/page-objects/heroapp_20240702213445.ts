export class HeakoAppPage {
  async openTheWebsite() {
    try {
      await browser.url("https://the-internet.herokuapp.com/tables");
      await $("#table1").waitForExist({ timeout: 5000 });

      const firstRow = await $("#table1 tbody tr:nth-child(1)");
      const cells = await firstRow.$$("th");

      let columnTexts = [];
      for (let j = 0; j < cells.length; j++) {
        const cellText = await cells[j].getText();
        columnTexts.push(cellText.trim());
      }

      console.log("Column Texts:", columnTexts); // Add this line for debugging

      // Optionally, you can pause execution to inspect if necessary
      // await browser.pause(4000);
    } catch (error) {
      console.error("Error occurred:", error);
    }
  }
}
