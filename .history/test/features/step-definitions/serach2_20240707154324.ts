import { expect } from 'chai';
import { remote } from 'webdriverio';

(async () => {
    const browser = await remote({
        logLevel: 'info',
        path: '/',
        capabilities: {
            browserName: 'chrome',
            'goog:chromeOptions': {
                args: ['--headless', '--disable-web-security', '--disable-dev-shm-usage', '--no-sandbox', '--window-size=1920,1080']
            }
        }
    });

    try {
        await browser.url('https://example.com');
        
        const title = await browser.getTitle();
        expect(title).to.equal('Expected Title', 'Title did not match the expected value');

        const nonExistentElement = await browser.$('#non-existent-element');
        await nonExistentElement.click();
    } catch (error) {
        console.error('An error occurred:', error);
        expect.fail(`Test failed due to an unexpected error: ${error.message}`);
    } finally {
        await browser.deleteSession();
    }
})();


