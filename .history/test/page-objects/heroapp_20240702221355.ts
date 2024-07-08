

export class HeakoAppPage {

    async openTheWebsite() {
        await browser.url("https://the-internet.herokuapp.com/infinite_scroll");
        const elementXPath = '//*[@id="content"]/div/div/div/div/div[6]';

        try {
            await this.scrollUntilElementVisible(elementXPath);
        } catch (error) {
            console.error("Error scrolling to element:", error);
        }
    }

    private async scrollUntilElementVisible(elementXPath: string) {
        let element = await browser.$(elementXPath);

        while (!(await element.isDisplayed())) {
            await browser.execute(() => {
                window.scrollTo(0, document.body.scrollHeight);
            });

            await browser.pause(1000); // Adjust pause time as needed
        }
    }

    // Optional: You can add additional methods or functionality related to your page here
}
