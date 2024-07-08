

export class HeakoAppPage {

    async openTheWebsite() {
        await browser.url("https://the-internet.herokuapp.com/infinite_scroll");
        const elementXPath = '//*[@id="content"]/div/div/div/div/div[6]';
        await this.scrollToElement(elementXPath);
    }

    private async scrollToElement(elementXPath: string) {
        let element = await browser.$(elementXPath);

        while (!(await element.isDisplayed())) {
            await browser.execute((el) => {
                el.scrollIntoView();
            }, element);

            await browser.pause(1000); // Adjust pause time as needed
        }
    }

    // Optional: You can add additional methods or functionality related to your page here
}
