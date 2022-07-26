const { loginCredentials } = require('../../Data/LoginCredentials');
const extraInteraction = require('../pageobjects/ExtraInteraction');
const loginPageInteraction = require('../pageobjects/LoginPageInteraction');
const { links } = require('../../Data/Links');

describe('Cookies', function () {
  beforeEach(async function () {
    await loginPageInteraction.openURL(links.shop);
  });

  it('cookies after unsuccessful login', async function () {
    await loginPageInteraction.loginIntoSystem(
      loginCredentials.login,
      loginCredentials.invalidPassword
    );
    const invalidCookies = JSON.stringify(
      await extraInteraction.getAllCookies()
    );
    console.log('invalid cookies: ' + invalidCookies);
  });

  it('cookies after successful login', async function () {
    await loginPageInteraction.loginIntoSystem(
      loginCredentials.login,
      loginCredentials.validPassword
    );
    await loginPageInteraction.waitForDisplayedUserName();
    const validCookies = JSON.stringify(await extraInteraction.getAllCookies());
    console.log('valid cookies: ' + validCookies);
  });

  it('remove cookies after login and refresh the page', async function () {
    await loginPageInteraction.deleteCookies();
    await loginPageInteraction.refresh();
    const removeCookies = JSON.stringify(
      await extraInteraction.getAllCookies()
    );
    console.log('remove cookies: ' + removeCookies);
  });

  it('user is logged out', async function () {
    await extraInteraction.isDisplayed(
      loginPageInteraction.buttonLoginOrRegister
    );
  });
});
