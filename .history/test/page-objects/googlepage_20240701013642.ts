// googlePage.ts

import { ChainablePromiseElement } from 'webdriverio';

class GooglePage {
  public async open(): Promise<void> {
    await browser.url('https://www.google.com/');
    await this.handleCookieConsent();
  }

  private async handleCookieConsent(): Promise<void> {
    try {
      const acceptButton = await $('//*[@id="L2AGLb"]/div');
      if (await acceptButton.isExisting()) {
        await acceptButton.click();
      }
    } catch (error) {
      console.log('Cookie consent prompt not found or cannot be interacted with.');
    }
  }

  public async searchFor(term: string): Promise<void> {
    const searchInput = await $('//*[@id="APjFqb"]');
    await searchInput.setValue(term);
    await browser.keys('Enter');
  }

  public async clickWebdriverIOLink(): Promise<void> {
    const webdriverIOButton = await $('//*[@id="rso"]/div[1]/div/div/div/div/div/div/div/div[1]/div/span/a/h3');
    await webdriverIOButton.waitForClickable({ timeout: 5000 });
    await webdriverIOButton.click();
  }
}

PS C:\Users\User\Desktop\WebdriverIO2> npx wdio wdio.conf.ts             
2024-06-30T23:21:37.330Z WARN @wdio/config:ConfigParser: pattern page-objects/**/*.ts did not match any file

Execution of 1 workers started at 2024-06-30T23:21:37.332Z

2024-06-30T23:21:37.356Z INFO @wdio/cli:launcher: Run onPrepare hook
2024-06-30T23:21:37.356Z INFO @wdio/utils: Setting up browser driver for: chrome@stable
2024-06-30T23:21:37.357Z INFO @wdio/utils: Setting up browser binaries for: chrome@stable
2024-06-30T23:21:37.360Z INFO webdriver: Using Chromedriver v126.0.6478.127 from cache directory C:\Users\User\AppData\Local\Temp
2024-06-30T23:21:37.363Z WARN @wdio/config:ConfigParser: pattern page-objects/**/*.ts did not match any file
2024-06-30T23:21:37.364Z INFO @wdio/cli:launcher: Run onWorkerStart hook
2024-06-30T23:21:37.366Z INFO @wdio/local-runner: Start worker 0-0 with arg: wdio.conf.ts
[0-0] 2024-06-30T23:21:39.002Z INFO @wdio/local-runner: Run worker command: run
[0-0] RUNNING in chrome - file:///C:/Users/User/Desktop/WebdriverIO2/test/features/demo/demo.feature
[0-0] 2024-06-30T23:21:39.821Z INFO webdriver: Initiate new session using the WebDriver protocol
[0-0] 2024-06-30T23:21:40.039Z INFO webdriver: Using Chromedriver v126.0.6478.127 from cache directory C:\Users\User\AppData\Local\Temp
[0-0] 2024-06-30T23:21:40.071Z INFO chromedriver: Starting ChromeDriver 126.0.6478.127 (a435861f0ca363a64f7485619ee5939833823fce-refs/branch-heads/6478@{#1592}) on port 63814
[0-0] 2024-06-30T23:21:40.072Z INFO chromedriver: Remote connections are allowed by an allowlist (0.0.0.0).
[0-0] 2024-06-30T23:21:40.072Z INFO chromedriver: Please see https://chromedriver.chromium.org/security-considerations for suggestions on keeping ChromeDriver safe.
[0-0] 2024-06-30T23:21:40.077Z INFO chromedriver: ChromeDriver was started successfully.
[0-0] 2024-06-30T23:21:41.095Z INFO @wdio/utils: Started Chromedriver v126.0.6478.127 with params --port=63814 --allowed-origins=* --allowed-ips=0.0.0.0 in 1067ms on port 63814
[0-0] 2024-06-30T23:21:41.113Z INFO webdriver: [POST] http://0.0.0.0:63814/session
[0-0] 2024-06-30T23:21:41.113Z INFO webdriver: DATA {
[0-0]   capabilities: {
[0-0]     alwaysMatch: { browserName: 'chrome', 'goog:chromeOptions': [Object] },
[0-0]     firstMatch: [ {} ]
[0-0]   },
[0-0]   desiredCapabilities: {
[0-0]     browserName: 'chrome',
[0-0]     'goog:chromeOptions': {
[0-0]       binary: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
[0-0]       prefs: [Object]
[0-0]     }
[0-0]   }
[0-0] }

DevTools listening on ws://127.0.0.1:63834/devtools/browser/8a3385f1-60e1-49d4-8416-545b20b1047f
[0-0] 2024-06-30T23:21:42.158Z ERROR @wdio/runner: Error: Cannot find module 'C:\Users\User\Desktop\WebdriverIO2\test\features\page-objects\googlePage' imported from C:\Users\User\Desktop\WebdriverIO2\test\features\step-definitions\serach.ts
[0-0]     at finalizeResolution (C:\Users\User\Desktop\WebdriverIO2\node_modules\ts-node\dist-raw\node-internal-modules-esm-resolve.js:366:11)
[0-0]     at moduleResolve (C:\Users\User\Desktop\WebdriverIO2\node_modules\ts-node\dist-raw\node-internal-modules-esm-resolve.js:801:10)  
[0-0]     at Object.defaultResolve (C:\Users\User\Desktop\WebdriverIO2\node_modules\ts-node\dist-raw\node-internal-modules-esm-resolve.js:912:11)
[0-0]     at C:\Users\User\Desktop\WebdriverIO2\node_modules\ts-node\src\esm.ts:218:35
[0-0]     at entrypointFallback (C:\Users\User\Desktop\WebdriverIO2\node_modules\ts-node\src\esm.ts:168:34)
[0-0]     at C:\Users\User\Desktop\WebdriverIO2\node_modules\ts-node\src\esm.ts:217:14
[0-0]     at addShortCircuitFlag (C:\Users\User\Desktop\WebdriverIO2\node_modules\ts-node\src\esm.ts:409:21)
[0-0]     at resolve (C:\Users\User\Desktop\WebdriverIO2\node_modules\ts-node\src\esm.ts:197:12)
[0-0]     at nextResolve (node:internal/modules/esm/hooks:866:28)
[0-0]     at Hooks.resolve (node:internal/modules/esm/hooks:304:30)
[0-0]  Error:  Cannot find module 'C:\Users\User\Desktop\WebdriverIO2\test\features\page-objects\googlePage' imported from C:\Users\User\Desktop\WebdriverIO2\test\features\step-definitions\serach.ts
[0-0] 2024-06-30T23:21:42.162Z INFO webdriver: COMMAND deleteSession()
[0-0] 2024-06-30T23:21:42.164Z INFO webdriver: [DELETE] http://0.0.0.0:63814/session/342719550238207429f912fb611c82c4
[0-0] 2024-06-30T23:21:42.398Z INFO webdriver: RESULT null
[0-0] 2024-06-30T23:21:42.399Z INFO webdriver: Kill driver process with PID 27424
[0-0] FAILED in chrome - file:///C:/Users/User/Desktop/WebdriverIO2/test/features/demo/demo.feature
2024-06-30T23:21:42.539Z INFO @wdio/cli:launcher: Run onWorkerEnd hook
2024-06-30T23:21:42.540Z INFO @wdio/cli:launcher: Run onComplete hook

Spec Files:      0 passed, 1 failed, 1 total (100% completed) in 00:00:05

2024-06-30T23:21:42.542Z INFO @wdio/local-runner: Shutting down spawned worker
2024-06-30T23:21:42.802Z INFO @wdio/local-runner: Waiting for 0 to shut down gracefully
2024-06-30T23:21:42.803Z INFO @wdio/local-runner: shutting down
PS C:\Users\User\Desktop\WebdriverIO2> 