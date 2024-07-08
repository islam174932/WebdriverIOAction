import { expect } from 'chai';

describe('My WebdriverIO TypeScript Test', () => {
    it('should handle errors and exceptions properly', async () => {
        try {
            await browser.url('https://example.com');
            
            const title = await browser.getTitle();
            expect(title).to.equal('Expected Title', 'Title did not match the expected value');

            const nonExistentElement = await browser.$('#non-existent-element');
            await nonExistentElement.click();
        } catch (error) {
            console.error('An error occurred:', error);
            expect.fail(`Test failed due to an unexpected error: ${error.message}`);
        }
    });
});
