const { loginCredentials } = require('../../Data/LoginCredentials');
const loginPageInteraction = require('../pageobjects/LoginPageInteraction');
const { links } = require('../../Data/Links');

describe('Smoke positive and negatives test for log in', function () {
  beforeEach(async function () {
    await loginPageInteraction.openURL(links.shop);

    // Add browser Custom Command - browser.getBrowserVersion() - what will return the browser version
    browser.addCommand('getBrowserVersion', async function () {
      const version = JSON.stringify(browser.capabilities.browserVersion);
      return `browser version is: ${version}`;
    });

    // Add element Custom Command - $().hideElement() what will hide the element using element CSS opacity attribute
    browser.addCommand(
      'hideElement',
      async function () {
        const elem = this;
        await loginPageInteraction.waitForDisplayed(elem);
        await loginPageInteraction.execute(
          loginPageInteraction.hideElementScript,
          elem
        );
      },
      true
    );
  });

  loginCredentials.forEach(({ login, password, selector }) => {
    it(`the user logged in with login: ${login} and password: ${password} and shoud get the element: ${selector}`, async function () {
      // await $(loginPageInteraction.banner).hideElement();
      await browser.getBrowserVersion();
      await loginPageInteraction.loginIntoSystem(login, password, selector);
      await loginPageInteraction.deleteCookies();
    });
  });
});
