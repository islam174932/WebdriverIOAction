

export class HeakoAppPage {

    async openTheWebsite() {
        await browser.url("https://the-internet.herokuapp.com/infinite_scroll");
        await this.scrollToBottomUntilEnd();
    }

    private async scrollToBottomUntilEnd() {
        let previousHeight = 0;
        let currentHeight = await browser.execute(() => document.body.scrollHeight);

        while (previousHeight !== currentHeight) {
            await browser.execute(() => {
                window.scrollTo(0, document.body.scrollHeight);
            });

            await browser.pause(1000); // Adjust pause time as needed
            previousHeight = currentHeight;
            currentHeight = await browser.execute(() => document.body.scrollHeight);
        }
    }

    // Optional: You can add additional methods or functionality related to your page here
}
