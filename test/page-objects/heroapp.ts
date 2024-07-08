export class HeakoAppPage {
  async openTheWebsite() {
    const adminElement = await browser.$('//*[@id="app"]/div[1]/div[1]/aside/nav/div[2]/ul/li[1]/a/span');
    await adminElement.click();

 
  }

  // Optional: You can add additional methods or functionality related to your page here
}
