const { loginCredentials } = require('../../Data/LoginCredentials');
const loginPageInteraction = require('../pageobjects/LoginPageInteraction');
const { links } = require('../../Data/Links');

describe('Smoke positive test for log in', function () {
  before(async function () {
    await loginPageInteraction.openURL(links.shop);
    await loginPageInteraction.loginIntoSystem(
      loginCredentials.login,
      loginCredentials.invalidPassword
    );
  });

  it('user have to get error notification', async function () {
    await loginPageInteraction.waitForDisplayed(
      loginPageInteraction.errorMessage
    );
  });
});
