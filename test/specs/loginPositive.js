const { loginCredentials } = require('../../Data/LoginCredentials');
const loginPageInteraction = require('../pageobjects/LoginPageInteraction');
const { links } = require('../../Data/Links');

describe('Smoke positive test for log in', function () {
  before(async function () {
    await loginPageInteraction.openURL(links.shop);
    await loginPageInteraction.loginIntoSystem(
      loginCredentials.login,
      loginCredentials.validPassword
    );
  });

  it('the user logged in. My account page is opened', async function () {
    await loginPageInteraction.waitForDisplayed(loginPageInteraction.userName);
  });
});
